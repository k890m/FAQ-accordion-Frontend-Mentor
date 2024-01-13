const questionHeaders = document.querySelectorAll(".question");

[...questionHeaders].forEach(questionHeader => {
    questionHeader.addEventListener('click', event => {
        questionHeader.classList.toggle("active");
        const accordianItemBody = questionHeader.nextElementSibling;
        if(questionHeader.classList.contains("active")){
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
        } else {
            accordianItemBody.style.maxHeight = 0
        }
    });
});
