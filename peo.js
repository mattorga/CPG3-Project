window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const scrollUpButton = document.getElementById('scrollUpButton');
    const scrollDownButton = document.getElementById('scrollDownButton');

    navContainer.addEventListener('scroll', handleScroll);

    function handleScroll() {
        if (navContainer.scrollTop > 0) {
            scrollUpButton.classList.add('show');
        } else {
            scrollUpButton.classList.remove('show');
        }

        if (navContainer.scrollTop + navContainer.clientHeight < navContainer.scrollHeight) {
            scrollDownButton.classList.add('show');
        } else {
            scrollDownButton.classList.remove('show');
        }
    }
});
	
function scrollNavContainer(direction) {
    const navContainer = document.querySelector('.nav-container');
    const scrollAmount = 150; 
    if (direction === 'up') {
        navContainer.scrollTop -= scrollAmount;
    } else if (direction === 'down') {
        navContainer.scrollTop += scrollAmount;
    }
}

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