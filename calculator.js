let textBox = document.querySelector('.display > p')
function checkSize() {
    if (textBox.textContent.length == 40) {
        back();
    }
}
function checkDec() {
    strArray = textBox.textContent.split(/[\+\-\/\*]/)
    lastNumInStr = strArray[strArray.length - 1]
    for (i = 0; i < lastNumInStr.length; i++) {
        if (lastNumInStr[i] == '.') {
            return true;
        }
    }
    return false;
}
//add through divide work inside enter, do not add operators to string
function add(num1, num2) {
    return +num1 + +num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return (Math.floor((num1 * num2) * 1000) / 1000)
}
function divide(num1, num2) {
    return (Math.floor((num1 / num2) * 1000) / 1000);
}
function back() {
    if (textBox.textContent.length > 0) {
        textBox.textContent = textBox.textContent.slice(0, -1);
    }
}
function clear() {
    textBox.textContent = ''
}
function enter() {
    tbtcm1 = textBox.textContent[textBox.textContent.length - 1]
    if (textBox.textContent[textBox.textContent.length - 1] == '.') {
        textBox.textContent += '0';
    }
    if (tbtcm1 == '+' || tbtcm1 == "-" || tbtcm1 == "*" || tbtcm1 == '/') {
        textBox.textContent = textBox.textContent.slice(0, textBox.textContent.length - 1);
    }
    arrayParts = []
    lastOperator = -1 //will start at 0
    for (i = 0; i < textBox.textContent.length; i++) {
        if (textBox.textContent[i] == "+" || textBox.textContent[i] == "-" || textBox.textContent[i] == '/' || textBox.textContent[i] == '*') {
            arrayParts += textBox.textContent.slice(lastOperator + 1, i) + "," + textBox.textContent.slice(i, i + 1) + ",";
            lastOperator = i;
        }
    }
    arrayParts += textBox.textContent.slice(lastOperator + 1);
    arrayParts = arrayParts.split(',')
    iCounter = 0
    while (iCounter < arrayParts.length - 1) {
        iCounter++
        if (arrayParts[iCounter] == '*') {
            arrayParts.splice(iCounter - 1, 3, (`${mult(arrayParts[iCounter - 1], arrayParts[iCounter + 1])}`))
            iCounter = 0;
            continue;
        }
        if (arrayParts[iCounter] == '/') {
            if (arrayParts[iCounter + 1] == 0) {
                arrayParts = "ERROR";
                break;
            }
            else {
                arrayParts.splice(iCounter - 1, 3, (`${divide(arrayParts[iCounter - 1], arrayParts[iCounter + 1])}`))
                iCounter = 0;
                continue;
            }
        }
    }
    iCounter = 0
    while (iCounter < arrayParts.length - 1) {
        iCounter++
        if (arrayParts[iCounter] == '+') {
            arrayParts.splice(iCounter - 1, 3, (`${add(arrayParts[iCounter - 1], arrayParts[iCounter + 1])}`))
            iCounter = 0;
            continue;
        }
        if (arrayParts[iCounter] == '-') {
            arrayParts.splice(iCounter - 1, 3, (`${sub(arrayParts[iCounter - 1], arrayParts[iCounter + 1])}`))
            iCounter = 0;
            continue;
        }
    }
    textBox.textContent = arrayParts
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
            if (textBox.textContent[textBox.textContent.length - 1] != '+' && textBox.textContent[textBox.textContent.length - 1] != '-' && textBox.textContent[textBox.textContent.length - 1] != '*'
                && textBox.textContent[textBox.textContent.length - 1] != '/' && textBox.textContent[textBox.textContent.length - 1] != undefined) {
                textBox.textContent += '/';
            }
            checkSize();
            break;
        case '*':// '*'
            if (textBox.textContent[textBox.textContent.length - 1] != '+' && textBox.textContent[textBox.textContent.length - 1] != '-' && textBox.textContent[textBox.textContent.length - 1] != '*'
                && textBox.textContent[textBox.textContent.length - 1] != '/' && textBox.textContent[textBox.textContent.length - 1] != undefined) {
                textBox.textContent += '*';
            }
            checkSize();
            break;
        case '+'://'+'
            if (textBox.textContent[textBox.textContent.length - 1] != '+' && textBox.textContent[textBox.textContent.length - 1] != '-' && textBox.textContent[textBox.textContent.length - 1] != '*'
                && textBox.textContent[textBox.textContent.length - 1] != '/' && textBox.textContent[textBox.textContent.length - 1] != undefined) {
                textBox.textContent += '+';
            }
            checkSize();
            break;
        case '-'://'-'
            if (textBox.textContent[textBox.textContent.length - 1] != '+' && textBox.textContent[textBox.textContent.length - 1] != '-' && textBox.textContent[textBox.textContent.length - 1] != '*'
                && textBox.textContent[textBox.textContent.length - 1] != '/' && textBox.textContent[textBox.textContent.length - 1] != undefined) {
                textBox.textContent += '-'
            }
            checkSize();
            break;
        case '.'://'.'
            if (checkDec() == false) {
                textBox.textContent += '.'
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
num0 = document.querySelector(".numZero div");
num0.addEventListener('click', () => {
    textBox.textContent += '0';
})
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
            if (textBox.textContent[textBox.textContent.length - 1] != '+' && textBox.textContent[textBox.textContent.length - 1] != '-'
                && textBox.textContent[textBox.textContent.length - 1] != '*' && textBox.textContent[textBox.textContent.length - 1] != '/'
                && textBox.textContent[textBox.textContent.length - 1] != undefined && opr.className != '.') {
                if (textBox.textContent[textBox.textContent.length - 1] == '.') {
                    textBox.textContent += '0';
                }
                textBox.textContent += opr.className;
            }
            if (opr.textContent == 'Dec.' && checkDec() == false) {
                textBox.textContent += opr.className;
            }

            checkSize();
        })
    }
}

