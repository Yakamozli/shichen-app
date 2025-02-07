document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const digitalClock = document.getElementById('digitalClock');
    const currentShichen = document.getElementById('currentShichen');
    
    // 时辰对照表
    const shichenMap = [
        { start: 23, end: 0, name: '子时' },
        { start: 1, end: 2, name: '丑时' },
        { start: 3, end: 4, name: '寅时' },
        { start: 5, end: 6, name: '卯时' },
        { start: 7, end: 8, name: '辰时' },
        { start: 9, end: 10, name: '巳时' },
        { start: 11, end: 12, name: '午时' },
        { start: 13, end: 14, name: '未时' },
        { start: 15, end: 16, name: '申时' },
        { start: 17, end: 18, name: '酉时' },
        { start: 19, end: 20, name: '戌时' },
        { start: 21, end: 22, name: '亥时' }
    ];

    // 更新时间和时辰
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // 更新数字时钟
        digitalClock.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // 计算当前时辰
        let currentShichenName = '';
        for (let shichen of shichenMap) {
            if (hours >= shichen.start && hours <= shichen.end) {
                currentShichenName = shichen.name;
                break;
            }
        }
        
        // 特殊处理子时的跨日情况
        if (hours === 23 || hours === 0) {
            currentShichenName = '子时';
        }

        currentShichen.textContent = currentShichenName;

        // 更新活跃状态
        document.querySelectorAll('.shichen-item').forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('.character').textContent === currentShichenName[0]) {
                item.classList.add('active');
            }
        });
    }

    // 主题切换
    themeButton.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme',
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
    });

    // 添加时辰卡片点击事件
    document.querySelectorAll('.shichen-item').forEach(item => {
        item.addEventListener('click', () => {
            const character = item.querySelector('.character').textContent;
            window.location.href = `detail.html?shichen=${character}`;
        });
    });

    // 初始化并每秒更新时间
    updateTime();
    setInterval(updateTime, 1000);
});