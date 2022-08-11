const btn1 = document.getElementById("show-btn");
const answer1 = document.getElementById("an");
const question = document.getElementById("question");

const btn2 = document.getElementById("show-btn1");
const btn3 = document.getElementById("show-btn2");
const answer2 = document.getElementById("an1");
const answer3 = document.getElementById("an2");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");

btn1.addEventListener("click" ,function(){
    answer1.classList.toggle("showQ");
    question.classList.toggle("questheight");

    //remove

    answer2.classList.remove("showQ");
    question2.classList.remove("questheight");
    answer3.classList.remove("showQ");
    question3.classList.remove("questheight");
})


btn2.addEventListener("click" ,function(){
    answer2.classList.toggle("showQ");
    question2.classList.toggle("questheight");

    // remove

    answer1.classList.remove("showQ");
    question.classList.remove("questheight");
    answer3.classList.remove("showQ");
    question3.classList.remove("questheight");

})

btn3.addEventListener("click" ,function(){
    answer3.classList.toggle("showQ");
    question3.classList.toggle("questheight");

    // remove

    answer1.classList.remove("showQ");
    question.classList.remove("questheight");
    answer2.classList.remove("showQ");
    question2.classList.remove("questheight");
})