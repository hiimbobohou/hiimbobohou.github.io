// 游戏数据
const gameData = {
    consonants: [
        { symbol: 'ก', name: 'ก', type: 'middle', displayName: 'ก (中)' },
        { symbol: 'ข', name: 'ข', type: 'high', displayName: 'ข (高)' },
        { symbol: 'ค', name: 'ค', type: 'low', displayName: 'ค (低)' }
    ],
    vowels: [
        { symbol: 'า', name: 'long_a', length: 'long', displayName: 'า (长元音)' },
        { symbol: 'ะ', name: 'short_a', length: 'short', displayName: 'ะ (短元音)' }
    ],
    toneMarks: [
        { symbol: '', name: 'none', displayName: '无 (平调)' },
        { symbol: '่', name: 'mai_ek', displayName: '่ (ไม้เอก - 低平调)' },
        { symbol: '้', name: 'mai_tho', displayName: '้ (ไม้โท - 降调/高平调)' },
        { symbol: '๊', name: 'mai_tri', displayName: '๊ (ไม้ตรี - 高平调)', restrictedTo: ['middle'] }, // 仅中辅音可用
        { symbol: '๋', name: 'mai chattawa', displayName: '๋ (ไม้จัตวา - 升调)', restrictedTo: ['middle'] } // 仅中辅音可用
    ],
    finalConsonantChoices: [
        { symbol: '', name: 'none', type: 'live', displayName: '无 (开音节)' },
        { symbol: 'ม', name: 'm', type: 'live', displayName: 'ม (开音节)' },
        { symbol: 'ก', name: 'k', type: 'dead', displayName: 'ก (闭音节)' }
    ],
    prefixes: [
        { symbol: '', name: 'none', effect: null, displayName: '无 (无效果)' },
        { symbol: 'ห', name: 'ho_nokhuk', effect: 'low_to_high', displayName: 'ห (低->高)' },
        { symbol: 'อ', name: 'angkhan', effect: 'low_shield', displayName: 'อ (低->中)' }
    ],
    tones: {
        mid_level: { name: '中平调', description: '稳定，无起伏' },
        low_level: { name: '低平调', description: '持续低沉' },
        falling: { name: '降调', description: '从高到低' },
        high_level: { name: '高平调', description: '持续高昂' },
        rising: { name: '升调', description: '从低到高' }
    }
};

// 游戏状态
const gameState = {
    level: 1,
    lives: 3,
    score: 0,
    selectedConsonant: null,
    selectedVowel: null,
    selectedToneMark: null,
    selectedFinalConsonant: null,
    selectedPrefix: null
};

// DOM 元素
const elements = {
    consonantChoices: document.getElementById('consonant-choices'),
    vowelChoices: document.getElementById('vowel-choices'),
    toneMarkChoices: document.getElementById('tone-mark-choices'),
    finalConsonantChoices: document.getElementById('final-consonant-choices'),
    prefixChoices: document.getElementById('prefix-choices'),
    calculateBtn: document.getElementById('calculate-btn'),
    toneDisplay: document.getElementById('tone-display'),
    resultDisplay: document.getElementById('result'),
    levelDisplay: document.getElementById('level'),
    livesDisplay: document.getElementById('lives'),
    scoreDisplay: document.getElementById('score')
};

// 初始化游戏
function initGame() {
    // 确保 gameData 存在且结构正确
    if (!gameData || typeof gameData !== 'object') {
        console.error("Game data is missing or invalid.");
        showResult("游戏数据加载失败，请刷新页面重试。", "failure");
        return;
    }
    renderAllChoices();
    // 确保按钮存在再添加监听器
    if (elements.calculateBtn) {
        elements.calculateBtn.addEventListener('click', calculateTone);
    }
    updateGameInfo();
    // 初始状态下，所有声调卡都应该是可用的
    enableAllToneMarks();
}

// 渲染所有选择按钮
function renderAllChoices() {
    renderChoices(elements.consonantChoices, gameData.consonants, 'consonant');
    renderChoices(elements.vowelChoices, gameData.vowels, 'vowel');
    renderChoices(elements.toneMarkChoices, gameData.toneMarks, 'toneMark');
    renderChoices(elements.finalConsonantChoices, gameData.finalConsonantChoices, 'finalConsonant');
    renderChoices(elements.prefixChoices, gameData.prefixes, 'prefix');
}

// 渲染单个选择区域的按钮 (加固 forEach)
function renderChoices(container, items, type) {
    // 检查容器是否存在
    if (!container) {
         console.error(`Container for ${type} not found.`);
         return;
    }
    container.innerHTML = '';
    // 检查 items 是否存在且为数组
    if (!Array.isArray(items)) {
         console.error(`Items for ${type} is not an array or is undefined.`);
         return;
    }
    items.forEach(item => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = item.displayName;
        button.dataset.type = type;
        button.dataset.value = item.name;
        button.addEventListener('click', () => selectChoice(type, item));
        container.appendChild(button);
    });
}

