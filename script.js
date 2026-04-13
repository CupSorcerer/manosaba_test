// 角色数据
const characters = {
    emma: {
        name: "樱羽艾玛",
        emoji: "🌸",
        image: "image/ema.png",
        mbti: "ENFJ",
        desc: "自称'ボク'的温柔女孩。虽然笨手笨脚，但内心坚强不屈。头脑聪明，能冷静观察并做出判断。十分怕寂寞，渴望与人亲近。",
        traits: ["温柔善良", "怕寂寞", "推理能力强", "坚强意志", "表里不一"],
        magic: "魔女杀手（吸取其他魔女精力，魔女化后可杀死魔女）",
        scores: { E: 80, I: 20, S: 30, N: 70, T: 40, F: 60, J: 70, P: 30 }
    },
    hiro: {
        name: "二阶堂希罗",
        emoji: "⚔️",
        image: "image/hiro.png",
        mbti: "ESTJ",
        desc: "成绩优异、运动全能、家世良好，完美无缺。怀有强烈的责任感和自尊心，价值观永远只有'正确'与'不正确'。渴望一个没有恶人的纯净世界。",
        traits: ["完美主义", "责任感强", "追求正确", "偏执", "纤细内心"],
        magic: "死亡回溯（死亡后时间回到当天早上）",
        scores: { E: 60, I: 40, S: 70, N: 30, T: 80, F: 20, J: 90, P: 10 }
    },
    coco: {
        name: "泽渡可可",
        emoji: "📱",
        image: "image/coco.png",
        mbti: "ISFP",
        desc: "喜欢直播的辣妹风格少女。厌恶除自己和自推以外的其他人，但内心渴望被关注。有着'躲藏'的创伤，是杀人案的唯一幸存者。",
        traits: ["直播爱好者", "自推至上", "毒舌", "孤独", "创伤深"],
        magic: "千里眼（看到远处和过去的事物）",
        scores: { E: 30, I: 70, S: 60, N: 40, T: 30, F: 70, J: 20, P: 80 }
    },
    shirley: {
        name: "橘雪莉",
        emoji: "🔍",
        image: "image/shirley.png",
        mbti: "ESFP",
        desc: "自称名侦探的活力少女。性格天然脱线，无论何时都面带笑容。有着令旁人震惊的好奇心，绝大多数情况下都能忽视气氛。",
        traits: ["活力满满", "名侦探", "天然", "好奇心旺盛", "忽视气氛"],
        magic: "怪力（拥有超强力量）",
        scores: { E: 90, I: 10, S: 80, N: 20, T: 40, F: 60, J: 30, P: 70 }
    },
    hanna: {
        name: "远野汉娜",
        emoji: "🎀",
        image: "image/hanna.png",
        mbti: "ESFJ",
        desc: "说话操着奇特大小姐口吻的少女。身材娇小，外表酷似洋娃娃。本性善良，对关系好的人会展现更多优点。有着'被抛弃'的创伤。",
        traits: ["大小姐口吻", "善良", "好面子", "缝纫技艺", "被抛弃创伤"],
        magic: "漂浮（在空中自由飞行）",
        scores: { E: 70, I: 30, S: 60, N: 40, T: 30, F: 70, J: 60, P: 40 }
    },
    ann: {
        name: "夏目安安",
        emoji: "📖",
        image: "image/ann.png",
        mbti: "INFP",
        desc: "脾气古怪、爱好写小说的少女。不擅长与人交流，性格拘谨。会通过素描本笔谈，使用模仿大文豪的夸张口吻。",
        traits: ["内向", "小说家", "笔谈交流", "体弱多病", "渴望幸福"],
        magic: "洗脑（控制他人精神）",
        scores: { E: 10, I: 90, S: 40, N: 60, T: 30, F: 70, J: 40, P: 60 }
    },
    noah: {
        name: "城崎诺亚",
        emoji: "🎨",
        image: "image/noah.png",
        mbti: "ENFP",
        desc: "蒙面街头艺术家'气球'。不怕生，说话拉长尾音。性格我行我素，好奇心旺盛。怀抱画出理想作品的愿望。",
        traits: ["艺术家", "好奇心旺盛", "我行我素", "专注画画", "情感丰富"],
        magic: "操纵液体（让液体变成想要的形状）",
        scores: { E: 80, I: 20, S: 30, N: 70, T: 20, F: 80, J: 20, P: 80 }
    },
    reia: {
        name: "莲见蕾雅",
        emoji: "🎭",
        image: "image/reia.png",
        mbti: "ENTJ",
        desc: "志愿成为明星演员的剧团少女。举止绅士，常充当'拧绳人'。性格独立，不愿依赖他人，背负着沉重的压力。",
        traits: ["演员", "领袖气质", "独立", "勤奋", "渴望关注"],
        magic: "视线诱导（引导他人视线）",
        scores: { E: 90, I: 10, S: 40, N: 60, T: 70, F: 30, J: 80, P: 20 }
    },
    miria: {
        name: "佐伯米莉亚",
        emoji: "🎬",
        image: "image/miria.png",
        mbti: "ISFJ",
        desc: "自称'大叔'的白辣妹。喜欢看老电影，性格沉稳老实。为人温和善良，很会照顾他人，但做事笨手笨脚。",
        traits: ["大叔自称", "温和善良", "照顾他人", "笨手笨脚", "法律理解"],
        magic: "互换（与他人互换身体）",
        scores: { E: 40, I: 60, S: 70, N: 30, T: 40, F: 60, J: 60, P: 40 }
    },
    nanoka: {
        name: "黑部奈叶香",
        emoji: "🔫",
        image: "image/nanoka.png",
        mbti: "ISTP",
        desc: "对监牢抱有强烈敌意的少女。平常冷若冰霜，情绪少有起伏。习惯单人行动，对监牢结构十分熟悉。",
        traits: ["冷若冰霜", "单人行动", "为达目的不择手段", "熟悉监牢", "复仇心"],
        magic: "幻视（看到过去和未来的片段）",
        scores: { E: 20, I: 80, S: 60, N: 40, T: 70, F: 30, J: 40, P: 60 }
    },
    mag: {
        name: "宝生玛格",
        emoji: "🎪",
        image: "image/mag.png",
        mbti: "ENTP",
        desc: "年仅十五岁的诈骗专家。观察力敏锐，口才了得。以'不相信，不指望'为行动原则，笑容和言行并非出自真心。",
        traits: ["诈骗师", "观察敏锐", "口才了得", "不信任他人", "内心孤独"],
        magic: "模仿（模仿声音和动作）",
        scores: { E: 70, I: 30, S: 50, N: 50, T: 60, F: 40, J: 30, P: 70 }
    },
    arisa: {
        name: "紫藤亚里沙",
        emoji: "🔥",
        image: "image/arisa.png",
        mbti: "ESTP",
        desc: "离家出走的'太妹'。语气粗鲁，话里带刺。讨厌自己，内心渴望有人能够接纳如此尖刺外露的自己。",
        traits: ["太妹", "语气粗鲁", "讨厌自己", "渴望接纳", "火焰魔法"],
        magic: "操控火焰（控制火焰）",
        scores: { E: 70, I: 30, S: 80, N: 20, T: 60, F: 40, J: 20, P: 80 }
    },
    meruru: {
        name: "冰上梅露露",
        emoji: "💝",
        image: "image/meruru.png",
        mbti: "INFJ",
        desc: "容易过度忧虑、在意他人的少女。只要对某人产生在意，便会无意中尾随对方。最喜欢独自一人阅读书本的时光。",
        traits: ["过度忧虑", "在意他人", "喜欢阅读", "治愈魔法", "温柔体贴"],
        magic: "治愈（治疗伤病）",
        scores: { E: 30, I: 70, S: 40, N: 60, T: 30, F: 70, J: 70, P: 30 }
    },
    yuki: {
        name: "月代雪",
        emoji: "❄️",
        image: "image/yuki.png",
        mbti: "INTJ",
        desc: "真正的大魔女，游戏的隐藏人物和最终boss。怀着对人类的恨意，定下了精密的复仇计划。是魔女中唯一的幸存者。",
        traits: ["大魔女", "复仇心", "精密计划", "孤独", "强大魔力"],
        magic: "全魔法（会施展所有魔法，特别是魔女杀手）",
        scores: { E: 20, I: 80, S: 30, N: 70, T: 80, F: 20, J: 90, P: 10 }
    }
};

