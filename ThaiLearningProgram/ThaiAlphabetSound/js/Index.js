// 创建音频上下文
let audioContext;
let isAudioInitialized = false;

// 初始化音频上下文
function initAudio() {
    if (isAudioInitialized) return;
    
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        isAudioInitialized = true;
    } catch (e) {
        console.error('音频初始化失败:', e);
    }
}


// 为每张卡片播放自定义声音
function playCardSound(cardIndex) {
    const audioPath = cardData[cardIndex].audio;
    const audio = new Audio(audioPath);
    
    audio.play();
}


function playResetSound() {
    const resetAudio = new Audio("sounds/reset.mp3");
    resetAudio.play();
}

// 创建卡片数据
const cardData = [
    { front: "中", back: "ก"},
    { front: "高", back: "ข"},
    { front: "低", back: "ค"}
];

// 创建卡片元素
function createCards() {
    const container = document.getElementById('cardsContainer');
    
    cardData.forEach((data, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        
        const front = document.createElement('div');
        front.className = 'card-face card-front';
        front.textContent = data.front;
        
        const back = document.createElement('div');
        back.className = 'card-face card-back';
        back.textContent = data.back;
        
        card.appendChild(front);
        card.appendChild(back);
        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
    });
    
    // 为每张卡片添加事件监听器
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        initAudio();
        this.classList.toggle('flipped');
        const cardIndex = parseInt(this.dataset.index);
        playCardSound(cardIndex);
        
        // 根据卡片索引跳转到不同页面
        setTimeout(() => {
            switch(cardIndex) {
                case 0:
                    window.location.href = 'html/MiddleClass.html';
                    break;
                case 1:
                    window.location.href = 'html/HighClass.html';
                    break;
                case 2:
                    window.location.href = 'html/LowClass.html';
                    break;
                default:
                    window.location.href = 'index.html';
            }
        }, 500);
    });
});
}



// 页面加载完成后初始化
window.addEventListener('load', function() {
    createCards();
    
    const flipAllBtn = document.getElementById('flipAllBtn');
    const resetAllBtn = document.getElementById('resetAllBtn');
    
    flipAllBtn.addEventListener('click', flipAllCards);
    resetAllBtn.addEventListener('click', resetAllCards);
});



