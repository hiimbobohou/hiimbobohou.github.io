// 游戏配置
const CONFIG = {
    // 棋盘大小为 6x7 (42格)
    ROWS: 6,
    COLS: 7,
    Consonants_TYPES: {
        'MiddleConsonants': ['ก', 'จ', 'ฎ', 'ฏ', 'ด', 'ต', 'บ', 'ป', 'อ'],
        'LowConsonants': ['ค', 'ง', 'ช', 'ซ', 'ฌ', 'ญ', 'ฑ', 'ฒ', 'ณ', 'ท', 'ธ', 'น', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ฬ', 'ฮ'],
        'HighConsonants': ['ข', 'ฃ', 'ฉ', 'ฐ', 'ถ', 'ผ', 'ฝ', 'ศ', 'ษ', 'ส', 'ห']
    },
    TOTAL_TIME: 200 // 秒
};

// 游戏状态
const state = {
    board: [],
    score: 0,
    timeElapsed: 0,
    timeLeft: CONFIG.TOTAL_TIME,
    timerInterval: null,
    currentTargetType: null, // 当前目标类型名称
    currentTargetIcons: new Set(), // 当前目标类型包含的所有字母
    clickedTargets: new Set() // 存储 "r,c" 字符串
};

// DOM 元素
const elements = {
    gameBoard: document.getElementById('game-board'),
    score: document.getElementById('score'),
    time: document.getElementById('time'),
    timeLeft: document.getElementById('time-left'),
    message: document.getElementById('message'),
    targetIcon: document.getElementById('target-icon'),
    restartBtn: document.getElementById('restart-btn')
};

// 初始化游戏
function initGame() {
    clearInterval(state.timerInterval);
    state.board = [];
    state.score = 0;
    state.timeElapsed = 0;
    state.timeLeft = CONFIG.TOTAL_TIME;
    state.currentTargetType = null;
    state.currentTargetIcons.clear();
    state.clickedTargets.clear();

    // 更新UI
    elements.score.textContent = state.score;
    elements.time.textContent = state.timeElapsed;
    elements.timeLeft.textContent = state.timeLeft;
    elements.message.textContent = '点击任意字母开始';
    elements.message.className = 'message-info';
    elements.targetIcon.textContent = '当前目标类型: 无';
    elements.gameBoard.innerHTML = '';

    // 生成字母数组 (42种，每种一个)
    let icons = [];
    const typeNames = Object.keys(CONFIG.Consonants_TYPES);

    // 为42个格子分配类型和字母
    const totalTiles = CONFIG.ROWS * CONFIG.COLS; // 42
    const allConsonants = [];

    // 收集所有辅音字母
    for (let i = 0; i < typeNames.length; i++) {
        const typeName = typeNames[i];
        const typeIcons = CONFIG.Consonants_TYPES[typeName];
        allConsonants.push(...typeIcons);
    }

    // 确保辅音字母总数为42
    if (allConsonants.length !== totalTiles) {
        console.error(`辅音字母总数 (${allConsonants.length}) 不等于棋盘格子总数 (${totalTiles})`);
        elements.message.textContent = `错误：辅音字母总数不等于棋盘格子总数`;
        elements.message.className = 'message-error';
        return;
    }

    // 随机选择不重复的字母
    const shuffledConsonants = [...allConsonants].sort(() => 0.5 - Math.random());

    // 创建字母数组
    for (let j = 0; j < totalTiles; j++) {
        icons.push(shuffledConsonants[j]);
    }

    // 辅音字母类型查找函数
    function getTypeNameByIcon(icon, consonantsTypes) {
        for (const typeName in consonantsTypes) {
            if (consonantsTypes[typeName].includes(icon)) {
                return typeName;
            }
        }
        return null;
    }

    // 打乱字母顺序
    icons = shuffleArray(icons);

    // 创建游戏板
    for (let r = 0; r < CONFIG.ROWS; r++) {
        const row = [];
        for (let c = 0; c < CONFIG.COLS; c++) {
            const icon = icons.pop();
            const typeName = getTypeNameByIcon(icon, CONFIG.Consonants_TYPES);
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = icon;
            tile.dataset.row = r;
            tile.dataset.col = c;
            tile.dataset.icon = icon;
            tile.dataset.type = typeName; // 存储类型信息
            tile.addEventListener('click', () => handleTileClick(r, c));
            elements.gameBoard.appendChild(tile);
            row.push({ element: tile, icon: icon, type: typeName, matched: false });
        }
        state.board.push(row);
    }

}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 启动计时器
function startTimer() {
    state.timerInterval = setInterval(() => {
        state.timeElapsed++;
        state.timeLeft--;
        elements.time.textContent = state.timeElapsed;
        elements.timeLeft.textContent = state.timeLeft;

        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            elements.message.textContent = '时间到，游戏失败!';
            elements.message.className = 'message-error';
            disableAllTiles();
        }
    }, 1000);
}

// 禁用所有tile
function disableAllTiles() {
    for (let r = 0; r < CONFIG.ROWS; r++) {
        for (let c = 0; c < CONFIG.COLS; c++) {
            state.board[r][c].element.style.pointerEvents = 'none';
        }
    }
}

