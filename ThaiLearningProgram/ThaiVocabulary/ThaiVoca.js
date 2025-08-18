// 预设词汇数据
const vocabularyData = {
  "问候": [
    { chinese: "你好", thai: "สวัสดี" },
    { chinese: "谢谢", thai: "ขอบคุณ" },
    { chinese: "再见", thai: "ลาก่อน" },
    { chinese: "对不起", thai: "ขอโทษ" },
    { chinese: "没关系", thai: "ไม่เป็นไร" }
  ],
  "颜色": [
    { chinese: "红色", thai: "สีแดง" },
    { chinese: "蓝色", thai: "สีน้ำเงิน" },
    { chinese: "绿色", thai: "สีเขียว" },
    { chinese: "黄色", thai: "สีเหลือง" },
    { chinese: "白色", thai: "สีขาว" }
  ],
  "星期": [
    { chinese: "星期一", thai: "วันจันทร์" },
    { chinese: "星期二", thai: "วันอังคาร" },
    { chinese: "星期三", thai: "วันพุธ" },
    { chinese: "星期四", thai: "วันพฤหัสบดี" },
    { chinese: "星期五", thai: "วันศุกร์" },
    { chinese: "星期六", thai: "วันเสาร์" },
    { chinese: "星期天", thai: "วันอาทิตย์" },
    { chinese: "周末", thai: "สุดสัปดาห์" },
    { chinese: "休息日", thai: "วันหยุด" },
  ],
  "月份": [
  { chinese: "一月", thai: "มกราคม" },
  { chinese: "二月", thai: "กุมภาพันธ์" },
  { chinese: "三月", thai: "มีนาคม" },
  { chinese: "四月", thai: "เมษายน" },
  { chinese: "五月", thai: "พฤษภาคม" },
  { chinese: "六月", thai: "มิถุนายน" },
  { chinese: "七月", thai: "กรกฎาคม" },
  { chinese: "八月", thai: "สิงหาคม" },
  { chinese: "九月", thai: "กันยายน" },
  { chinese: "十月", thai: "ตุลาคม" },
  { chinese: "十一月", thai: "พฤศจิกายน" },
  { chinese: "十二月", thai: "ธันวาคม" }
],
  "家庭成员": [
  { chinese: "爸爸", thai: "พ่อ" },
  { chinese: "妈妈", thai: "แม่" },
  { chinese: "儿子", thai: "ลูกชาย" },
  { chinese: "女儿", thai: "ลูกสาว" },
  { chinese: "哥哥", thai: "พี่ชาย" },
  { chinese: "姐姐", thai: "พี่สาว" },
  { chinese: "弟弟", thai: "น้องชาย" },
  { chinese: "妹妹", thai: "น้องสาว" },
  { chinese: "爷爷", thai: "ปู่" },
  { chinese: "奶奶", thai: "ย่า" },
  { chinese: "外公", thai: "ตา" },
  { chinese: "外婆", thai: "ยาย" },
  { chinese: "叔叔", thai: "ลุง" },
  { chinese: "阿姨", thai: "ป้า" },
  { chinese: "舅舅", thai: "น้าชาย" },
  { chinese: "舅妈", thai: "น้าสะใภ้" },
  { chinese: "丈夫", thai: "สามี" },
  { chinese: "妻子", thai: "ภรรยา" },
  { chinese: "孙子", thai: "หลานชาย" },
  { chinese: "孙女", thai: "หลานสาว" }
],
  "食物": [
  { chinese: "米饭", thai: "ข้าว" },
  { chinese: "粿条", thai: "ก๋วยเตี๋ยว" },
  { chinese: "汤", thai: "ซุป" },
  { chinese: "鸡肉", thai: "ไก่" },
  { chinese: "猪肉", thai: "หมู" },
  { chinese: "牛肉", thai: "เนื้อ" }, 
  { chinese: "鱼", thai: "ปลา" },
  { chinese: "鸡蛋", thai: "ไข่" },
  { chinese: "豆腐", thai: "เต้าหู้" },
  { chinese: "蔬菜", thai: "ผัก" },
  { chinese: "辣椒", thai: "พริก" },
  { chinese: "糖", thai: "น้ำตาล" },
  { chinese: "盐", thai: "เกลือ" },
  { chinese: "面包", thai: "ขนมปัง" },
  { chinese: "冰淇淋", thai: "ไอติม" }
],
  "水果": [
  { chinese: "水果", thai: "ผลไม้" },
  { chinese: "香蕉", thai: "กล้วย" },
  { chinese: "苹果", thai: "แอปเปิ้ล" },
  { chinese: "橙子", thai: "ส้ม" },
  { chinese: "西瓜", thai: "แตงโม" },
  { chinese: "芒果", thai: "มะม่วง" },
],
"饮料": [
  { chinese: "水", thai: "น้ำ" },
  { chinese: "茶", thai: "ชา" },
  { chinese: "咖啡", thai: "กาแฟ" },
  { chinese: "牛奶", thai: "นม" },
  { chinese: "果汁", thai: "น้ำผลไม้" },
  { chinese: "可乐", thai: "โคล่า" },
  { chinese: "啤酒", thai: "เบียร์" },
  { chinese: "红酒", thai: "ไวน์" },
  { chinese: "白酒", thai: "วิสกี้" },
  { chinese: "鸡尾酒", thai: "ค็อกเทล" },
  { chinese: "奶茶", thai: "ชานม" },
  { chinese: "柠檬水", thai: "น้ำมะนาว" },
  { chinese: "冰茶", thai: "ชาเย็น" },
  { chinese: "热巧克力", thai: "ช็อกโกแลตร้อน" },
  { chinese: "椰子水", thai: "น้ำมะพร้าว" },
  { chinese: "豆奶", thai: "นมถั่วเหลือง" },
  { chinese: "蜂蜜", thai: "น้ำผึ้ง" }
],
"常用动词1": [
  { chinese: "吃", thai: "กิน" },
  { chinese: "喝", thai: "ดื่ม" },
  { chinese: "去", thai: "ไป" },
  { chinese: "来", thai: "มา" },
  { chinese: "做", thai: "ทำ" },
  { chinese: "说", thai: "พูด" },
  { chinese: "看", thai: "ดู" },
  { chinese: "听", thai: "ฟัง" },
  { chinese: "写", thai: "เขียน" },
  { chinese: "读", thai: "อ่าน" },
  { chinese: "站", thai: "ยืน" },
  { chinese: "坐", thai: "นั่ง" },
  { chinese: "睡", thai: "นอน" },
  { chinese: "走", thai: "เดิน" },
  { chinese: "跑", thai: "วิ่ง" }
],
"常用动词2": [
  { chinese: "卖", thai: "ขาย" },
  { chinese: "给", thai: "ให้" },
  { chinese: "拿", thai: "ถือ" },
  { chinese: "知道", thai: "รู้" },
  { chinese: "想", thai: "คิด" },
  { chinese: "爱", thai: "รัก" },
  { chinese: "学习", thai: "เรียน" },
  { chinese: "工作", thai: "ทำงาน" },
  { chinese: "玩", thai: "เล่น" },
  { chinese: "帮助", thai: "ช่วย" },
  { chinese: "开始", thai: "เริ่ม" },
  { chinese: "结束", thai: "จบ" },
  { chinese: "等待", thai: "รอ" },
  { chinese: "寻找", thai: "หา" }
],
"常用形容词1": [
  { chinese: "大", thai: "ใหญ่" },
  { chinese: "小", thai: "เล็ก" },
  { chinese: "高", thai: "สูง" },
  { chinese: "矮", thai: "ต่ำ" },
  { chinese: "长", thai: "ยาว" },
  { chinese: "短", thai: "สั้น" },
  { chinese: "宽", thai: "กว้าง" },
  { chinese: "窄", thai: "แคบ" },
  { chinese: "厚", thai: "หนา" },
  { chinese: "薄", thai: "บาง" },
  { chinese: "新", thai: "ใหม่" },
  { chinese: "旧", thai: "เก่า" },
  { chinese: "好", thai: "ดี" },
  { chinese: "坏", thai: "แย่" }
],
"常用形容词2": [
  { chinese: "快", thai: "เร็ว" },
  { chinese: "慢", thai: "ช้า" },
  { chinese: "热", thai: "ร้อน" },
  { chinese: "冷", thai: "เย็น" },
  { chinese: "漂亮", thai: "สวย" },
  { chinese: "丑", thai: "ไม่สวย" },
  { chinese: "聪明", thai: "ฉลาด" },
  { chinese: "笨", thai: "โง่" },
  { chinese: "年轻", thai: "อายุน้อย" },
  { chinese: "年老", thai: "อายุมาก" },
  { chinese: "强壮", thai: "แข็งแรง" },
  { chinese: "虚弱", thai: "อ่อนแอ" },
  { chinese: "干净", thai: "สะอาด" },
  { chinese: "脏", thai: "สกปรก" },
  { chinese: "开心", thai: "มีความสุข" },
  { chinese: "伤心", thai: "เศร้า" }
]
};