// 选择处理
function selectChoice(type, item) {
    gameState[`selected${capitalizeFirstLetter(type)}`] = item;

    // 高辅音禁用特定声调卡
    if (type === 'consonant') {
        if (item.type === 'high') {
            disableToneMarks(['mai_tri', 'mai chattawa']);
        } else {
            // 对于非高辅音，启用所有声调卡
            enableAllToneMarks();
        }
    }

    // 更新按钮样式 - 使用更精确的选择器
    const parentContainer = event ? event.target.parentElement : null;
    if (parentContainer) {
         const buttons = parentContainer.querySelectorAll('.choice-btn');
         // 加固 forEach
         if (buttons && typeof buttons.forEach === 'function') {
             buttons.forEach(btn => {
                 btn.classList.remove('selected');
             });
         }
    }
    if (event && event.target) {
        event.target.classList.add('selected');
    }
}

// 禁用特定声调卡 (修复：增加存在性检查)
function disableToneMarks(markNames) {
    const toneMarkContainer = elements.toneMarkChoices;
    // 防御性检查
    if (!toneMarkContainer || !Array.isArray(markNames)) {
        if(!toneMarkContainer) console.error("Tone mark container not found for disabling.");
        return;
    }

    markNames.forEach(name => {
        // 使用更精确的选择器在 toneMarkChoices 容器内查找
        const btn = toneMarkContainer.querySelector(`.choice-btn[data-value="${name}"]`);
        if (btn) { // 检查按钮是否存在
            btn.classList.add('disabled');
            btn.disabled = true;
        }
    });
}

// 启用所有声调卡 (修复：增加存在性检查)
function enableAllToneMarks() {
    const toneMarkContainer = elements.toneMarkChoices;
    // 防御性检查
    if (!toneMarkContainer) {
        console.error("Tone mark container not found for enabling.");
        return;
    }

    // 使用 querySelectorAll 在 toneMarkChoices 容器内获取所有 toneMark 按钮
    const toneMarkButtons = toneMarkContainer.querySelectorAll(`.choice-btn`);
    // 加固 forEach
    if (toneMarkButtons && typeof toneMarkButtons.forEach === 'function') {
        toneMarkButtons.forEach(btn => {
            btn.classList.remove('disabled');
            btn.disabled = false;
        });
    }
}

