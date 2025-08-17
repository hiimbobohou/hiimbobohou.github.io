// 定义42种字母及其分类
const garbageData = [
    // 中辅音 (9种)
    { name: "ก", type: "中辅音" }, { name: "จ", type: "中辅音" },
    { name: "ฎ", type: "中辅音" }, { name: "ฏ", type: "中辅音" },
    { name: "ด", type: "中辅音" }, { name: "ต", type: "中辅音" },
    { name: "บ", type: "中辅音" }, { name: "ป", type: "中辅音" },
    { name: "อ", type: "中辅音" },

    // 高辅音 (10种)
    { name: "ข", type: "高辅音" }, 
    { name: "ฉ", type: "高辅音" }, { name: "ฐ", type: "高辅音" },
    { name: "ถ", type: "高辅音" },
    { name: "ผ", type: "高辅音" }, { name: "ฝ", type: "高辅音" },
    { name: "ศ", type: "高辅音" }, { name: "ษ", type: "高辅音" },
    { name: "ส", type: "高辅音" }, { name: "ห", type: "高辅音" },
    

    // 低辅音 (23种)
    { name: "ค", type: "低辅音" }, { name: "ฮ", type: "低辅音" },
    { name: "ฆ", type: "低辅音" }, { name: "ง", type: "低辅音" },
    { name: "ช", type: "低辅音" }, { name: "ซ", type: "低辅音" },
    { name: "ฌ", type: "低辅音" }, { name: "ญ", type: "低辅音" },
    { name: "ฑ", type: "低辅音" }, { name: "ฒ", type: "低辅音" },
    { name: "ณ", type: "低辅音" }, { name: "ท", type: "低辅音" },
    { name: "ธ", type: "低辅音" }, 
    { name: "น", type: "低辅音" }, { name: "ภ", type: "低辅音" },
    { name: "พ", type: "低辅音" }, { name: "ฟ", type: "低辅音" },
    { name: "ม", type: "低辅音" }, { name: "ฬ", type: "低辅音" },
    { name: "ว", type: "低辅音" }, { name: "ย", type: "低辅音" },
    { name: "ร", type: "低辅音" }, { name: "ล", type: "低辅音" },

];

//Low class consonants：ค, ฆ, ง, ช, ซ, ฌ, ญ, ฑ, ฒ, ณ, ท, ธ, น, พ, ฟ, ภ, ม, ย, ร, ล, ว, ฬ, ฮ

//Middle class consonants：ก, จ, ฎ, ฏ, ด, ต, บ, ป, อ

//High Class Consonants：ข,  ฉ, ฐ, ถ, ผ, ฝ, ศ, ษ, ส, ห
// 游戏状态变量
let score = 0;
let usedGarbage = []; // 已经出现过的字母
let currentGarbage = null; // 当前显示的字母对象
let gameFinished = false;

// DOM元素
let scoreElement, garbagePileElement, messageElement, restartButton, binAreas;

// 初始化游戏
function initGame() {
    // 获取DOM元素
    scoreElement = document.getElementById('score');
    garbagePileElement = document.getElementById('garbage-pile');
    messageElement = document.getElementById('message');
    restartButton = document.getElementById('restart-btn');
    binAreas = document.querySelectorAll('.bin-area');

    score = 0;
    usedGarbage = [];
    currentGarbage = null;
    gameFinished = false;
    scoreElement.textContent = score;
    messageElement.textContent = '';
    restartButton.style.display = 'none';
    garbagePileElement.innerHTML = ''; // 清空垃圾堆
    // 移除所有垃圾桶的drag-over类
    binAreas.forEach(area => area.classList.remove('drag-over'));
    showNextGarbage();
}

