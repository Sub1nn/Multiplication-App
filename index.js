const num1 = Math.ceil(Math.random()*10) //generating a random number with the function
const num2 = Math.ceil(Math.random()*10) //generating a random number with the function

const questionEl = document.getElementById("question"); //Accessing the elements from the DOM by the getElement function.
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}?`; //Now changing the text of just accessed questionEl with this command.

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}