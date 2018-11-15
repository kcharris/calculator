let textBox = document.querySelector('.display > p')
function checkSize() {
    if (textBox.textContent.length == 36) {
        back();
    }
}
function checkDec() {
    for (i=0;i<textBox.textContent.length;i++){
        if (textBox.textContent[i] == '.'){
            return true;
        }
    }
    return false;
}
//add through divide work inside enter, do not add operators to string
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return Math.floor(num1 / num2);
}
function back() {
    if (textBox.textContent.length > 0) {
        textBox.textContent = textBox.textContent.slice(0, -1);
    }
}
function clear() {
    textBox.textContent = ''
}
function enter(string) {

}
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Backspace':
            back();
            break;
        case 'Enter':
            enter();
            break;
        case 'Delete':
            clear();
            break;
        case '9':
            textBox.textContent += '9';
            checkSize();
            break;
        case '8':
            textBox.textContent += '8';
            checkSize();
            break;
        case '7':
            textBox.textContent += '7';
            checkSize();
            break;
        case '6':
            textBox.textContent += '6';
            checkSize();
            break;
        case '5':
            textBox.textContent += '5';
            checkSize();
            break;
        case '4':
            textBox.textContent += '4';
            checkSize();
            break;
        case '3':
            textBox.textContent += '3';
            checkSize();
            break;
        case '2':
            textBox.textContent += '2';
            checkSize();
            break;
        case '1':
            textBox.textContent += '1';
            checkSize();
            break;
        case '0':
            textBox.textContent += '0';
            checkSize();
            break;
        case '/':// "/"
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                textBox.textContent += '/';
            }
            checkSize();
            break;
        case '*':// '*'
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                textBox.textContent += '*';
            }
            checkSize();
            break;
        case '+'://'+'
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                textBox.textContent += '+';
            }
            checkSize();
            break;
        case '-'://'-'
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                textBox.textContent += '-'
            }
            checkSize();
            break;
        case '.'://'.'
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                    if(checkDec() == true){

                    }
                    else {
                        textBox.textContent += '.';
                    }
            }
            checkSize();
            break;
    }
})
let allNum = document.querySelectorAll('.num div');
let allOperators = document.querySelectorAll(".operators > div");

for (i = 0; i < allNum.length; i++) {
    let num = allNum[i];
    num.addEventListener('click', () => {
        textBox.textContent += num.textContent;
        checkSize();
    })
}
for (i = 0; i < allOperators.length; i++) {
    let opr = allOperators[i];
    if (opr.textContent == 'Enter') {
        opr.addEventListener('click', () => enter())
    }
    else if (opr.textContent == 'Clear') {
        opr.addEventListener('click', () => clear())
    }
    else if (opr.textContent == 'Back') {
        opr.addEventListener('click', () => back())
    }
    else {
        opr.addEventListener('click', () => {
            if (textBox.textContent[textBox.textContent.length -1] != '+' && textBox.textContent[textBox.textContent.length -1] != '-' && textBox.textContent[textBox.textContent.length -1] != '*'
                && textBox.textContent[textBox.textContent.length -1] != '/' && textBox.textContent[textBox.textContent.length -1] != '') {
                if(opr.className == '.' && checkDec() == true){

                }
                else{
                    textBox.textContent += opr.className;
                }
            }
            console.log(textBox.textContent[textBox.textContent.length -1])
            checkSize();
        })
    }
}


