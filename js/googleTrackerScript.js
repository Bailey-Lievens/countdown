let audioGood = new Audio('assets/roar.mp3');
let audioBad = new Audio('assets/buzz.mp4');

let form = document.querySelector(".code_wrapper");

form.addEventListener("submit", function(e){
    let insertedCode = e.target.children[1].value;

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
                } else {
                    audioBad.play();
                }
            }
        })
        .catch(error => {
            console.error("Error: Well something went wrong. :(  ~Bailey");
        })  
    e.preventDefault();
});