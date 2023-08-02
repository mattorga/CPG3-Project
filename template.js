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

function currMap(code, title, numbers){
    document.write("<tr><td>" + code + "</td>");
    document.write("<td>" + title + "</td>");

    var numLetters = numbers.toString();

    for (i = 0; i<12; i++){
        if(numLetters[i] == "0"){
            document.write("<td>" + "" + "</td>");
        }
        else{
            document.write("<td>" + numLetters[i] + "</td>");
        }
    }
    document.write("</tr>");
}
