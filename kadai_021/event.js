const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', () => {
    const textMain = document.getElementById('text');

    setTimeout(() => {
        textMain.textContent = 'ボタンをクリックしました';
    },2000);
});