// 测试题目
const questions = [
    {
        question: "当你来到一个陌生的环境（比如魔女监狱），你会？",
        options: [
            { text: "主动和其他人搭话，尽快融入集体", scores: { E: 10, I: 0 } },
            { text: "先观察一段时间，再决定如何行动", scores: { E: 3, I: 7 } },
            { text: "独自探索环境，不太想和别人交流", scores: { E: 0, I: 10 } },
            { text: "找看起来友好的人，小心翼翼地接近", scores: { E: 5, I: 5 } }
        ]
    },
    {
        question: "面对困难和危险时，你更倾向于？",
        options: [
            { text: "凭直觉和勇气立即行动", scores: { S: 0, N: 10 } },
            { text: "冷静分析情况，制定计划", scores: { S: 5, N: 5 } },
            { text: "根据实际情况和经验判断", scores: { S: 10, N: 0 } },
            { text: "寻求他人帮助，共同面对", scores: { S: 5, N: 5 } }
        ]
    },
    {
        question: "在做决定时，你更重视？",
        options: [
            { text: "逻辑和道理，什么是对的", scores: { T: 10, F: 0 } },
            { text: "他人的感受和关系的和谐", scores: { T: 0, F: 10 } },
            { text: "实际情况和可行性", scores: { T: 7, F: 3 } },
            { text: "自己的价值观和信念", scores: { T: 5, F: 5 } }
        ]
    },
    {
        question: "你的日常生活更倾向于？",
        options: [
            { text: "有计划地安排，按部就班", scores: { J: 10, P: 0 } },
            { text: "随性而为，灵活应对", scores: { J: 0, P: 10 } },
            { text: "大体有计划，但允许变化", scores: { J: 6, P: 4 } },
            { text: "根据当天心情决定", scores: { J: 2, P: 8 } }
        ]
    },
    {
        question: "如果你发现了凶案的线索，你会？",
        options: [
            { text: "立刻大声说出自己的推理", scores: { E: 8, S: 3, N: 7 } },
            { text: "先私下调查，确认后再说", scores: { E: 2, S: 7, N: 3 } },
            { text: "默默观察，收集更多证据", scores: { E: 0, S: 5, N: 5 } },
            { text: "找信任的人商量对策", scores: { E: 5, S: 5, N: 5 } }
        ]
    },
    {
        question: "面对他人的误解和指责，你会？",
        options: [
            { text: "激烈反驳，证明自己的清白", scores: { T: 7, F: 3 } },
            { text: "感到受伤，但选择忍耐", scores: { T: 2, F: 8 } },
            { text: "冷静解释，用事实说话", scores: { T: 10, F: 0 } },
            { text: "试图理解对方为何这样认为", scores: { T: 3, F: 7 } }
        ]
    },
    {
        question: "在团队中，你通常扮演什么角色？",
        options: [
            { text: "领导者和决策者", scores: { E: 7, T: 7, J: 7 } },
            { text: "协调者和支持者", scores: { E: 5, F: 8, J: 5 } },
            { text: "创意者和点子王", scores: { N: 8, P: 8 } },
            { text: "执行者和实干家", scores: { S: 8, J: 7 } }
        ]
    },
    {
        question: "你更向往哪种生活方式？",
        options: [
            { text: "被众人关注和喜爱", scores: { E: 10, F: 5 } },
            { text: "安静独处，做自己喜欢的事", scores: { I: 10, N: 5 } },
            { text: "追求真理和正义", scores: { T: 10, J: 5 } },
            { text: "自由自在，无拘无束", scores: { P: 10, S: 3, N: 7 } }
        ]
    },
    {
        question: "如果你的朋友犯了错，你会？",
        options: [
            { text: "直接指出错误，帮助改正", scores: { T: 9, F: 1 } },
            { text: "委婉提醒，照顾对方感受", scores: { T: 3, F: 7 } },
            { text: "视情况而定，看严重程度", scores: { T: 5, F: 5 } },
            { text: "先安慰，等合适时机再谈", scores: { T: 1, F: 9 } }
        ]
    },
    {
        question: "面对未知的危险和谜团，你的反应是？",
        options: [
            { text: "兴奋，想要解开谜团", scores: { N: 10, E: 5 } },
            { text: "恐惧，但会勇敢面对", scores: { S: 5, F: 5 } },
            { text: "谨慎，先确保自身安全", scores: { S: 10, J: 5 } },
            { text: "好奇，想要一探究竟", scores: { N: 8, P: 7 } }
        ]
    },
    {
        question: "你更重视过去的经验还是未来的可能性？",
        options: [
            { text: "过去的经验和教训", scores: { S: 10, N: 0 } },
            { text: "未来的可能性和梦想", scores: { S: 0, N: 10 } },
            { text: "两者都重要，需要平衡", scores: { S: 5, N: 5 } },
            { text: "专注于当下的现实", scores: { S: 7, N: 3 } }
        ]
    },
    {
        question: "在紧张的氛围中，你通常会？",
        options: [
            { text: "试图活跃气氛，讲笑话", scores: { E: 8, F: 5 } },
            { text: "保持沉默，观察局势", scores: { I: 8, T: 5 } },
            { text: "分析情况，寻找解决方案", scores: { T: 8, J: 5 } },
            { text: "安慰紧张的人，给予支持", scores: { F: 10, E: 3 } }
        ]
    },
    {
        question: "你认为什么是真正的强大？",
        options: [
            { text: "保护他人的力量", scores: { F: 8, J: 5 } },
            { text: "坚持正义的勇气", scores: { T: 8, J: 7 } },
            { text: "面对困难的坚韧", scores: { S: 5, T: 5 } },
            { text: "理解和包容的心", scores: { F: 10, N: 3 } }
        ]
    },
    {
        question: "如果你有一个秘密，你会？",
        options: [
            { text: "深埋心底，绝不告诉任何人", scores: { I: 10, T: 3 } },
            { text: "只告诉最信任的人", scores: { I: 6, F: 5 } },
            { text: "适当的时候会说出来", scores: { E: 3, J: 3 } },
            { text: "其实很想找人倾诉", scores: { E: 6, F: 6 } }
        ]
    },
    {
        question: "面对他人的痛苦，你的反应是？",
        options: [
            { text: "感同身受，想要帮助", scores: { F: 10, N: 3 } },
            { text: "理性分析，提供解决方案", scores: { T: 10, S: 3 } },
            { text: "陪伴在旁，给予安慰", scores: { F: 8, I: 3 } },
            { text: "视情况而定", scores: { T: 5, F: 5 } }
        ]
    },
    {
        question: "你更喜欢哪种工作环境？",
        options: [
            { text: "有明确规则和流程", scores: { S: 5, J: 10 } },
            { text: "自由灵活，可以创新", scores: { N: 7, P: 10 } },
            { text: "和谐友好的团队氛围", scores: { F: 8, E: 5 } },
            { text: "独立工作，不受干扰", scores: { I: 10, T: 3 } }
        ]
    },
    {
        question: "当你生气时，你会？",
        options: [
            { text: "直接表达出来", scores: { E: 7, T: 5 } },
            { text: "压抑在心里", scores: { I: 8, F: 5 } },
            { text: "找方式发泄", scores: { E: 5, P: 5 } },
            { text: "冷静分析原因", scores: { T: 8, J: 3 } }
        ]
    },
    {
        question: "你认为友谊最重要的是？",
        options: [
            { text: "互相理解和支持", scores: { F: 10, N: 3 } },
            { text: "共同的兴趣和目标", scores: { S: 5, T: 5 } },
            { text: "忠诚和信任", scores: { F: 7, J: 7 } },
            { text: "能一起开心玩耍", scores: { E: 7, P: 5 } }
        ]
    },
    {
        question: "面对人生的挫折，你会？",
        options: [
            { text: "从中学习，重新站起来", scores: { T: 7, J: 7 } },
            { text: "需要时间来治愈伤痛", scores: { F: 9, I: 3 } },
            { text: "寻求他人的帮助", scores: { F: 6, E: 4 } },
            { text: "用其他事情转移注意力", scores: { P: 8, S: 3 } }
        ]
    },
    {
        question: "你最害怕什么？",
        options: [
            { text: "被他人讨厌和孤立", scores: { F: 8, E: 5 } },
            { text: "做错事，失去正义", scores: { T: 8, J: 5 } },
            { text: "失去重要的人", scores: { F: 10, S: 3 } },
            { text: "无法掌控的局面", scores: { J: 8, N: 3 } }
        ]
    }
];

