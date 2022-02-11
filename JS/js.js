const checkAllNumbers = document.querySelector('#checkAllNumbers')
const userTextContentQuantity = 10


// function checkAllButtons(){
//     for(let i=0; i<userTextContentQuantity; i++){
//         let singleButtonStyle = document.querySelector(`#singleButtonNum${i}`)
//         singleButtonStyle.classList.toggle('removeSelectionFromSingleButtonsStyle')
//     }
//     if(singleButtonStyle.classList[1] == 'removeSelectionFromSingleButtonsStyle'){
//         checkAllNumbers.textContent = 'Odznacz wszystkie'
//     }else{
//         checkAllNumbers.textContent = 'Zaznacz wszystkie'
//     }
// }

// checkAllNumbers.addEventListener('click', function(){
//     checkAllButtons()
// })
function returnClickedItem(e){
    console.log(e.target);
}

document.querySelector('#fillNumbers').addEventListener('click', returnClickedItem)

document.addEventListener('DOMContentLoaded', function(){

    let fillNumbers = new fillStartupScreenData(
        targetLocation = document.querySelector('#fillNumbers'),
        userTextContent = userTextContentQuantity
    )
    fillNumbers.createDataSourceBasedOnItemsQuantity()
})

document.addEventListener('DOMContentLoaded', function(){

    let fillNumbers = new fillStartupScreenData(
        targetLocation = document.querySelector('#fillOperations'),
        userTextContent = ['Dodawanie ( + )', "Odejmowanie ( - )", 'Mnożenie ( * )', 'Dzielenie ( / )', 'Potęgowanie ( ^ )', "Silnia ( ! )"]
    )
    fillNumbers.createDataSourceBasedOnArray()
})