// 干扰字母
const distractionLetters = [
  'ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช',
  'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด',
  'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ',
  'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ฤ', 'ล', 'ว', 'ศ', 'ษ',
  'ส', 'ห', 'ฬ', 'อ', 'ฮ',
  'ะ', 'ั', 'า', 'ำ', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู',
  'เ', 'แ', 'โ', 'ใ', 'ไ', '็', '่', '้', '๊', '๋'
];

// 游戏状态变量
let selectedCategory = '';
let customVocabulary = []; // 仅用于临时存储和显示
let currentWord = {};
let score = 0;
let userInput = [];
let selectedLetters = []; // 用于撤销功能
// 跟踪已使用的单词（当前轮次已正确答对的单词）
let correctlyAnsweredWords = [];
// 跟踪本轮需要学习的单词（初始为类别下所有单词）
let currentLearningRoundPool = [];
// 跟踪答错的单词，以便在下一轮学习
let incorrectlyAnsweredWords = [];

// DOM 元素
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');

const setupScreen = document.getElementById('setupScreen');
const managementScreen = document.getElementById('managementScreen');
const gameScreen = document.getElementById('gameScreen');

const categoryGrid = document.getElementById('categoryGrid');
const toggleAddCategoryBtn = document.getElementById('toggleAddCategory');
const addCategoryInputs = document.getElementById('addCategoryInputs');
const newCategoryNameInput = document.getElementById('newCategoryName');
const createCategoryBtn = document.getElementById('createCategoryBtn');
const toggleCustomInputBtn = document.getElementById('toggleCustomInput');
const customInputs = document.getElementById('customInputs');
const customChineseInput = document.getElementById('customChinese');
const customThaiInput = document.getElementById('customThai');
const categorySelect = document.getElementById('categorySelect');
const addCustomWordBtn = document.getElementById('addCustomWord');
const customWordsList = document.getElementById('customWordsList');
const clearCustomWordsBtn = document.getElementById('clearCustomWords');
const startGameBtn = document.getElementById('startGameBtn');

