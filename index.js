
document.body.style.backgroundColor = '#264653';


function change() {
    if (document.body.style.backgroundColor === 'rgb(221, 143, 131)') { // #DD8F83
        document.body.style.backgroundColor = '#264653';
    } else if (document.body.style.backgroundColor === 'rgb(38, 70, 83)') { // #264653
        document.body.style.backgroundColor = '#F8D3E2';
    } else {
        document.body.style.backgroundColor = '#DD8F83';
    }
    textColor();
}

function switchChange() {
    const checkbox = document.querySelector('#switch input[type="checkbox"]');
    if (checkbox.checked) {
        document.body.style.backgroundColor = '#F8D3E2';
    } else {
        document.body.style.backgroundColor = '#264653';
    }
    textColor();
}

function textColor() {
    if (document.body.style.backgroundColor === 'rgb(38, 70, 83)' ) {
        document.body.style.color = '#DD8F83'; //pink
    } else {
        document.body.style.color = '#264653';//blue
    }
}

//attempts to randomly place
function summon() {
    const element = document.getElementById('summonLocation');
    element.style.backgroundSize = 'contain'; 
    element.style.backgroundRepeat = 'no-repeat';
    element.style.position = 'absolute';
    element.style.top = generateRandom() + '%';
    element.style.left = generateRandom() + '%';
}

function generateRandom() {
    var num = Math.floor(Math.random() * 100);
    return num;
}

