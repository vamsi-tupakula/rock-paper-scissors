let your_text = document.querySelector("#your_text");

function check(selection){
    yourSeletion = selection.id
    your_text.innerHTML = `Your Choice :: ${yourSeletion.toUpperCase()}`;
}