class fillStartupScreenData{
    constructor(targetLocation, userTextContent , nameElementID = 'singleButton'){
        this.targetLocation = targetLocation
        this.userTextContent = userTextContent
        this.nameElementID = nameElementID
    }
    createDataSourceBasedOnArray(){
        for(let i = 0; i< this.userTextContent.length; i++){
            let singleEl = document.createElement('button')
            singleEl.setAttribute('id', `${this.nameElementID}Arr${i}`)
            singleEl.classList.add('singleButtonsStyle')
            singleEl.textContent = userTextContent[i]
            this.targetLocation.append(singleEl)
        }
    }
    createDataSourceBasedOnItemsQuantity(){
        for(let i = 0; i< this.userTextContent; i++){
            let singleEl = document.createElement('button')
            singleEl.setAttribute('id', `${this.nameElementID}Num${i}`)
            singleEl.classList.add('singleButtonsStyle')
            singleEl.textContent = [i]
            this.targetLocation.append(singleEl)
        }
    }
}

