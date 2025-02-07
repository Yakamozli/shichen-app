document.addEventListener('DOMContentLoaded', function() {
    // 主题切换功能
    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme',
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
    });

    // 时辰详细信息数据
    const shichenDetails = {
        '子': {
            pinyin: 'zǐ',
            timeRange: '23:00-00:59',
            description: '子时是一天的开始，也被称为"夜半"、"中夜"。在传统文化中，子时被认为是天地间阴阳交替的时刻，阳气开始生发。',
            activities: '子时养生宜：静心调息，早点休息。\n子时养生忌：熬夜，过度操劳。\n传统文化认为子时是修身养性的最佳时辰。',
            zodiac: '子时对应生肖鼠，具有机灵、聪慧的特征。子鼠之时出生的人往往聪明伶俐，善于把握机会。'
        },
        '丑': {
            pinyin: 'chǒu',
            timeRange: '01:00-02:59',
            description: '丑时是深夜时分，也称"鸡鸣"，是夜气渐消、晓气将生的时候。',
            activities: '丑时养生宜：保持深度睡眠。\n丑时养生忌：扰乱作息，饮食不节。\n此时是人体肝胆经最活跃的时段。',
            zodiac: '丑时对应生肖牛，具有勤恳、踏实的特征。丑牛之时出生的人往往性格沉稳，做事认真负责。'
        },
        '寅': {
            pinyin: 'yín',
            timeRange: '03:00-04:59',
            description: '寅时是黎明时分，也称"平旦"。是一天之中阳气最旺盛的时候之一。',
            activities: '寅时养生宜：早起锻炼，呼吸新鲜空气。\n寅时养生忌：赖床，错过晨练良机。\n古人云："寅时起，精神倍"。',
            zodiac: '寅时对应生肖虎，具有威严、勇猛的特征。寅虎之时出生的人往往充满活力，勇于进取。'
        },
        '卯': {
            pinyin: 'mǎo',
            timeRange: '05:00-06:59',
            description: '卯时是日出时分，也称"日出"。万物始生，充满生机。',
            activities: '卯时养生宜：梳头养发，晨练养生。\n卯时养生忌：懒散度过，贪睡不起。\n这个时辰最适合户外运动和学习。',
            zodiac: '卯时对应生肖兔，具有温顺、敏捷的特征。卯兔之时出生的人往往性格温和，反应机敏。'
        },
        '辰': {
            pinyin: 'chén',
            timeRange: '07:00-08:59',
            description: '辰时是早晨时分，也称"食时"。此时阳光普照，人们开始一天的工作。',
            activities: '辰时养生宜：享用早餐，开始工作。\n辰时养生忌：不吃早餐，扰乱作息。\n这是一天中最适合用餐的时间之一。',
            zodiac: '辰时对应生肖龙，具有威严、尊贵的特征。辰龙之时出生的人往往气质不凡，富有领导才能。'
        },
        '巳': {
            pinyin: 'sì',
            timeRange: '09:00-10:59',
            description: '巳时是上午时分，也称"隅中"。阳气充沛，最适合工作学习。',
            activities: '巳时养生宜：专注工作，保持充沛精力。\n巳时养生忌：懈怠懒散，精神不集中。\n此时是一天中最适合处理事务的时间。',
            zodiac: '巳时对应生肖蛇，具有智慧、敏锐的特征。巳蛇之时出生的人往往头脑灵活，观察力强。'
        },
        '午': {
            pinyin: 'wǔ',
            timeRange: '11:00-12:59',
            description: '午时是正午时分，也称"日中"。太阳当空，阳气最盛。',
            activities: '午时养生宜：适度午休，补充能量。\n午时养生忌：过度劳累，暴晒伤身。\n传统认为午时是阴阳交替的重要时刻。',
            zodiac: '午时对应生肖马，具有奔放、活力的特征。午马之时出生的人往往性格开朗，充满活力。'
        },
        '未': {
            pinyin: 'wèi',
            timeRange: '13:00-14:59',
            description: '未时是午后时分，也称"日昳"。阳气开始收敛，人体进入休整阶段。',
            activities: '未时养生宜：适度运动，调节作息。\n未时养生忌：剧烈运动，过度劳累。\n这个时间段适合进行较为轻松的活动。',
            zodiac: '未时对应生肖羊，具有温和、优雅的特征。未羊之时出生的人往往性情温良，富有艺术气质。'
        },
        '申': {
            pinyin: 'shēn',
            timeRange: '15:00-16:59',
            description: '申时是下午时分，也称"晡时"。此时阳气渐收，开始向晚。',
            activities: '申时养生宜：收心养气，适度运动。\n申时养生忌：过度疲劳，情绪波动。\n这个时候适合进行一些放松性的活动。',
            zodiac: '申时对应生肖猴，具有机智、灵活的特征。申猴之时出生的人往往聪明机灵，善于变通。'
        },
        '酉': {
            pinyin: 'yǒu',
            timeRange: '17:00-18:59',
            description: '酉时是傍晚时分，也称"日入"。太阳西落，阴气渐生。',
            activities: '酉时养生宜：收整身心，准备晚餐。\n酉时养生忌：过度劳累，情绪紧张。\n这是一天中第二个适合用餐的时间。',
            zodiac: '酉时对应生肖鸡，具有勤劳、守时的特征。酉鸡之时出生的人往往做事认真，时间观念强。'
        },
        '戌': {
            pinyin: 'xū',
            timeRange: '19:00-20:59',
            description: '戌时是初夜时分，也称"黄昏"。天地阴阳开始转换。',
            activities: '戌时养生宜：舒缓心情，准备休息。\n戌时养生忌：过度兴奋，剧烈运动。\n这个时候适合进行一些轻松的活动。',
            zodiac: '戌时对应生肖狗，具有忠诚、警觉的特征。戌狗之时出生的人往往重情重义，具有责任感。'
        },
        '亥': {
            pinyin: 'hài',
            timeRange: '21:00-22:59',
            description: '亥时是深夜时分，也称"人定"。此时应该安歇休息。',
            activities: '亥时养生宜：早点休息，养精蓄锐。\n亥时养生忌：熬夜娱乐，扰乱作息。\n这是一天中最适合休息的时间之一。',
            zodiac: '亥时对应生肖猪，具有温和、富足的特征。亥猪之时出生的人往往性格温和，生活富足。'
        }
    };

    // 获取URL参数中的时辰
    const urlParams = new URLSearchParams(window.location.search);
    const shichen = urlParams.get('shichen');

    if (shichen && shichenDetails[shichen]) {
        const details = shichenDetails[shichen];
        document.getElementById('mainCharacter').textContent = shichen;
        document.getElementById('mainPinyin').textContent = details.pinyin;
        document.getElementById('timeRange').textContent = details.timeRange;
        document.getElementById('description').textContent = details.description;
        document.getElementById('activities').textContent = details.activities;
        document.getElementById('zodiac').textContent = details.zodiac;
        document.title = `${shichen}时 - 时辰详情`;
    } else {
        window.location.href = 'index.html';
    }
}); 