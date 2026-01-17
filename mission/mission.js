let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById("blue").style.color = 'cyan';
        document.getElementById("logo").src = "byui-logo-dark.png";
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById("blue").style.color = 'rgb(0, 119, 255)';
        document.getElementById("logo").src = "byui-logo.jpeg";
    }
}           
                    