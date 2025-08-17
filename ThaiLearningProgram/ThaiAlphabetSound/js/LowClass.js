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
    { front: "ค", back: "kho", audio: "../sounds/low/kho.mp3" },
    { front: "ฆ", back: "kho", audio: "../sounds/low/kho.mp3" },
    { front: "ช", back: "cho", audio: "../sounds/low/cho.mp3" },
    { front: "ซ", back: "so", audio: "../sounds/low/so.mp3" },
    { front: "ฌ", back: "cho", audio: "../sounds/low/cho.mp3" },
    { front: "ฑ", back: "tho", audio: "../sounds/low/tho.mp3" },
    { front: "ฒ", back: "tho", audio: "../sounds/low/tho.mp3" },
    { front: "ท", back: "tho", audio: "../sounds/low/tho.mp3" },
    { front: "ธ", back: "tho", audio: "../sounds/low/tho.mp3" },
    { front: "พ", back: "po", audio: "../sounds/low/po.mp3" },
    { front: "ฟ", back: "fo", audio: "../sounds/low/fo.mp3" },
    { front: "ภ", back: "po", audio: "../sounds/low/po.mp3" },
    { front: "ฮ", back: "ho", audio: "../sounds/low/ho.mp3" },
    { front: "ง", back: "ngo", audio: "../sounds/low/ngo.mp3" },
    { front: "ณ", back: "no", audio: "../sounds/low/no.mp3" },
    { front: "น", back: "no", audio: "../sounds/low/no.mp3" },
    { front: "ม", back: "mo", audio: "../sounds/low/mo.mp3" },
    { front: "ญ", back: "yo", audio: "../sounds/low/yo.mp3" },
    { front: "ย", back: "yo", audio: "../sounds/low/yo.mp3" },
    { front: "ร", back: "ro", audio: "../sounds/low/ro.mp3" },
    { front: "ล", back: "lo", audio: "../sounds/low/lo.mp3" },
    { front: "ว", back: "wo", audio: "../sounds/low/wo.mp3" },
    { front: "ฬ", back: "lo", audio: "../sounds/low/lo.mp3" }
];

// Low class consonants：ค, ฅ, ฆ, ง, ช, ซ, ฌ, ญ, ฑ, ฒ, ณ, ท, ธ, น, พ, ฟ, ภ, ม, ย, ร, ล, ว, ฬ, ฮ

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



