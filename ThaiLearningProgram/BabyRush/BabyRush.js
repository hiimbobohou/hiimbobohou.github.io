// script.js
const carImages = {
    'muvmuv': 'image/Muvmuv.png',
    'lunar': 'image/Lunar.png',
    'any': 'image/Any.png',
};

// 添加每辆赛车对应的音频文件
const carAudio = {
    'muvmuv': 'muvmuv.mp3',
    'lunar': 'lunar.mp3',
    'any': 'any.mp3',
};

let gameRunning = false;
let isPaused = false;
let score = 0;
let nextLetterIndex = 0;
const alphabet = ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'];
let letters = [];
let speed = 3;
let roadSpeed = 2;
let spawnInterval;
let selectedCar = null;

let gameContainer, leftRoad, rightRoad, car, scoreDisplay, pauseStatusDisplay, messageDisplay, restartButton, pauseOverlay, carSelection;
// 添加音频元素变量
let gameAudio;
let leftRoadCenterX, rightRoadCenterX;
let currentLane = 'left';
let animationId, gameUpdateInterval;

function initElements() {
    gameContainer = document.getElementById('game-container');
    leftRoad = document.getElementById('left-road');
    rightRoad = document.getElementById('right-road');
    car = document.getElementById('car');
    scoreDisplay = document.getElementById('score');
    pauseStatusDisplay = document.getElementById('pause-status');
    messageDisplay = document.getElementById('message');
    restartButton = document.getElementById('restart-btn');
    pauseOverlay = document.getElementById('pause-overlay');
    carSelection = document.getElementById('car-selection');
    
    // 初始化音频元素
    gameAudio = document.getElementById('game-audio');

    leftRoadCenterX = leftRoad.offsetLeft + leftRoad.offsetWidth / 2;
    rightRoadCenterX = rightRoad.offsetLeft + rightRoad.offsetWidth / 2;
}

function updateCarPosition() {
    if (!selectedCar || !gameRunning) return;
    const targetRoadCenterX = currentLane === 'left' ? leftRoadCenterX : rightRoadCenterX;
    car.style.left = `${targetRoadCenterX - car.offsetWidth / 2}px`;
}

function createLaneMarkers() {
    document.querySelectorAll('.lane-marker').forEach(m => m.remove());
    const markerSpacing = 50;
    const roadHeight = gameContainer.offsetHeight * 2;

    for (let i = 0; i < roadHeight; i += markerSpacing * 2) {
        const marker1 = document.createElement('div');
        marker1.className = 'lane-marker';
        marker1.style.top = `${i}px`;
        leftRoad.appendChild(marker1);

        const marker2 = document.createElement('div');
        marker2.className = 'lane-marker';
        marker2.style.top = `${i + markerSpacing}px`;
        rightRoad.appendChild(marker2);
    }
}

function updateRoad() {
    if (!gameRunning || isPaused) return;
    const leftRoadTop = parseFloat(leftRoad.style.top) || -gameContainer.offsetHeight;
    const newTop = (leftRoadTop + roadSpeed) % gameContainer.offsetHeight;
    leftRoad.style.top = `${newTop}px`;
    rightRoad.style.top = `${newTop}px`;
}

function spawnNextLetter() {
    if (!gameRunning || isPaused || nextLetterIndex >= alphabet.length) return;
    const correctChar = alphabet[nextLetterIndex];
    const correctLane = Math.random() > 0.5 ? 'left' : 'right';
    const wrongLane = correctLane === 'left' ? 'right' : 'left';

    createLetter(correctChar, correctLane, true);

    let wrongChar;
    do {
        wrongChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    } while (wrongChar === correctChar);

    createLetter(wrongChar, wrongLane, false);
}

function createLetter(char, lane, isCorrect) {
    const letterElement = document.createElement('div');
    letterElement.className = 'letter';
    letterElement.textContent = char;
    letterElement.style.left = `${(lane === 'left' ? leftRoadCenterX : rightRoadCenterX) - 22.5}px`;
    letterElement.style.top = '-45px';

    gameContainer.appendChild(letterElement);

    letters.push({
        element: letterElement,
        char: char,
        lane: lane,
        top: -45,
        isCorrect: isCorrect
    });
}

function updateLetters() {
    if (!gameRunning || isPaused) return;
    for (let i = letters.length - 1; i >= 0; i--) {
        const letterObj = letters[i];
        letterObj.top += speed;
        letterObj.element.style.top = `${letterObj.top}px`;

        if (letterObj.top > gameContainer.offsetHeight) {
            gameContainer.removeChild(letterObj.element);
            letters.splice(i, 1);
            if (letterObj.isCorrect && letterObj.char === alphabet[nextLetterIndex]) {
                endGame(false);
            }
        }
    }
}

function checkCollisions() {
    if (!gameRunning || isPaused || !selectedCar) return;
    const containerRect = gameContainer.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();
    const relativeCarRect = {
        left: carRect.left - containerRect.left,
        top: carRect.top - containerRect.top,
        right: carRect.right - containerRect.left,
        bottom: carRect.bottom - containerRect.top
    };

    for (let i = letters.length - 1; i >= 0; i--) {
        const letterObj = letters[i];
        const letterRect = letterObj.element.getBoundingClientRect();
        const relativeLetterRect = {
            left: letterRect.left - containerRect.left,
            top: letterRect.top - containerRect.top,
            right: letterRect.right - containerRect.left,
            bottom: letterRect.bottom - containerRect.top
        };

        if (!(relativeCarRect.right < relativeLetterRect.left ||
            relativeLetterRect.right < relativeCarRect.left ||
            relativeCarRect.bottom < relativeLetterRect.top ||
            relativeLetterRect.bottom < relativeCarRect.top)) {

            if (letterObj.isCorrect && letterObj.char === alphabet[nextLetterIndex]) {
                score++;
                nextLetterIndex++;
                scoreDisplay.textContent = `得分: ${score}`;
                if (nextLetterIndex < alphabet.length) {
                    spawnNextLetter();
                } else {
                    endGame(true);
                }
            } else {
                endGame(false);
            }
            gameContainer.removeChild(letterObj.element);
            letters.splice(i, 1);
        }
    }
}

