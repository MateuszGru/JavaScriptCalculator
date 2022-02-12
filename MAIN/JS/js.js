const userTextContentQuantity = 10

// checking all options (numbers and math operations) using one check all button
function checkAllButtons(e){
    let childNodesOfFillOperations = e.target.parentElement.childNodes[3]

    if(e.target.textContent == 'Zaznacz wszystkie'){
        for(let i=0; i<e.target.parentElement.childNodes[3].childElementCount; i++){
            childNodesOfFillOperations.childNodes[i].classList.add('addSelectionFromSingleButtonsStyle')
            childNodesOfFillOperations.childNodes[i].classList.remove('removeSelectionFromSingleButtonsStyle')
            e.target.textContent = 'Odznacz wszystkie'
            if(e.target.id == 'checkAllOperations'){
                document.querySelector('.wrapper').style.display = 'none'
                document.querySelector('.infoPopup').style.display = 'flex'
                document.querySelector('.infoPopupParagraph').textContent = 'Podczas wyliczania potęgi lub silni, kalkulator nie obsługuje liczb innych niż naturalne'
            }else{
                document.querySelector('.wrapper').style.display = 'flex'
                document.querySelector('.infoPopup').style.display = 'none'
                document.querySelector('.infoPopupParagraph').textContent = ''
            }
        }
    }else{
        for(let i=0; i<e.target.parentElement.childNodes[3].childElementCount; i++){
            childNodesOfFillOperations.childNodes[i].classList.remove('addSelectionFromSingleButtonsStyle')
            childNodesOfFillOperations.childNodes[i].classList.add('removeSelectionFromSingleButtonsStyle')
            e.target.textContent = 'Zaznacz wszystkie'
        }
    }
}

// checking single option (number or operation) by clicking on it
function stylingSelectedItem(e){
    if(e.target.classList[0] == 'singleButtonsStyle'){
        if(e.target.classList[1] == 'addSelectionFromSingleButtonsStyle'){
            e.target.classList.remove('addSelectionFromSingleButtonsStyle')
            e.target.classList.add('removeSelectionFromSingleButtonsStyle')
        }else{
            e.target.classList.add('addSelectionFromSingleButtonsStyle')
            e.target.classList.remove('removeSelectionFromSingleButtonsStyle')
            if(e.target.textContent == 'Potęgowanie ( ^ )'){
                document.querySelector('.wrapper').style.display = 'none'
                document.querySelector('.infoPopup').style.display = 'flex'
                document.querySelector('.infoPopupParagraph').textContent = 'Podczas wyliczania potęgi, kalkulator nie obsługuje liczb innych niż naturalne'
            }else if(e.target.textContent == 'Silnia ( ! )'){
                document.querySelector('.wrapper').style.display = 'none'
                document.querySelector('.infoPopup').style.display = 'flex'
                document.querySelector('.infoPopupParagraph').textContent = 'Podczas wyliczania silni, kalkulator nie obsługuje liczb innych niż naturalne'   
            }
        }
    } 
}

// listener check all button
document.querySelector('#checkAllNumbers').addEventListener('click', checkAllButtons)
document.querySelector('#checkAllOperations').addEventListener('click', checkAllButtons)

// listener check single option
document.querySelector('#fillOperations').addEventListener('click', stylingSelectedItem)
document.querySelector('#fillNumbers').addEventListener('click', stylingSelectedItem)

// listener closing popup on press "OK" button
document.querySelector('.InfoPopupButton').addEventListener('click', function(){
    document.querySelector('.wrapper').style.display = 'flex'
    document.querySelector('.infoPopup').style.display = 'none'
})


// calling fillStartupScreenClass. This class build buttons (options) and place them in correct containers on landing page.
document.addEventListener('DOMContentLoaded', function(){
    let fillNumbers = new fillStartupScreenData(
        targetLocation = document.querySelector('#fillNumbers'),
        userTextContent = userTextContentQuantity
    )
    fillNumbers.createDataSource()
})

// calling fillStartupScreenClass. This class build buttons (options) and place them in correct containers on landing page.
document.addEventListener('DOMContentLoaded', function(){
    let fillOperations = new fillStartupScreenData(
        targetLocation = document.querySelector('#fillOperations'),
        userTextContent = ['Dodawanie ( + )', "Odejmowanie ( - )", 'Mnożenie ( * )', 'Dzielenie ( / )', 'Potęgowanie ( ^ )', "Silnia ( ! )"]
    )
    fillOperations.createDataSource()
})

