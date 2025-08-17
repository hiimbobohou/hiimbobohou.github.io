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
    { front: "ข", back: "kho", audio: "../sounds/high/kho.mp3" },
    { front: "ฉ", back: "cho", audio: "../sounds/high/cho.mp3" },
    { front: "ฐ", back: "tho", audio: "../sounds/high/tho.mp3" },
    { front: "ถ", back: "tho", audio: "../sounds/high/tho.mp3" },
    { front: "ผ", back: "pho", audio: "../sounds/high/pho.mp3" },
    { front: "ฝ", back: "fo", audio: "../sounds/high/fo.mp3" },
    { front: "ศ", back: "so", audio: "../sounds/high/so.mp3" },
    { front: "ส", back: "so", audio: "../sounds/high/so.mp3" },
    { front: "ษ", back: "so", audio: "../sounds/high/so.mp3" },
    { front: "ห", back: "ho", audio: "../sounds/high/ho.mp3" }
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
        });
    });
}

// 全部翻转
function flipAllCards() {
    initAudio();
    document.querySelectorAll('.card').forEach((card, index) => {
        card.classList.add('flipped');
    });
}

// 全部重置
function resetAllCards() {
    initAudio();
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
    });
    playResetSound();
}

function returnToIndex() {
    window.history.back();
}

// 页面加载完成后初始化
window.addEventListener('load', function() {
    createCards();
    
    const flipAllBtn = document.getElementById('flipAllBtn');
    const resetAllBtn = document.getElementById('resetAllBtn');
    
    flipAllBtn.addEventListener('click', flipAllCards);
    resetAllBtn.addEventListener('click', resetAllCards);
});



