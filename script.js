// 角色数据
const characters = {
    emma: {
        name: "樱羽艾玛",
        emoji: "🌸",
        image: "image/ema.png",
        color: "#ffc0cb",
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
        color: "#ff0000",
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
        color: "#b24f36",
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
        color: "#5f7fb6",
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
        color: "#788f0f",
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
        color: "#6a5acd",
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
        color: "#2eb0b1",
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
        color: "#feb459",
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
        color: "#b4a175",
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
        color: "#0B0D13",
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
        color: "#bc7def",
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
        color: "#aa1003",
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
        color: "#afb2b3",
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
        color: "#E8E9FD",
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
        question: "深夜听到牢房外有奇怪的声音，你会？",
        options: [
            { text: "好奇地想去查看是什么", scores: { E: 5, N: 10, P: 8 } },
            { text: "叫醒室友，一起商量对策", scores: { E: 7, F: 5, J: 3 } },
            { text: "保持警惕，准备应对危险", scores: { I: 5, S: 8, T: 5, J: 5 } },
            { text: "用被子蒙住头，假装没听见", scores: { I: 8, S: 5, F: 5, P: 3 } }
        ]
    },
    {
        question: "你的同伴突然被看守带走了，你会？",
        options: [
            { text: "拔出烧火棍和看守对拼", scores: { E: 5, S: 8, T: 5, P: 7 } },
            { text: "冷静分析，一定是有什么原因才把ta带走", scores: { I: 3, N: 8, T: 7, J: 5 } },
            { text: "试图和看守交涉", scores: { E: 7, F: 7, J: 3 } },
            { text: "好可怕啊，要不还是先溜吧", scores: { I: 8, S: 5, F: 5, P: 5 } }
        ]
    },
    {
        question: "监狱里举办了一场舞台剧，你会？",
        options: [
            { text: "好欸，我去我去！", scores: { E: 10, N: 5, F: 5, P: 7 } },
            { text: "在台下为参加者加油打气", scores: { E: 5, F: 8, J: 3 } },
            { text: "好无聊，还不如回娱乐室看恐怖片呢", scores: { I: 10, S: 3, T: 5, J: 5 } },
            { text: "观察每个人的表现，分析性格", scores: { I: 5, N: 8, T: 7, J: 3 } }
        ]
    },
    {
        question: "在监狱的庭院里，你发现了一朵从未见过的奇异花朵，你会？",
        options: [
            { text: "好奇地研究它的特性", scores: { E: 3, N: 10, T: 5, P: 7 } },
            { text: "觉得漂亮，想要摘下来装饰牢房", scores: { E: 5, S: 8, F: 7, P: 5 } },
            { text: "怀疑是否有毒，保持距离", scores: { I: 3, S: 8, T: 7, J: 5 } },
            { text: "叫其他人一起来看", scores: { E: 10, F: 5, P: 5 } }
        ]
    },
    {
        question: "典狱长宣布要举行一场'魔女审判'，输的人将受到惩罚，你会？",
        options: [
            { text: "主动站出来担任辩护者", scores: { E: 8, T: 5, F: 5, J: 5 } },
            { text: "收集证据，准备充分的辩护材料", scores: { I: 5, S: 7, T: 7, J: 8 } },
            { text: "感到恐惧，希望审判快点结束", scores: { I: 5, S: 5, F: 8, P: 3 } },
            { text: "思考如何利用审判找出真正的魔女", scores: { I: 3, N: 10, T: 8, J: 5 } }
        ]
    },
    {
        question: "一位你不太喜欢的同伴遇到了麻烦，你会？",
        options: [
            { text: "尽管不喜欢，还是会帮忙", scores: { F: 10, J: 3 } },
            { text: "看她平时怎么对我，再决定帮不帮", scores: { T: 7, S: 5, J: 5 } },
            { text: "分析帮忙的利弊后再行动", scores: { T: 10, N: 3, J: 5 } },
            { text: "找其他人一起去帮忙", scores: { E: 7, F: 7, P: 3 } }
        ]
    },
    {
        question: "监狱里传来消息说'我们之中混入了一位魔女'，你的反应是？",
        options: [
            { text: "立刻开始观察每个人的可疑之处", scores: { E: 5, S: 7, T: 7, J: 5 } },
            { text: "感到不安，但选择相信同伴", scores: { I: 3, F: 10, J: 3 } },
            { text: "冷静思考，制定找出魔女的计划", scores: { I: 5, N: 7, T: 8, J: 8 } },
            { text: "觉得很有趣，想要揭开真相", scores: { E: 7, N: 8, P: 8 } }
        ]
    },
    {
        question: "在审判中有人指控你是魔女，你会？",
        options: [
            { text: "愤怒地反驳，要求对方拿出证据", scores: { E: 8, T: 7, J: 3 } },
            { text: "感到委屈，眼眶都红了", scores: { I: 5, F: 10, J: 0 } },
            { text: "冷静分析对方的动机和证据", scores: { I: 3, N: 5, T: 10, J: 5 } },
            { text: "试图用幽默化解尴尬气氛", scores: { E: 7, F: 5, P: 8 } }
        ]
    },
    {
        question: "你发现了一条可能通往外界的密道，但可能会遇到危险，你会？",
        options: [
            { text: "立刻召集同伴一起探索", scores: { E: 10, S: 5, T: 3, P: 7 } },
            { text: "先独自探查，确认安全再告诉大家", scores: { I: 8, S: 7, T: 5, J: 5 } },
            { text: "仔细规划路线和应急预案", scores: { I: 3, N: 5, T: 7, J: 10 } },
            { text: "觉得太危险，还是等待更好的机会", scores: { I: 5, S: 8, F: 5, J: 3 } }
        ]
    },
    {
        question: "一位同伴向你表白说她喜欢你，但你只把她当朋友，你会？",
        options: [
            { text: "直接但委婉地说明自己的感受", scores: { E: 5, T: 7, F: 3, J: 5 } },
            { text: "担心伤害她，说话支支吾吾", scores: { I: 5, F: 10, P: 3 } },
            { text: "分析这段关系对团体的影响", scores: { T: 10, N: 3, J: 5 } },
            { text: "尝试慢慢疏远，让她自己明白", scores: { I: 8, F: 5, P: 5 } }
        ]
    },
    {
        question: "来到魔女监狱的第一晚，你发现牢房里有奇怪的涂鸦，你会？",
        options: [
            { text: "兴奋地想研究这些涂鸦的含义", scores: { E: 5, N: 10, T: 3, P: 7 } },
            { text: "觉得是不祥之兆，感到害怕", scores: { I: 5, S: 5, F: 8, J: 3 } },
            { text: "仔细观察，试图找出规律", scores: { I: 3, S: 8, T: 7, J: 5 } },
            { text: "找室友商量，看看大家怎么想", scores: { E: 8, F: 7, J: 3 } }
        ]
    },
    {
        question: "监狱里发生了一起失窃事件，你的东西被偷了，你会？",
        options: [
            { text: "愤怒地要求彻查，找出小偷", scores: { E: 7, T: 8, J: 7 } },
            { text: "感到难过，但选择原谅小偷", scores: { I: 5, F: 10, P: 3 } },
            { text: "分析谁最有动机和机会", scores: { I: 3, N: 8, T: 8, J: 5 } },
            { text: "加强防范，避免再次被盗", scores: { S: 8, T: 5, J: 7 } }
        ]
    },
    {
        question: "一位同伴因为魔法失控而受伤，你会？",
        options: [
            { text: "立刻使用治愈魔法或寻求帮助", scores: { E: 5, F: 10, J: 3 } },
            { text: "分析魔法失控的原因，防止再次发生", scores: { I: 3, N: 7, T: 8, J: 5 } },
            { text: "陪伴在旁，给予情感支持", scores: { I: 5, F: 10, P: 3 } },
            { text: "检查周围环境是否还有危险", scores: { S: 8, T: 7, J: 5 } }
        ]
    },
    {
        question: "你发现同伴中有人在偷偷使用魔法，按规定这是禁止的，你会？",
        options: [
            { text: "当场指出，维护规则", scores: { E: 7, T: 8, J: 10 } },
            { text: "私下提醒她小心，别被发现", scores: { I: 5, F: 8, P: 3 } },
            { text: "观察她的魔法类型，判断是否有威胁", scores: { I: 3, N: 7, T: 7, J: 5 } },
            { text: "装作没看见，不想惹麻烦", scores: { I: 5, F: 3, P: 7 } }
        ]
    },
    {
        question: "在监狱图书馆里，你发现了一本关于魔女历史的书，你会？",
        options: [
            { text: "兴奋地想要读完整本书", scores: { I: 5, N: 8, T: 5, P: 7 } },
            { text: "只读与当前处境相关的部分", scores: { S: 8, T: 7, J: 5 } },
            { text: "做详细笔记，整理关键信息", scores: { I: 3, S: 5, T: 5, J: 10 } },
            { text: "觉得晦涩难懂，还是去干别的", scores: { E: 5, S: 8, P: 7 } }
        ]
    },
    {
        question: "监狱组织了一次团体活动，要求大家分组合作，你会？",
        options: [
            { text: "主动担任组长，带领大家", scores: { E: 10, T: 5, J: 8 } },
            { text: "配合组长，做好分配的任务", scores: { E: 5, S: 7, F: 5, J: 7 } },
            { text: "提出创意点子，让活动更有趣", scores: { E: 7, N: 8, P: 8 } },
            { text: "希望能独自完成任务", scores: { I: 10, S: 5, T: 5, J: 3 } }
        ]
    },
    {
        question: "你发现一位同伴在偷偷哭泣，你会？",
        options: [
            { text: "走过去询问发生了什么", scores: { E: 8, F: 8, J: 3 } },
            { text: "默默递上纸巾，陪在身边", scores: { I: 5, F: 10, P: 3 } },
            { text: "分析她哭泣的原因和背景", scores: { I: 3, N: 5, T: 8, J: 5 } },
            { text: "给她一些独处空间，稍后再关心", scores: { I: 8, F: 5, J: 5 } }
        ]
    },
    {
        question: "监狱里开始流传关于你的谣言，说你和看守有勾结，你会？",
        options: [
            { text: "当众澄清，要求造谣者道歉", scores: { E: 10, T: 7, J: 5 } },
            { text: "感到受伤，躲起来独自难过", scores: { I: 10, F: 10, P: 0 } },
            { text: "调查谣言的源头，找出幕后黑手", scores: { I: 5, N: 8, T: 8, J: 5 } },
            { text: "相信清者自清，时间会证明一切", scores: { I: 5, F: 5, J: 3 } }
        ]
    },
    {
        question: "你得知有一位同伴背负着沉重的过去，你会？",
        options: [
            { text: "主动接近她，想要帮助她走出阴影", scores: { E: 8, F: 10, J: 3 } },
            { text: "尊重她的隐私，等她愿意说时再倾听", scores: { I: 5, F: 8, J: 5 } },
            { text: "分析她的过去对现在的影响", scores: { I: 3, N: 7, T: 8, J: 3 } },
            { text: "每个人都有过去，不必特别关注", scores: { T: 7, S: 5, P: 5 } }
        ]
    },
    {
        question: "当你终于有机会逃离魔女监狱时，你会？",
        options: [
            { text: "管他呢，先润再说", scores: { E: 5, S: 5, T: 5, P: 10 } },
            { text: "确保所有同伴都能一起逃走", scores: { E: 5, F: 10, J: 5 } },
            { text: "制定详细的逃脱计划", scores: { I: 3, N: 5, T: 7, J: 10 } },
            { text: "有些舍不得这里认识的朋友", scores: { I: 5, F: 10, S: 5, J: 0 } }
        ]
    }
];