const categoryList = document.getElementById('categoryList');
const wordListTitle = document.getElementById('wordListTitle'); // 新增：词汇列表标题
const wordList = document.getElementById('wordList');
const refreshManagementBtn = document.getElementById('refreshManagement');

const chineseWordElement = document.getElementById('chineseWord');
const hintElement = document.getElementById('hint');
const letterCountElement = document.getElementById('letterCount');
const userInputElement = document.getElementById('userInput');
const lettersContainerElement = document.getElementById('lettersContainer');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('nextButton');
const undoButton = document.getElementById('undoButton');
const backToSetupBtn = document.getElementById('backToSetupBtn');
const scoreElement = document.getElementById('score');
const currentCategoryTag = document.getElementById('currentCategoryTag');
const remainingWordsElement = document.getElementById('remainingWords');

// Modal elements
const completionModal = document.getElementById('completionModal');
const completionMessage = document.getElementById('completionMessage');
const completionDetails = document.getElementById('completionDetails');
const playAgainBtn = document.getElementById('playAgainBtn');
const chooseCategoryBtn = document.getElementById('chooseCategoryBtn');
const closeModalSpan = document.getElementsByClassName('close')[0];

// 导航切换
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    
    // 更新活动按钮
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // 显示目标屏幕
    screens.forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
    
    // 如果切换到管理界面，则刷新列表
    if (target === 'managementScreen') {
      refreshManagementView();
    }
  });
});

