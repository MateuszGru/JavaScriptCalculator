const calcScreen = document.querySelector('.currentNum')
const prevNum = document.querySelector('.previousNum')
let operation = undefined

// display selected number on the calculator screen
function displaySelectedOptionOnCalculatorScreen (selectedEl){
    let currentNumber = selectedEl.target.textContent
    if(selectedEl.target.classList[0] == 'singleButtonsStyle'){
        if(currentNumber == '.'){
            if(calcScreen.textContent.includes('.')){
                return
            }
        }
        calcScreen.textContent = calcScreen.textContent + currentNumber.toString()
    }
}

// selecting and validate chosen operator, display it on the screen
function chooseOperation (operator){
    
    if(operator.target.classList[0] == 'singleButtonsStyle'){
        if(calcScreen.textContent == ''){
            return
        }
        if(operator.target.textContent != ''){
            if(calcScreen.textContent.toString() === "0" && prevNum.textContent[prevNum.textContent.length -1] === '/'){
                clearCalc()
                openPopup('Dzielenie przez 0 jest operacją niedozwoloną')
                return
            }
            if(calcScreen.textContent.includes('.') == true || prevNum.textContent.includes('.') == true){
                if(prevNum.textContent[prevNum.textContent.length -1] == '^'){
                    clearCalc()
                    openPopup('Podczas wyliczania potęgi, kalkulator nie obsługuje liczb innych niż naturalne')
                    return
                }
            }
            operation = operator.target.textContent
            calculate()
            if(operator.target.textContent != '!'){
                prevNum.textContent = calcScreen.textContent + ' ' + operator.target.textContent
                calcScreen.textContent = ''
            }
        }
    }
}

// clearing every value on calc screen
function clearCalc(){
    prevNum.textContent = ''
    calcScreen.textContent = ''
}

// calculate selected values
function calculate(){
    let mathOperation
    const prev = parseFloat(prevNum.textContent)
    const curr = parseFloat(calcScreen.textContent)
    if(operation == '!'){
        if(prevNum.textContent.includes('.') || calcScreen.textContent.includes('.')){
            clearCalc()
            openPopup('Podczas wyliczania potęgi, kalkulator nie obsługuje liczb innych niż naturalne')
            return
        }else{
            mathOperation = 1
            if (curr<0){
                return -1
            }
            for(let i=1; i<=curr; i++){
                mathOperation *= i
            }
            prevNum.textContent = `silnia(${calcScreen.textContent})`
            calcScreen.textContent = mathOperation
        }
        operation = undefined
    }
    if(isNaN(curr) || isNaN(prev)){
        return
    }
    switch (prevNum.textContent[prevNum.textContent.length -1]){
        case '+':
            mathOperation = prev + curr
            break;
        case '-':
            mathOperation = prev - curr
            break;
        case '*':
            mathOperation = prev * curr
            break;
        case '/':
            if(curr === 0){
                clearCalc()
                openPopup('Dzielenie przez 0 jest operacją niedozwoloną')
                return
            }
            mathOperation = prev / curr
            break;
        case '^':
            if(prevNum.textContent.includes('.') || calcScreen.textContent.includes('.')){
                clearCalc()
                openPopup('Podczas wyliczania potęgi, kalkulator nie obsługuje liczb innych niż naturalne')
                return
            }
            mathOperation = Math.pow(prev, curr)
            break;
        default:
            return
    }
    calcScreen.textContent = mathOperation
    prevNum.textContent = ''
}

// equal sign listener
document.querySelector('.equal').addEventListener('click', calculate)

// selecting operation button
document.querySelector('#operationButtons').addEventListener('click', chooseOperation)

// select numbers from 0-9
document.querySelector('#numberButtons').addEventListener('click', displaySelectedOptionOnCalculatorScreen)

// clearing calculator Screen by press AC
document.querySelector('.CE').addEventListener('click', clearCalc)

// building buttons in calculator view
document.querySelector('.nextButton').addEventListener('click', function(){
    let onlyNumArray = selectedButtons.selectedNumbers.concat(['.'])
    let fillNumbers = new fillStartupScreenData(
        targetLocation = document.querySelector('#numberButtons'),
        userTextContent = onlyNumArray
    )
    fillNumbers.createDataSource()
})

// building buttons in calculator view
document.querySelector('.nextButton').addEventListener('click', function(){
    let onlyMathSignArray = []
    for(let i=0; i<selectedButtons.selectedOperations.length; i++){
        let sliceMathSign = selectedButtons.selectedOperations[i].slice(-3,-2)
        onlyMathSignArray.unshift(sliceMathSign)
    }

    let fillOperations = new fillStartupScreenData(
        targetLocation = document.querySelector('#operationButtons'),
        userTextContent = onlyMathSignArray 
    )
    fillOperations.createDataSource()
})