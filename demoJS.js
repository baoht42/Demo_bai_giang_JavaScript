// function popup()
// {
//     alert('Xong')
// }
// ten=prompt('moi ban nhap ten')
// function do_sth() {
//     let selectvalue = document.getElementById('car').value;
//     alert(selectvalue);
//
// }
let selectElement = document.getElementById('car');
selectElement.addEventListener("change",changeFunction);
function changeFunction(){
    let selectValue = document.getElementById('car').value;
    alert(selectValue)
}

let changeColor = document.getElementById('car');
changeColor.addEventListener("mouseover",mouseover);
changeColor.addEventListener("mouseout", mouseout);
function mouseover(){
    document.getElementById('car').style.color="red";
}
function mouseout(){
    document.getElementById('car').style.color="blue";
}


let btn = document.getElementById("btn-click");
btn.addEventListener("click", handleClick)

function handleClick() {
    let name = prompt("Nhap ten: ")
    document.getElementById("test1").innerText = name;
}