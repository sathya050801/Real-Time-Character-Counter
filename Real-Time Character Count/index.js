const textarea = document.getElementById("textarea")
const totalCharacter = document.getElementById("total-counter")
const remainingCharacter = document.getElementById("remaining-counter")

textarea.addEventListener("keyup", () =>{
    updateCounter();
});

function updateCounter()
{
    totalCharacter.innerText = textarea.value.length;
    remainingCharacter.innerText = textarea.getAttribute("maxlength") - textarea.value.length;
}