// 字符串首字母大写
function capitalizeFirstLetter(string) {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 更新游戏信息显示
function updateGameInfo() {
    if (elements.levelDisplay) elements.levelDisplay.textContent = gameState.level;
    if (elements.livesDisplay) elements.livesDisplay.textContent = gameState.lives;
    if (elements.scoreDisplay) elements.scoreDisplay.textContent = gameState.score;
}

// 计算最终声调的核心逻辑 (修复 find 错误)
function calculateTone() {
    // 检查是否所有必需选项都已选择
    if (!gameState.selectedConsonant || !gameState.selectedVowel) {
        showResult("请先选择辅音和元音！", "failure");
        return;
    }

    // --- 加固 find 调用 ---
    // 确保 gameData 及其属性存在
    if (!gameData || !Array.isArray(gameData.toneMarks) || !Array.isArray(gameData.finalConsonantChoices) || !Array.isArray(gameData.prefixes)) {
        console.error("Required game data arrays are missing for find operation.");
        showResult("游戏数据错误，请刷新页面重试。", "failure");
        return;
    }

    let consonant = gameState.selectedConsonant;
    let vowel = gameState.selectedVowel;
    
    // 安全地查找默认值
    let toneMark = gameState.selectedToneMark;
    if (!toneMark) {
        toneMark = gameData.toneMarks.find(tm => tm && tm.name === 'none');
        if (!toneMark) {
            console.error("Default tone mark 'none' not found in gameData.toneMarks");
            toneMark = gameData.toneMarks[0] || {}; // Fallback to first item or empty object
        }
    }

    let finalConsonant = gameState.selectedFinalConsonant;
    if (!finalConsonant) {
        finalConsonant = gameData.finalConsonantChoices.find(fc => fc && fc.name === 'none');
        if (!finalConsonant) {
            console.error("Default final consonant 'none' not found in gameData.finalConsonantChoices");
            finalConsonant = gameData.finalConsonantChoices[0] || {};
        }
    }

    let prefix = gameState.selectedPrefix;
    if (!prefix) {
        prefix = gameData.prefixes.find(p => p && p.name === 'none');
        if (!prefix) {
            console.error("Default prefix 'none' not found in gameData.prefixes");
            prefix = gameData.prefixes[0] || {};
        }
    }
    // --- find 调用加固结束 ---

    // 应用前引字效果
    let effectiveConsonantType = consonant.type;
    if (prefix.effect === 'low_to_high' && consonant.type === 'low') {
        effectiveConsonantType = 'high'; // ห + 低辅音 -> 高辅音规则
    } else if (prefix.effect === 'low_shield' && consonant.type === 'low') {
        effectiveConsonantType = 'low'; // อ + 低辅音 -> 保持低辅音规则 (逻辑上是默认的，但明确写出)
    }

    let finalToneKey = null;

    // 规则 3: 尾辅音
    if (finalConsonant.type === 'dead') {
        // 闭音节锁定为高平调
        finalToneKey = 'high_level';
    } else {
        // 开音节，应用正常规则
        // 规则 1 & 2: 辅音阶级 + 声调符号
        if (toneMark.name === 'none') {
            // 无符号，使用默认声调
            if (effectiveConsonantType === 'middle') {
                finalToneKey = 'mid_level';
            } else if (effectiveConsonantType === 'high') {
                finalToneKey = 'falling';
            } else if (effectiveConsonantType === 'low') {
                if (vowel.length === 'long') {
                    finalToneKey = 'mid_level';
                } else { // short vowel
                    finalToneKey = 'high_level';
                }
            }
        } else {
            // 有符号，使用符号决定的声调
            switch (toneMark.name) {
                case 'mai_ek':
                    finalToneKey = 'low_level';
                    break;
                case 'mai_tho':
                    if (effectiveConsonantType === 'middle') {
                        finalToneKey = 'falling';
                    } else { // high or low
                        finalToneKey = 'high_level';
                    }
                    break;
                case 'mai_tri':
                    // 限制检查已在选择时完成
                    finalToneKey = 'high_level';
                    break;
                case 'mai chattawa':
                    // 限制检查已在选择时完成
                    finalToneKey = 'rising';
                    break;
            }
        }
    }

    // 确保 tones 数据存在
    if (!gameData.tones) {
         console.error("Tones data is missing.");
         showResult("游戏数据错误，请刷新页面重试。", "failure");
         return;
    }
    const finalTone = gameData.tones[finalToneKey];
    displayTone(finalTone);

    // 判定胜负
    let isWin = true;
    let message = `发音成功！声调是: ${finalTone ? finalTone.name : '未知'} (${finalTone ? finalTone.description : ''})`;

    // 失败条件检查
    if ((consonant.type === 'high' || (prefix.effect === 'low_to_high' && consonant.type === 'low')) &&
        (toneMark.name === 'mai_tri' || toneMark.name === 'mai chattawa')) {
        isWin = false;
        message = `失败！高辅音 (或被ห前引的低辅音) 不能使用升调 (${toneMark.displayName})。`;
    }
    // 可以在这里添加更多失败条件检查

    if (isWin) {
        gameState.score += 10 * gameState.level;
        showResult(message, "success");
    }
    updateGameInfo();
}

// 显示计算出的声调
function displayTone(tone) {
    if (elements.toneDisplay) {
        elements.toneDisplay.textContent = `最终声调: ${tone ? tone.name : '未知'}`;
        elements.toneDisplay.style.color = getComputedStyle(document.documentElement).getPropertyValue('--info-color');
    }
}

// 显示游戏结果
function showResult(message, type) {
    if (elements.resultDisplay) {
        elements.resultDisplay.textContent = message;
        elements.resultDisplay.className = 'result ' + type;
    }
}

// 重置游戏状态
function resetGame() {
    gameState.level = 1;
    gameState.lives = 3;
    gameState.score = 0;
    gameState.selectedConsonant = null;
    gameState.selectedVowel = null;
    gameState.selectedToneMark = null;
    gameState.selectedFinalConsonant = null;
    gameState.selectedPrefix = null;

    // 重新渲染所有选择项，确保DOM结构正确
    renderAllChoices();

    // 重新绑定事件监听器（因为按钮是重新创建的）
    if (elements.calculateBtn) {
        // 移除旧的监听器以防止重复绑定（可选，但更安全）
        elements.calculateBtn.removeEventListener('click', calculateTone);
        elements.calculateBtn.addEventListener('click', calculateTone);
    }

    // 重置按钮样式 - 现在DOM已经更新，可以安全操作
    const allButtons = document.querySelectorAll('.choice-btn');
    // 加固 forEach
    if (allButtons && typeof allButtons.forEach === 'function') {
        allButtons.forEach(btn => {
            btn.classList.remove('selected', 'disabled');
            btn.disabled = false;
        });
    }


    // 确保所有声调卡在重置后都是启用状态
    // 使用 setTimeout 确保在DOM更新后再执行
    setTimeout(() => {
        enableAllToneMarks();
    }, 0);

    if (elements.toneDisplay) elements.toneDisplay.textContent = '';
    if (elements.resultDisplay) {
        elements.resultDisplay.textContent = '';
        elements.resultDisplay.className = 'result';
    }
    updateGameInfo();
}

// 启动游戏
window.onload = initGame;