function setupEventListeners() {
    gameContainer.addEventListener('mousemove', (e) => {
        if (!gameRunning || isPaused) return;
        const containerRect = gameContainer.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;

        if (Math.abs(mouseX - leftRoadCenterX) < Math.abs(mouseX - rightRoadCenterX)) {
            currentLane = 'left';
        } else {
            currentLane = 'right';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePause();
        }
    });

    restartButton.addEventListener('click', () => {
        carSelection.style.display = 'flex';
    });

    document.getElementById('muvmuv-option').addEventListener('click', () => startGame('muvmuv'));
    document.getElementById('lunar-option').addEventListener('click', () => startGame('lunar'));
    document.getElementById('any-option').addEventListener('click', () => startGame('any'));
}

function togglePause() {
    if (!gameRunning) return;
    isPaused = !isPaused;
    pauseStatusDisplay.textContent = `状态: ${isPaused ? '已暂停' : '游戏中'}`;

    if (isPaused) {
        cancelAnimationFrame(animationId);
        clearInterval(gameUpdateInterval);
        pauseOverlay.style.display = 'flex';
        // 暂停音频播放
        if (gameAudio) {
            gameAudio.pause();
        }
    } else {
        pauseOverlay.style.display = 'none';
        animationId = requestAnimationFrame(carPositionLoop);
        gameUpdateInterval = setInterval(() => {
            if (gameRunning && !isPaused) {
                updateRoad();
                updateLetters();
                checkCollisions();
            }
        }, 16);

        if (nextLetterIndex < alphabet.length && letters.length === 0) {
            spawnInterval = setInterval(() => {
                if (!isPaused && gameRunning && letters.length === 0) {
                    spawnNextLetter();
                }
            }, 1000);
        }
        
        // 恢复音频播放
        if (gameAudio) {
            gameAudio.play().catch(e => console.log("音频播放失败:", e));
        }
    }
}

function startGame(selectedCarKey) {
    if (!carImages[selectedCarKey]) {
        console.error("无效的赛车选择:", selectedCarKey);
        return;
    }
    selectedCar = selectedCarKey;
    carSelection.style.display = 'none';

    gameRunning = true;
    isPaused = false;
    score = 0;
    nextLetterIndex = 0;
    letters = [];
    speed = 3;
    roadSpeed = 2;
    currentLane = 'left';

    car.style.backgroundImage = `url('${carImages[selectedCar]}')`;

    document.querySelectorAll('.letter').forEach(el => el.remove());

    scoreDisplay.textContent = `得分: ${score}`;
    pauseStatusDisplay.textContent = '状态: 游戏中';
    messageDisplay.textContent = '';
    restartButton.style.display = 'none';
    pauseOverlay.style.display = 'none';

    // 播放对应赛车的音频
    if (gameAudio && carAudio[selectedCar]) {
        gameAudio.src = carAudio[selectedCar];
        gameAudio.load();
        gameAudio.play().catch(e => console.log("音频播放失败:", e));
    }

    createLaneMarkers();
    spawnNextLetter();
    updateCarPosition();

    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(carPositionLoop);

    clearInterval(gameUpdateInterval);
    gameUpdateInterval = setInterval(() => {
        if (gameRunning && !isPaused) {
            updateRoad();
            updateLetters();
            checkCollisions();
        }
    }, 16);

    clearInterval(spawnInterval);
    spawnInterval = setInterval(() => {
        if (!isPaused && gameRunning && letters.length === 0) {
            spawnNextLetter();
        }
    }, 1000);
}

function carPositionLoop() {
    if (!gameRunning || isPaused) return;
    updateCarPosition();
    animationId = requestAnimationFrame(carPositionLoop);
}

function endGame(isWin) {
    gameRunning = false;
    isPaused = false;
    cancelAnimationFrame(animationId);
    clearInterval(gameUpdateInterval);
    clearInterval(spawnInterval);
    
    // 停止音频播放
    if (gameAudio) {
        gameAudio.pause();
        gameAudio.currentTime = 0;
    }
    
    pauseStatusDisplay.textContent = '状态: 已结束';
    pauseOverlay.style.display = 'none';
    if (isWin) {
        messageDisplay.textContent = '恭喜你，完成了所有44个泰语辅音！';
    } else {
        if (nextLetterIndex < alphabet.length) {
            messageDisplay.textContent = `游戏失败！下一个正确字母应该是: ${alphabet[nextLetterIndex]}`;
        } else {
            messageDisplay.textContent = `游戏结束！`;
        }
    }
    restartButton.style.display = 'inline-block';
    carSelection.style.display = 'flex';
}

window.addEventListener('load', () => {
    initElements();
    setupEventListeners();
    gameRunning = false;
    pauseStatusDisplay.textContent = '状态: 未开始';
    carSelection.style.display = 'flex';
    leftRoad.style.top = '-600px';
    rightRoad.style.top = '-600px';

});

