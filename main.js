const questionHeader = document.querySelectorAll(".question");

questionHeader.forEach(questionHeader => {
    questionHeader.addEventListener('click', event => {
        questionHeader.classList.toggle(".active");
    });
});