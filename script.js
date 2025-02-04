// 动态生成樱花
function createSakura() {
    const sakuraContainer = document.querySelector('.sakura-background');
    for (let i = 0; i < 30; i++) {
        const sakura = document.createElement('div');
        sakura.innerHTML = '🌸';
        sakura.style.position = 'absolute';
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        sakura.style.fontSize = Math.random() * 20 + 10 + 'px';
        sakura.style.opacity = Math.random() * 0.5 + 0.3;
        sakuraContainer.appendChild(sakura);
    }
}

// 动态生成流星
function createStars() {
    const starContainer = document.querySelector('.star-background');
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.innerHTML = '🌠';
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animation = `shootingStar ${Math.random() * 5 + 5}s linear infinite`;
        star.style.fontSize = Math.random() * 20 + 10 + 'px';
        star.style.opacity = Math.random() * 0.5 + 0.3;
        starContainer.appendChild(star);
    }
}

// 切换特效
document.getElementById('sakuraTheme').addEventListener('click', function() {
    document.querySelector('.sakura-background').classList.remove('hidden');
    document.querySelector('.star-background').classList.add('hidden');
});

document.getElementById('starTheme').addEventListener('click', function() {
    document.querySelector('.star-background').classList.remove('hidden');
    document.querySelector('.sakura-background').classList.add('hidden');
});

// 情书交互
document.getElementById('showLetter').addEventListener('click', function() {
    const letter = document.getElementById('loveLetter');
    const audio = document.getElementById('loveSound');
    
    letter.classList.add('active');
    audio.play();
    
    // 添加点击外部关闭功能
    document.addEventListener('click', function closeLetter(e) {
        if (!letter.contains(e.target) && e.target.id !== 'showLetter') {
            letter.classList.remove('active');
            document.removeEventListener('click', closeLetter);
        }
    });
});

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    createSakura();
    createStars();
});