// 全局变量
let currentQuestion = 0;
let userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let shuffledQuestions = [];

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 打乱题目和选项
function shuffleQuestionsAndOptions() {
    // 打乱题目顺序
    shuffledQuestions = shuffleArray(questions).map(q => {
        // 深拷贝题目并打乱选项顺序
        const shuffledQuestion = {
            ...q,
            options: shuffleArray(q.options)
        };
        return shuffledQuestion;
    });
}

// 开始测试
function startQuiz() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('quiz').classList.add('active');
    currentQuestion = 0;
    userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    // 每次开始测试时打乱题目和选项
    shuffleQuestionsAndOptions();
    
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `问题 ${currentQuestion + 1}/${shuffledQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.style.setProperty('--index', index);
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
    
    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 显示结果
// 辅助函数：调整颜色亮度
function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// 辅助函数：将十六进制颜色转换为RGBA
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function showResult() {
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('result').classList.add('active');
    
    // 计算MBTI类型
    const mbti = calculateMBTI();
    
    // 找到最匹配的角色
    const matchResult = findBestMatch(mbti);
    const character = matchResult.character;
    const similarity = matchResult.similarity;
    
    // 应用角色主题色
    applyCharacterTheme(character.color);
    
    // 显示角色信息
    document.getElementById('characterImage').innerHTML = `<img src="${character.image}" alt="${character.name}" class="character-portrait">`;
    document.getElementById('characterName').innerHTML = `<i class="ph-fill ph-star character-icon"></i>${character.name}`;
    document.getElementById('similarity').textContent = `（相似度：${similarity}%）`;
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
    
    // 显示评价
    const evaluation = generateEvaluation(mbti);
    document.getElementById('characterEvaluation').innerHTML = `<i class="ph-fill ph-quotes"></i>${evaluation}`;
    
    // 显示统计数据
    showStats();
}

// 应用角色主题色
function applyCharacterTheme(primaryColor) {
    const root = document.documentElement;
    const darkerColor = adjustBrightness(primaryColor, -30);
    const lighterColor = adjustBrightness(primaryColor, 20);
    
    // 设置CSS变量
    root.style.setProperty('--character-color', primaryColor);
    root.style.setProperty('--character-color-dark', darkerColor);
    root.style.setProperty('--character-color-light', lighterColor);
    root.style.setProperty('--character-color-rgba', hexToRgba(primaryColor, 0.3));
    root.style.setProperty('--character-color-rgba-light', hexToRgba(primaryColor, 0.1));
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
    
    // 计算相似度 (0-4字母差异，转换为百分比)
    const similarity = Math.round(((4 - minDifference) / 4) * 100);
    
    return { character: bestMatch, similarity: similarity };
}

// 生成用户评价
function generateEvaluation(mbti) {
    const evaluations = {
        'E': {
            'S': {
                'T': {
                    'J': '你是一个果断、务实、善于组织的人。你重视效率和结果，喜欢制定计划并按部就班地执行。在团队中，你往往是天生的领导者，能够迅速做出决策并带领他人实现目标。',
                    'P': '你是一个灵活、机智、热爱冒险的人。你喜欢即兴发挥，善于应对突发状况。你精力充沛，喜欢尝试新事物，总能给周围的人带来活力和惊喜。'
                },
                'F': {
                    'J': '你是一个热心、友善、善于合作的人。你重视和谐的人际关系，喜欢帮助他人。你有很强的责任感，总是尽力维护团队的团结和稳定。',
                    'P': '你是一个热情、随和、享受生活的人。你喜欢与人交往，善于营造轻松愉快的氛围。你活在当下，懂得欣赏生活中的美好。'
                }
            },
            'N': {
                'T': {
                    'J': '你是一个有远见、果断、善于规划的人。你能够洞察事物的本质，制定长远的目标并坚定执行。你自信、有魅力，往往能激励他人追随你的愿景。',
                    'P': '你是一个充满创意、机智、善于应变的人。你思维活跃，喜欢探索各种可能性。你善于言辞，能够用新颖的观点启发他人。'
                },
                'F': {
                    'J': '你是一个理想主义、热情、善于激励他人的人。你关心他人的成长和发展，愿意为了实现共同的目标而付出努力。你有很强的感染力，能够凝聚人心。',
                    'P': '你是一个充满激情、富有想象力、自由奔放的人。你追求自由和可能性，喜欢探索未知的领域。你真诚、热情，总能发现生活中的美好。'
                }
            }
        },
        'I': {
            'S': {
                'T': {
                    'J': '你是一个沉稳、细致、可靠的人。你注重细节，善于分析和解决实际问题。你喜欢按照既定的方式做事，是团队中值得信赖的支柱。',
                    'P': '你是一个冷静、灵活、善于观察的人。你喜欢独自探索，善于发现事物的规律。你低调而务实，总能在关键时刻提供独到的见解。'
                },
                'F': {
                    'J': '你是一个温柔、体贴、忠诚的人。你重视传统和稳定，喜欢照顾他人的感受。你默默付出，用行动表达对家人和朋友的关心。',
                    'P': '你是一个敏感、艺术气质、注重内心感受的人。你喜欢独处，享受属于自己的时光。你有独特的审美，善于发现生活中的诗意。'
                }
            },
            'N': {
                'T': {
                    'J': '你是一个独立、深思熟虑、有远见的人。你善于战略思考，喜欢探索复杂的理论和概念。你追求完美，对自己和他人都有很高的标准。',
                    'P': '你是一个充满好奇心、灵活、富有创造力的人。你喜欢思考各种可能性，善于发现事物之间的联系。你随性而为，享受探索的过程。'
                },
                'F': {
                    'J': '你是一个有洞察力、理想主义、富有同情心的人。你关心他人的内心世界，善于理解和安慰他人。你有坚定的信念，愿意为了理想而努力。',
                    'P': '你是一个敏感、富有想象力、追求内心和谐的人。你重视个人价值观，喜欢探索生命的意义。你温和、包容，能够理解各种不同的观点。'
                }
            }
        }
    };
    
    // 获取评价，如果不存在则返回默认评价
    const type1 = evaluations[mbti[0]];
    const type2 = type1?.[mbti[1]];
    const type3 = type2?.[mbti[2]];
    const evaluation = type3?.[mbti[3]];
    
    return evaluation || '你是一个独特而复杂的人，拥有多面的性格特质。你的内心世界丰富而深邃，既有着理性的一面，也有着感性的一面。这种独特的组合让你成为一个不可替代的个体。';
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
    
    // 重置打乱的问题数组，下次开始测试时会重新打乱
    shuffledQuestions = [];
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

// BGM控制
let bgmPlaying = false;
let bgm = null;
let bgmToggle = null;

// 页面加载时尝试自动播放BGM
document.addEventListener('DOMContentLoaded', function() {
    // 在DOM加载完成后获取元素
    bgm = document.getElementById('bgm');
    bgmToggle = document.getElementById('bgmToggle');
    
    // 尝试自动播放（可能被浏览器阻止）
    if (bgm) {
        bgm.volume = 0.5; // 设置音量为50%
        const playPromise = bgm.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                bgmPlaying = true;
                updateBGMButton();
            }).catch(() => {
                // 自动播放被阻止，等待用户交互
                bgmPlaying = false;
                updateBGMButton();
            });
        }
    }
});

// 用户首次点击页面时尝试播放（解决浏览器自动播放策略）
document.addEventListener('click', function() {
    if (!bgmPlaying && bgm && bgm.paused) {
        bgm.play().then(() => {
            bgmPlaying = true;
            updateBGMButton();
        }).catch(() => {
            // 播放失败
        });
    }
}, { once: true });

// 淡入淡出函数
function fadeAudio(targetVolume, duration = 500) {
    if (!bgm) return;
    
    const startVolume = bgm.volume;
    const volumeDiff = targetVolume - startVolume;
    const steps = 20;
    const stepTime = duration / steps;
    let currentStep = 0;
    
    const fadeInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        bgm.volume = startVolume + (volumeDiff * progress);
        
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            bgm.volume = targetVolume;
        }
    }, stepTime);
}

function toggleBGM() {
    if (!bgm) return;
    
    if (bgmPlaying) {
        // 淡出效果
        fadeAudio(0, 500);
        setTimeout(() => {
            bgm.pause();
            bgmPlaying = false;
            updateBGMButton();
        }, 500);
    } else {
        bgm.volume = 0;
        bgm.play().then(() => {
            bgmPlaying = true;
            // 淡入效果
            fadeAudio(0.5, 500);
            updateBGMButton();
        }).catch(() => {
            alert('无法播放音频，请检查浏览器设置');
        });
    }
}

function updateBGMButton() {
    if (!bgmToggle) return;
    
    const icon = bgmToggle.querySelector('.bgm-icon');
    const text = bgmToggle.querySelector('.bgm-text');
    
    if (bgmPlaying) {
        bgmToggle.classList.remove('paused');
        icon.className = 'ph ph-speaker-high bgm-icon';
        text.textContent = 'BGM';
    } else {
        bgmToggle.classList.add('paused');
        icon.className = 'ph ph-speaker-slash bgm-icon';
        text.textContent = '静音';
    }
}