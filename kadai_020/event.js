const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', () => {
    const mainText = document.getElementById('text');
    mainText.textContent = 'ボタンをクリックしました';
});