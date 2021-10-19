let audioGood = new Audio('assets/correct.mp3');
let audioBad = new Audio('assets/buzz.mp3');

let form = document.querySelector(".code_wrapper");
let userInput = document.getElementById("code_input");
let answer = document.getElementById("code_answer");

form.addEventListener("submit", function(e){
    let insertedCode = e.target.children[2].value;

    var formData = new FormData();
    formData.append("userCode", insertedCode);

    fetch("ajax/formSubmission.php", {
        method: "POST",
        body:formData
    })
    .then(response => response.json())
    .then(result => {
        if(result != null){
            if (result["status"]) {
                audioGood.play();
                answer.style.opacity = "1";
                setTimeout(function(){ answer.style.opacity = "0"; }, 1000);
            } else {
                audioBad.play();
                userInput.style.border = "solid red 3px";
                setTimeout(function(){ userInput.style.border = "solid var(--primaryBlue) 3px"; }, 1000);
            }

        }
    })
    .catch(error => {
        console.error("Error: Well something went wrong.  ~Bailey");
    })

    userInput.value = '';

    e.preventDefault();
});