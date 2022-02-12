

let onlyMathSignArray = []


document.querySelector('.nextButton').addEventListener('click', function(){
    let onlyNumArray = selectedButtons.selectedNumbers.concat(['.', '='])

    


    let fillNumbers = new fillStartupScreenData(
        targetLocation = document.querySelector('#numberButtons'),
        userTextContent = onlyNumArray
    )
    fillNumbers.createDataSource()
})

document.querySelector('.nextButton').addEventListener('click', function(){
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