// 显示下一个随机字母
function showNextGarbage() {
    if (usedGarbage.length >= garbageData.length) {
        // 所有字母都已出现，游戏结束
        endGame();
        return;
    }

    // 过滤出未使用过的字母
    const availableGarbage = garbageData.filter(g => !usedGarbage.includes(g.name));

    // 随机选择一个
    const randomIndex = Math.floor(Math.random() * availableGarbage.length);
    currentGarbage = availableGarbage[randomIndex];

    // 显示在垃圾堆区域
    garbagePileElement.innerHTML = `<div id="garbage-item" draggable="true">${currentGarbage.name}</div>`;

    // 为新生成的字母添加拖拽事件
    const garbageItem = document.getElementById('garbage-item');
    garbageItem.addEventListener('dragstart', handleDragStart);
    garbageItem.addEventListener('dragend', handleDragEnd);
}

// 拖拽开始事件
function handleDragStart(e) {
    // setData是必需的，即使内容不重要
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = 'move';
    // 添加一点延迟，让拖拽效果更明显
    //setTimeout(() => {
     //    e.target.style.visibility = 'hidden';
    //}, 0);
}

// 拖拽结束事件 (无论成功与否)
function handleDragEnd(e) {
     e.target.style.visibility = 'visible';
}

// 拖拽进入垃圾桶区域
function handleDragEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

// 拖拽在垃圾桶区域悬停
function handleDragOver(e) {
    e.preventDefault(); // 必须阻止默认行为才能触发drop
    e.dataTransfer.dropEffect = 'move'; // 设置dropEffect以修复拖拽问题
}

// 拖拽离开垃圾桶区域
function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

// 拖拽放置到垃圾桶区域
function handleDrop(e) {
    e.preventDefault();
    const binArea = e.currentTarget;
    binArea.classList.remove('drag-over');

    // 获取被拖拽的元素 (虽然本例中只有一个)
    const draggedElementId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);

    if (draggedElement) {
        const binType = binArea.getAttribute('data-type');
        const garbageType = currentGarbage.type;

        if (binType === garbageType) {
            // 分类正确
            score++;
            usedGarbage.push(currentGarbage.name); // 标记为已使用
            messageElement.textContent = `正确! ${currentGarbage.name} 属于 ${garbageType}。`;
            messageElement.style.color = "#388e3c";
        } else {
            // 分类错误
            
            messageElement.textContent = `错误! ${currentGarbage.name} 属于 ${garbageType}，不是 ${binType}。`;
            messageElement.style.color = "#d32f2f";
            
            // 将垃圾"踢回"垃圾堆 (通过动画或简单地重置位置)
            // 这里简单地通过重新显示来实现"踢回"效果
            garbagePileElement.innerHTML = '';
            setTimeout(() => {
                garbagePileElement.innerHTML = `<div id="garbage-item" draggable="true">${currentGarbage.name}</div>`;
                const newItem = document.getElementById('garbage-item');
                newItem.addEventListener('dragstart', handleDragStart);
                newItem.addEventListener('dragend', handleDragEnd);
            }, 300); // 延迟一点时间，让drop事件完成
        }

        // 更新分数
        scoreElement.textContent = score;

        // 如果游戏未结束，显示下一个垃圾
        if (!gameFinished) {          
             showNextGarbage();
            
        }
    }
}

// 游戏结束
function endGame() {
    gameFinished = true;
    messageElement.textContent = `恭喜你！分类完成，最终得分: ${score}`;
    messageElement.style.color = "#1976d2";
    restartButton.style.display = 'inline-block';
}

// 页面加载完成后初始化游戏
window.addEventListener('load', () => {
    // 为垃圾桶区域添加事件监听器
    binAreas = document.querySelectorAll('.bin-area');
    binAreas.forEach(area => {
        area.addEventListener('dragenter', handleDragEnter);
        area.addEventListener('dragover', handleDragOver);
        area.addEventListener('dragleave', handleDragLeave);
        area.addEventListener('drop', handleDrop);
    });

    // 为重启按钮添加事件监听器
    restartButton = document.getElementById('restart-btn');
    restartButton.addEventListener('click', initGame);

    initGame(); // 初始化游戏
});