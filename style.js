// ナビゲーションバーのリンクの動作
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = this.href;
    });
});

// ボタンの動作
document.querySelectorAll(".planet-button").forEach(button => {
    button.addEventListener("click", function() {
        window.location.href = this.getAttribute("href");
    });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // デフォルトのアンカー機能を無効化

        // アンカーのhref属性から、リンク先のidを取得
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // スムーズスクロールを実行
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});