// 全局变量
let currentQuestion = 0;
let userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

// 开始测试
function startQuiz() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('quiz').classList.add('active');
    currentQuestion = 0;
    userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = () => selectOption(option.scores);
        optionsContainer.appendChild(btn);
    });
}

// 选择选项
function selectOption(scores) {
    // 累加分数
    for (let key in scores) {
        userScores[key] += scores[key];
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('result').classList.add('active');
    
    // 计算MBTI类型
    const mbti = calculateMBTI();
    
    // 找到最匹配的角色
    const character = findBestMatch(mbti);
    
    // 显示角色信息
    document.getElementById('characterImage').innerHTML = `<img src="${character.image}" alt="${character.name}" class="character-portrait">`;
    document.getElementById('characterName').innerHTML = `<span class="character-emoji">${character.emoji}</span>${character.name}`;
    document.getElementById('mbtiType').textContent = `${character.mbti}型 - ${mbti}`;
    document.getElementById('characterDesc').textContent = character.desc;
    
    // 显示特质标签
    const traitsContainer = document.getElementById('characterTraits');
    traitsContainer.innerHTML = '';
    character.traits.forEach(trait => {
        const tag = document.createElement('span');
        tag.className = 'trait-tag';
        tag.textContent = trait;
        traitsContainer.appendChild(tag);
    });
    
    // 显示魔法
    document.getElementById('characterMagic').innerHTML = `<strong>魔法能力：</strong>${character.magic}`;
    
    // 显示统计数据
    showStats();
}

// 计算MBTI类型
function calculateMBTI() {
    let mbti = '';
    mbti += userScores.E > userScores.I ? 'E' : 'I';
    mbti += userScores.S > userScores.N ? 'S' : 'N';
    mbti += userScores.T > userScores.F ? 'T' : 'F';
    mbti += userScores.J > userScores.P ? 'J' : 'P';
    return mbti;
}

// 找到最匹配的角色
function findBestMatch(userMBTI) {
    let bestMatch = null;
    let minDifference = Infinity;
    
    for (let key in characters) {
        const char = characters[key];
        const charMBTI = char.mbti;
        
        // 计算MBTI差异
        let difference = 0;
        for (let i = 0; i < 4; i++) {
            if (userMBTI[i] !== charMBTI[i]) {
                difference++;
            }
        }
        
        if (difference < minDifference) {
            minDifference = difference;
            bestMatch = char;
        }
    }
    
    return bestMatch;
}

// 显示统计数据
function showStats() {
    const statsContainer = document.getElementById('resultStats');
    statsContainer.innerHTML = '<h3 style="margin-bottom: 20px; color: #a0d2eb;">你的性格维度</h3>';
    
    const dimensions = [
        { label: '外向 (E)', value: userScores.E, opposite: '内向 (I)', oppValue: userScores.I },
        { label: '实感 (S)', value: userScores.S, opposite: '直觉 (N)', oppValue: userScores.N },
        { label: '思考 (T)', value: userScores.T, opposite: '情感 (F)', oppValue: userScores.F },
        { label: '判断 (J)', value: userScores.J, opposite: '知觉 (P)', oppValue: userScores.P }
    ];
    
    dimensions.forEach(dim => {
        const total = dim.value + dim.oppValue;
        const percentage = total > 0 ? Math.round((dim.value / total) * 100) : 50;
        
        const item = document.createElement('div');
        item.className = 'stat-item';
        item.innerHTML = `
            <span class="stat-label">${dim.label}</span>
            <span class="stat-value">${percentage}%</span>
        `;
        statsContainer.appendChild(item);
    });
}

// 重新测试
function restartQuiz() {
    document.getElementById('result').classList.remove('active');
    document.getElementById('home').classList.add('active');
}

// 分享结果
function shareResult() {
    const characterName = document.getElementById('characterName').textContent;
    const mbtiType = document.getElementById('mbtiType').textContent;
    const text = `我在《魔法少女的魔女审判》性格测试中，最像的角色是${characterName}（${mbtiType}）！快来测试看看你最适合成为哪位预备魔女吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '魔法少女的魔女审判 - 角色性格测试',
            text: text,
            url: window.location.href
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板！');
        });
    }
}