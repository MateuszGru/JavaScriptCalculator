const checkAllNumbers = document.querySelector('#checkAllNumbers')
const userTextContentQuantity = 10

function checkAllButtons(){
    let singleButtonStyle = document.querySelectorAll('.singleButtonsStyle')
    for(let i=0; i<10; i++){
        singleButtonStyle[i].style.backgroundColor = 'rgb(85, 84, 84)'
        singleButtonStyle[i].style.color = 'white'
    }
}

checkAllNumbers.addEventListener('click', checkAllButtons)

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
        userTextContent = ['+', "-", '*', '/', '^', "!"]
    )
    fillNumbers.createDataSourceBasedOnArray()
})

