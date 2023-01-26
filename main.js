// Dom Elements //
const textareaEl = document.getElementById('text-area');
const zeroEl = document.getElementById('zero');
const fithtyEl = document.getElementById('fithty')

let num = 50;

textareaEl.addEventListener("keyup", () => {
    updateCounter();
})
const updateCounter = () => {
    zeroEl.innerHTML = textareaEl.value.length
    fithtyEl.innerHTML = 150 - textareaEl.value.length;
}
