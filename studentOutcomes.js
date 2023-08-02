document.getElementById('cpe').addEventListener('click', () => {
    const confirmation = confirm('Do you want to go to Computer Engineering page?');
    if (confirmation) {
        window.location.href = 'cpeSO.html';
    }
});

document.getElementById('ece').addEventListener('click', () => {
    const confirmation = confirm('Do you want to go to Electronics Engineering page?');
    if (confirmation) {
        window.location.href = 'eceSO.html';
    }
});