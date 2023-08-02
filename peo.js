function toggleDetails(id) {
    const peoContainer = document.getElementById(id);
    const details = peoContainer.querySelector('p');
    const button = peoContainer.querySelector('button');

    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    }
}
