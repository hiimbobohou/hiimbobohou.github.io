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
    { front: "ก", back: "ko", audio: "../sounds/middle/ko.mp3" },
    { front: "จ", back: "zo", audio: "../sounds/middle/zo.mp3" },
    { front: "ด", back: "do", audio: "../sounds/middle/do.mp3" },
    { front: "ต", back: "to", audio: "../sounds/middle/to.mp3" },
    { front: "บ", back: "bo", audio: "../sounds/middle/bo.mp3" },
    { front: "ป", back: "po", audio: "../sounds/middle/po.mp3" },
    { front: "ฎ", back: "do", audio: "../sounds/middle/do.mp3" },
    { front: "ฏ", back: "to", audio: "../sounds/middle/to.mp3" }
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

// 页面加载完成后初始化
window.addEventListener('load', function() {
    createCards();
    
    const flipAllBtn = document.getElementById('flipAllBtn');
    const resetAllBtn = document.getElementById('resetAllBtn');
    
    flipAllBtn.addEventListener('click', flipAllCards);
    resetAllBtn.addEventListener('click', resetAllCards);
});