// 初始化类别选择界面 (设置界面)
function initCategorySelection() {
  categoryGrid.innerHTML = '';
  const categories = [...Object.keys(vocabularyData)];
  
  categories.forEach(category => {
    const button = document.createElement('div');
    button.className = 'category-btn';
    button.textContent = category;
    button.addEventListener('click', () => selectCategory(category, button));
    categoryGrid.appendChild(button);
  });
}

// 更新类别选择下拉框
function updateCategorySelect() {
    categorySelect.innerHTML = '<option value="">-- 请选择要添加到的类别 --</option>';
    const categories = [...Object.keys(vocabularyData)];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// 选择类别
function selectCategory(category, buttonElement) {
  // 取消之前选中的按钮
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // 选中当前按钮
  buttonElement.classList.add('selected');
  selectedCategory = category;
  startGameBtn.disabled = false; // 选择类别后即可开始游戏
}

// 切换添加新类别输入区域
toggleAddCategoryBtn.addEventListener('click', () => {
  addCategoryInputs.classList.toggle('active');
});

// 创建新类别
createCategoryBtn.addEventListener('click', () => {
  const categoryName = newCategoryNameInput.value.trim();
  
  if (categoryName && !vocabularyData.hasOwnProperty(categoryName)) {
    vocabularyData[categoryName] = [];
    newCategoryNameInput.value = '';
    addCategoryInputs.classList.remove('active');
    initCategorySelection();
    updateCategorySelect();
    refreshManagementView();
    showFeedback(`类别 "${categoryName}" 创建成功`, 'correct');
  } else if (!categoryName) {
    showFeedback('请输入类别名称。', 'incorrect');
  } else {
    showFeedback('类别名称已存在，请换一个名称。', 'incorrect');
  }
});

// 切换自定义输入区域
toggleCustomInputBtn.addEventListener('click', () => {
  customInputs.classList.toggle('active');
  if (customInputs.classList.contains('active')) {
      updateCategorySelect();
  }
});

// 添加自定义单词
addCustomWordBtn.addEventListener('click', () => {
  const chinese = customChineseInput.value.trim();
  const thai = customThaiInput.value.trim();
  const targetCategory = categorySelect.value;
  
  if (chinese && thai && targetCategory) {
    vocabularyData[targetCategory].push({ chinese, thai });
    customVocabulary.push({ chinese, thai, category: targetCategory });
    
    customChineseInput.value = '';
    customThaiInput.value = '';
    categorySelect.value = '';
    updateCustomWordsList();
    refreshManagementView();
    showFeedback(`单词 "${chinese} - ${thai}" 已添加到 "${targetCategory}"`, 'correct');
  } else {
    let msg = '';
    if (!chinese || !thai) msg = '请输入完整的中文和泰语单词。';
    else if (!targetCategory) msg = '请选择要添加到的类别。';
    showFeedback(msg, 'incorrect');
  }
});

// 更新自定义单词列表显示
function updateCustomWordsList() {
  customWordsList.innerHTML = '';
  if (customVocabulary.length === 0) {
    customWordsList.innerHTML = '<p>暂无自定义单词</p>';
  } else {
    customVocabulary.forEach((word, index) => {
      const p = document.createElement('p');
      p.textContent = `${word.chinese} - ${word.thai} [${word.category}]`;
      customWordsList.appendChild(p);
    });
  }
}

// 清空自定义单词 (仅清空临时显示列表)
clearCustomWordsBtn.addEventListener('click', () => {
  completionMessage.textContent = "确认操作";
  completionDetails.textContent = "确定要清空所有显示的自定义单词吗？（!!警告!! 该操作不可恢复）";
  playAgainBtn.textContent = "确定";
  chooseCategoryBtn.textContent = "取消";
  chooseCategoryBtn.style.display = "inline-block";
  
  const originalPlayAgainFn = playAgainBtn.onclick;
  const originalChooseCategoryFn = chooseCategoryBtn.onclick;
  
  playAgainBtn.onclick = () => {
      customVocabulary = [];
      updateCustomWordsList();
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  chooseCategoryBtn.onclick = () => {
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  completionModal.style.display = "block";
});

// 刷新管理界面
refreshManagementBtn.addEventListener('click', refreshManagementView);

function refreshManagementView() {
  // 更新类别列表 (管理界面)
  categoryList.innerHTML = '';
  const categories = Object.keys(vocabularyData);
  
  if (categories.length === 0) {
    categoryList.innerHTML = '<div class="empty-message">暂无类别</div>';
    wordList.innerHTML = '<div class="empty-message">请选择一个类别查看词汇</div>';
    wordListTitle.textContent = '词汇列表'; // 重置标题
    return;
  }
  
  categories.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category-item';
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = category;
    nameSpan.style.cursor = 'pointer';
    nameSpan.addEventListener('click', () => {
      displayWordsForCategory(category);
    });
    
    const countSpan = document.createElement('span');
    countSpan.textContent = `(${vocabularyData[category].length})`;
    countSpan.style.color = '#666';
    countSpan.style.marginLeft = '10px';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '删除';
    deleteBtn.addEventListener('click', () => {
      confirmDeleteCategory(category);
    });
    
    div.appendChild(nameSpan);
    div.appendChild(countSpan);
    div.appendChild(deleteBtn);
    categoryList.appendChild(div);
  });
  
  // 如果之前有选中的类别，继续显示其词汇
  if (selectedCategory && vocabularyData[selectedCategory]) {
    displayWordsForCategory(selectedCategory);
  } else {
    wordList.innerHTML = '<div class="empty-message">请选择一个类别查看词汇</div>';
    wordListTitle.textContent = '词汇列表'; // 重置标题
  }
}

// 显示指定类别的词汇
function displayWordsForCategory(categoryName) {
  selectedCategory = categoryName; // 在管理界面也记录当前查看的类别
  // 更新词汇列表标题
  wordListTitle.textContent = `${categoryName} 词汇列表`;
  
  wordList.innerHTML = '';
  
  const words = vocabularyData[categoryName] || [];
  
  if (words.length === 0) {
    wordList.innerHTML = '<div class="empty-message">该类别下暂无单词</div>';
    return;
  }
  
  words.forEach((word, index) => {
    const div = document.createElement('div');
    div.className = 'word-item';
    
    const wordSpan = document.createElement('span');
    wordSpan.textContent = `${word.chinese} - ${word.thai}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '删除';
    deleteBtn.addEventListener('click', () => {
      confirmDeleteWord(categoryName, index);
    });
    
    div.appendChild(wordSpan);
    div.appendChild(deleteBtn);
    wordList.appendChild(div);
  });
}

// 确认删除类别 (仅在管理界面可用)
function confirmDeleteCategory(categoryName) {
  if (Object.keys(vocabularyData).length <= 1) {
    showFeedback('至少需要保留一个类别', 'incorrect');
    return;
  }
  
  completionMessage.textContent = "确认删除";
  completionDetails.textContent = `确定要删除类别 "${categoryName}" 吗？该类别下的所有单词也将被删除。`;
  playAgainBtn.textContent = "确定删除";
  chooseCategoryBtn.textContent = "取消";
  chooseCategoryBtn.style.display = "inline-block";
  
  // 临时覆盖按钮功能
  const originalPlayAgainFn = playAgainBtn.onclick;
  const originalChooseCategoryFn = chooseCategoryBtn.onclick;
  
  playAgainBtn.onclick = () => {
      deleteCategory(categoryName);
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  chooseCategoryBtn.onclick = () => {
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  completionModal.style.display = "block";
}

// 删除类别 (仅在管理界面可用)
function deleteCategory(categoryName) {
  if (vocabularyData.hasOwnProperty(categoryName)) {
    delete vocabularyData[categoryName];
    
    // 如果删除的是当前选中的类别，取消选择
    if (selectedCategory === categoryName) {
      selectedCategory = '';
      startGameBtn.disabled = true;
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('selected');
      });
    }
    
    // 更新所有相关界面
    initCategorySelection();
    updateCategorySelect();
    refreshManagementView();
    
    showFeedback(`类别 "${categoryName}" 已删除`, 'correct');
  }
}

// 确认删除单词 (仅在管理界面可用)
function confirmDeleteWord(categoryName, wordIndex) {
  const word = vocabularyData[categoryName][wordIndex];
  
  completionMessage.textContent = "确认删除";
  completionDetails.textContent = `确定要删除单词 "${word.chinese} - ${word.thai}" 吗？`;
  playAgainBtn.textContent = "确定删除";
  chooseCategoryBtn.textContent = "取消";
  chooseCategoryBtn.style.display = "inline-block";
  
  const originalPlayAgainFn = playAgainBtn.onclick;
  const originalChooseCategoryFn = chooseCategoryBtn.onclick;
  
  playAgainBtn.onclick = () => {
      deleteWord(categoryName, wordIndex);
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  chooseCategoryBtn.onclick = () => {
      completionModal.style.display = "none";
      playAgainBtn.onclick = originalPlayAgainFn;
      chooseCategoryBtn.onclick = originalChooseCategoryFn;
      chooseCategoryBtn.style.display = "inline-block";
  };
  
  completionModal.style.display = "block";
}

// 删除单词 (仅在管理界面可用)
function deleteWord(categoryName, wordIndex) {
  if (vocabularyData[categoryName] && vocabularyData[categoryName][wordIndex]) {
    const deletedWord = vocabularyData[categoryName].splice(wordIndex, 1)[0];
    
    // 如果在游戏界面且删除的是当前类别的单词，需要更新游戏状态
    if (gameScreen.classList.contains('active') && selectedCategory === categoryName) {
      // 从已正确答对单词中移除（如果存在）
      const correctIndex = correctlyAnsweredWords.findIndex(w => w.chinese === deletedWord.chinese && w.thai === deletedWord.thai);
      if (correctIndex !== -1) {
        correctlyAnsweredWords.splice(correctIndex, 1);
      }
      // 从本轮学习池中移除
      const poolIndex = currentLearningRoundPool.findIndex(w => w.chinese === deletedWord.chinese && w.thai === deletedWord.thai);
      if (poolIndex !== -1) {
        currentLearningRoundPool.splice(poolIndex, 1);
      }
      // 从答错单词列表中移除
      const incorrectIndex = incorrectlyAnsweredWords.findIndex(w => w.chinese === deletedWord.chinese && w.thai === deletedWord.thai);
      if (incorrectIndex !== -1) {
        incorrectlyAnsweredWords.splice(incorrectIndex, 1);
      }
      // 如果当前正在玩的单词被删除，则跳到下一个
      if (currentWord.chinese === deletedWord.chinese && currentWord.thai === deletedWord.thai) {
        getNextWord();
      } else {
        // 否则更新剩余单词数
        updateRemainingWordsCount();
      }
    }
    
    refreshManagementView();
    showFeedback(`单词 "${deletedWord.chinese} - ${deletedWord.thai}" 已删除`, 'correct');
  }
}

// 显示反馈信息
function showFeedback(message, type) {
  // 在管理界面和设置界面都显示反馈
  if (setupScreen.classList.contains('active') || managementScreen.classList.contains('active')) {
    feedbackElement.textContent = message;
    feedbackElement.className = 'feedback ' + type;
    setTimeout(() => {
        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
    }, 3000);
  }
}

// 开始游戏
startGameBtn.addEventListener('click', startGame);

function startGame() {
  if (!selectedCategory) {
      showFeedback('请选择一个词语类别。', 'incorrect');
      return;
  }
  
  // 隐藏设置界面，显示游戏界面
  setupScreen.classList.remove('active');
  gameScreen.classList.add('active');
  
  // 重置游戏状态
  score = 0;
  scoreElement.textContent = score;
  currentCategoryTag.textContent = selectedCategory;
  
  // 初始化本轮学习池为该类别的所有单词
  currentLearningRoundPool = [...(vocabularyData[selectedCategory] || [])];
  correctlyAnsweredWords = []; // 本轮已正确答对的单词
  incorrectlyAnsweredWords = []; // 本轮答错的单词
  
  if (currentLearningRoundPool.length === 0) {
      showFeedback('所选类别中没有单词，请选择其他类别或添加自定义单词。', 'incorrect');
      goBackToSetup();
      return;
  }
  
  updateRemainingWordsCount();
  getNextWord();
}

// 更新剩余单词数量显示 (修正版)
function updateRemainingWordsCount() {
    // 计算本轮还未学习的单词（去重）
    // 1. 本轮单词池中还未被正确答对的单词
    const wordsNotYetLearned = currentLearningRoundPool.filter(word => 
        !correctlyAnsweredWords.some(learned => learned.chinese === word.chinese && learned.thai === word.thai)
    );
    
    // 2. 本轮答错的单词（这些需要重新学习）
    // 为了准确计数，我们需要合并这两个列表并去重
    const allPendingWords = [...wordsNotYetLearned, ...incorrectlyAnsweredWords];
    
    // 使用一个 Set 来存储唯一的单词标识符（例如 "中文-泰语"）
    const uniquePendingWords = new Set();
    allPendingWords.forEach(word => {
        uniquePendingWords.add(`${word.chinese}-${word.thai}`);
    });
    
    const remaining = uniquePendingWords.size;
    remainingWordsElement.textContent = remaining;
}

// 获取下一个单词
function getNextWord() {
  userInput = [];
  selectedLetters = [];
  updateInputDisplay();
  feedbackElement.textContent = '';
  feedbackElement.className = 'feedback';
  nextButton.disabled = true;
  undoButton.disabled = true;
  hintElement.style.display = 'block';

  // 检查本轮是否完成
  const wordsLearnedInCurrentRound = correctlyAnsweredWords.filter(word => 
      currentLearningRoundPool.some(poolWord => poolWord.chinese === word.chinese && poolWord.thai === word.thai)
  ).length;

  if (wordsLearnedInCurrentRound >= currentLearningRoundPool.length) {
      // 如果本轮所有单词都已正确学习过
      if (incorrectlyAnsweredWords.length === 0) {
          // 如果没有答错的单词，则整个类别完成
          showCompletionModal();
          return;
      } else {
          // 如果有答错的单词，则开始下一轮，只学习这些答错的单词
          currentLearningRoundPool = [...incorrectlyAnsweredWords];
          correctlyAnsweredWords = []; // 重置本轮正确记录
          incorrectlyAnsweredWords = []; // 重置本轮错误记录
      }
  }

  let availableWords = currentLearningRoundPool.filter(word => 
      !correctlyAnsweredWords.includes(word) // 过滤掉本轮已正确答对的单词
  );

  // 将本轮答错的单词优先加入待选列表
  let nextWordPool = [...incorrectlyAnsweredWords, ...availableWords];
  
  if (nextWordPool.length === 0) {
      // 理论上不应该到达这里，因为上面已经处理了完成条件
      showCompletionModal();
      return;
  }

  const randomIndex = Math.floor(Math.random() * nextWordPool.length);
  currentWord = nextWordPool[randomIndex];
  
  chineseWordElement.textContent = currentWord.chinese;
  const letterCount = currentWord.thai.length;
  letterCountElement.textContent = letterCount;
  
  updateRemainingWordsCount();
  generateLetterButtons(currentWord.thai);
}

// 生成字母按钮（包含干扰项）
function generateLetterButtons(word) {
  lettersContainerElement.innerHTML = '';
  const correctLetters = word.split('');
  
  const numDistractions = Math.max(2, Math.ceil(correctLetters.length / 2));
  const distractionPool = [...distractionLetters];

  const selectedDistractions = [];
  for (let i = 0; i < numDistractions; i++) {
      if (distractionPool.length === 0) break;
      const randomIndex = Math.floor(Math.random() * distractionPool.length);
      const distraction = distractionPool.splice(randomIndex, 1)[0];
      if (!correctLetters.includes(distraction)) {
          selectedDistractions.push(distraction);
      } else {
          i--;
      }
  }

  const allLetters = [...correctLetters, ...selectedDistractions];
  for (let i = allLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
  }

  allLetters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = 'letter-btn';
    button.addEventListener('click', () => selectLetter(letter, button));
    lettersContainerElement.appendChild(button);
  });
}

// 用户选择字母
function selectLetter(letter, button) {
  userInput.push(letter);
  selectedLetters.push({letter: letter, button: button});
  button.disabled = true;
  updateInputDisplay();
  undoButton.disabled = false;
  checkAnswer();
}

// 撤销上一次选择
function undoLastLetter() {
    if (selectedLetters.length > 0) {
        const lastSelection = selectedLetters.pop();
        userInput.pop();
        lastSelection.button.disabled = false;
        updateInputDisplay();

        if (selectedLetters.length === 0) {
            undoButton.disabled = true;
        }

        if (feedbackElement.classList.contains('incorrect')) {
            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback';
            nextButton.disabled = true;
        }
    }
}

// 更新用户输入显示
function updateInputDisplay() {
  userInputElement.textContent = userInput.join('');
}

// 检查答案
function checkAnswer() {
  const userAnswer = userInput.join('');
  if (userAnswer === currentWord.thai) {
    feedbackElement.textContent = '正确!';
    feedbackElement.className = 'feedback correct';
    score++;
    scoreElement.textContent = score;
    disableAllLetters();
    nextButton.disabled = false;
    undoButton.disabled = true;
    hintElement.style.display = 'none';
    
    // 将单词标记为本轮已正确答对
    if (!correctlyAnsweredWords.includes(currentWord)) {
        correctlyAnsweredWords.push(currentWord);
    }
    // 从本轮答错列表中移除（如果之前答错过）
    const incorrectIndex = incorrectlyAnsweredWords.findIndex(w => w.chinese === currentWord.chinese && w.thai === currentWord.thai);
    if (incorrectIndex !== -1) {
        incorrectlyAnsweredWords.splice(incorrectIndex, 1);
    }
    
  } else if (userAnswer.length === currentWord.thai.length) {
    feedbackElement.textContent = `错误! 正确答案是: ${currentWord.thai}`;
    feedbackElement.className = 'feedback incorrect';
    disableAllLetters();
    nextButton.disabled = false;
    undoButton.disabled = true;
    hintElement.style.display = 'none';
    
    // 将单词加入本轮答错列表，以便后续重新学习
    const isAlreadyIncorrect = incorrectlyAnsweredWords.some(w => w.chinese === currentWord.chinese && w.thai === currentWord.thai);
    if (!isAlreadyIncorrect) {
        incorrectlyAnsweredWords.push(currentWord);
    }
  }
}

// 禁用所有字母按钮
function disableAllLetters() {
  const buttons = lettersContainerElement.querySelectorAll('.letter-btn');
  buttons.forEach(btn => btn.disabled = true);
}

// 显示完成模态框
function showCompletionModal() {
    completionMessage.textContent = "恭喜你！";
    // 计算总学习轮次：初始单词数 + 所有答错的次数
    const totalWordsLearned = currentLearningRoundPool.length + incorrectlyAnsweredWords.length;
    completionDetails.textContent = `你已经完成了 "${selectedCategory}" 类别的学习！总共学习了 ${totalWordsLearned} 个单词（包含重复学习的错误单词）。`;
    playAgainBtn.textContent = "再玩一次";
    chooseCategoryBtn.textContent = "选择新类别";
    chooseCategoryBtn.style.display = "inline-block";
    completionModal.style.display = "block";
}

// 返回设置界面
function goBackToSetup() {
  gameScreen.classList.remove('active');
  setupScreen.classList.add('active');
  
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedCategory = '';
  customInputs.classList.remove('active');
  addCategoryInputs.classList.remove('active');
  startGameBtn.disabled = true;
}

// Modal event listeners
playAgainBtn.onclick = function() {
  completionModal.style.display = "none";
  // 重新开始游戏，使用原始类别单词池
  startGame();
}

chooseCategoryBtn.onclick = function() {
  completionModal.style.display = "none";
  goBackToSetup();
}

closeModalSpan.onclick = function() {
  completionModal.style.display = "none";
  if(!completionDetails.textContent.includes("清空本地显示的自定义单词列表") && 
     !completionDetails.textContent.includes("确定要删除类别") &&
     !completionDetails.textContent.includes("确定要删除单词")) {
    goBackToSetup();
  }
}

window.onclick = function(event) {
  if (event.target == completionModal) {
    completionModal.style.display = "none";
    if(!completionDetails.textContent.includes("清空本地显示的自定义单词列表") &&
       !completionDetails.textContent.includes("确定要删除类别") &&
       !completionDetails.textContent.includes("确定要删除单词")) {
        goBackToSetup();
    }
  }
}

// 按钮事件监听
nextButton.addEventListener('click', getNextWord);
undoButton.addEventListener('click', undoLastLetter);
backToSetupBtn.addEventListener('click', goBackToSetup);

// 初始化
window.addEventListener('DOMContentLoaded', () => {
  initCategorySelection();
  updateCustomWordsList();
  refreshManagementView();
});