// Tile点击事件处理
function handleTileClick(r, c) {
    if(state.timeElapsed===0){
        
    startTimer();
    }

    const clickedTile = state.board[r][c];
    if (clickedTile.matched) return; // 已匹配的tile不响应

    const clickedIcon = clickedTile.icon;
    const clickedIconType = clickedTile.type; // 直接从tile数据中获取类型
    const posKey = `${r},${c}`;

    if (state.currentTargetType === null) {
        // 第一次点击或上一轮已结束，设置新的目标类型
        state.currentTargetType = clickedIconType;
        // 确定该类型的所有字母
        state.currentTargetIcons = new Set(CONFIG.Consonants_TYPES[state.currentTargetType]);
        elements.targetIcon.textContent = `当前类型: ${state.currentTargetType}`;
        state.clickedTargets.clear(); // 重置已点击列表
        state.clickedTargets.add(posKey); // 将第一个点击的加入列表
        clickedTile.element.classList.add('clicked-target'); // 标记为已点击

        updateMessage();

    } else if (state.currentTargetIcons.has(clickedIcon)) {
        // 点击了正确的类型
        if (state.clickedTargets.has(posKey)) {
            // 二次点击，取消选中
            state.clickedTargets.delete(posKey);
            clickedTile.element.classList.remove('clicked-target');
            // 如果取消选中后没有选中的目标了，则重置状态
            if (state.clickedTargets.size === 0) {
                state.currentTargetType = null;
                state.currentTargetIcons.clear();
                elements.targetIcon.textContent = '当前类型: 无';
                elements.message.textContent = '已取消所有选中';
                elements.message.className = 'message-info';
            } else {
                updateMessage();
            }
        } else {
            // 首次点击此目标字母，添加选中
            state.clickedTargets.add(posKey);
            clickedTile.element.classList.add('clicked-target');
            updateMessage();
        }

        // 检查当前目标类型的所有字母是否全部被选中
        const allTargetsSelected = checkAllTargetsSelected();
        if (allTargetsSelected && state.clickedTargets.size > 0) { // 确保有选中的目标
            // 执行消除
            for (const posKey of state.clickedTargets) {
                const [tr, tc] = posKey.split(',').map(Number);
                state.board[tr][tc].element.classList.remove('clicked-target');
                state.board[tr][tc].element.classList.add('matched');
                state.board[tr][tc].matched = true;
            }

            state.score += 10; // 假设完成一组得10分
            elements.score.textContent = state.score;
            elements.message.textContent = `成功消除 ${state.clickedTargets.size} 个 ${state.currentTargetType} !`;
            elements.message.className = 'message-success';
            state.currentTargetType = null;
            state.currentTargetIcons.clear();
            state.clickedTargets.clear();
            elements.targetIcon.textContent = '当前目标类型: 无';

            // 检查游戏是否结束
            if (isGameFinished()) {
                clearInterval(state.timerInterval);
                elements.message.textContent = '恭喜你，完成游戏!';
                elements.message.className = 'message-success';
            } else {
                // 延迟重置消息，让用户看到成功信息
                setTimeout(() => {
                    if (state.timeLeft > 0 && !isGameFinished()) {
                        elements.message.textContent = '点击任意辅音字母开始下一组';
                        elements.message.className = 'message-info';
                    }
                }, 1500);
            }
        }

    } else {
        // 点击了不同类型的图标
        if (state.clickedTargets.size > 0) {
            elements.message.textContent = `请先处理 ${state.currentTargetType}  或取消所有选中`;
            elements.message.className = 'message-error';
        } else {
            // 如果没有选中的目标，点击不同字母相当于开始新的一轮
            if (elements.message.classList.contains('message-error')) {
                elements.message.textContent = '';
            }
        }
    }
}


// 更新消息显示
function updateMessage() {
    if (state.currentTargetType) {
        const totalCount = countTotalTargets(state.currentTargetIcons);
        const remaining = totalCount - state.clickedTargets.size;
        elements.message.textContent = `已选中 ${state.clickedTargets.size} 个，还需选中 ${remaining} 个`;
        elements.message.className = 'message-info';
    }
}

// 计算面板上特定类型图标未被匹配的总数
function countTotalTargets(targetIconsSet) {
    let count = 0;
    for (let r = 0; r < CONFIG.ROWS; r++) {
        for (let c = 0; c < CONFIG.COLS; c++) {
            if (!state.board[r][c].matched && targetIconsSet.has(state.board[r][c].icon)) {
                count++;
            }
        }
    }
    return count;
}

// 检查当前目标类型的所有图标是否全部被选中
function checkAllTargetsSelected() {
    if (!state.currentTargetType || state.clickedTargets.size === 0) return false;

    const totalCount = countTotalTargets(state.currentTargetIcons);
    return state.clickedTargets.size === totalCount;
}

// 检查游戏是否完成
function isGameFinished() {
    for (let r = 0; r < CONFIG.ROWS; r++) {
        for (let c = 0; c < CONFIG.COLS; c++) {
            if (!state.board[r][c].matched) {
                return false;
            }
        }
    }
    return true;
}

// 页面加载完成后初始化游戏
window.addEventListener('DOMContentLoaded', (event) => {
    elements.restartBtn.addEventListener('click', initGame);
    initGame();
});
