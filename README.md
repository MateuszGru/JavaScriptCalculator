# JavaScriptCalculator

1. fillStartupScreenData: 
    -targetLocation - empty HTML container. In this place we will place our data

    -userTextContent - required data such as number or array. Based on this info, class will create buttons with just numbers or with text(in array).
        userTextContent data type:

        using number, class will return numbers from 0 to "x" where "x" is number that we specified.
        Default value is 10

        using array. class will return items placed in array from index 0 to last index in array. Inside array we can enter string and intiger

    -nameElementID - it is int important to use this variable but we can specified ID if created elements.
        Default value is:  'singleButton' + num
