export class View
{   
    constructor(calculator) 
    {
        this.calculator = calculator
        this.prevNumberA = document.getElementById("prev-number-a")
        this.prevNumberB = document.getElementById("prev-number-b")
        this.prevAction = document.getElementById("prev-action")
        this.numberA = document.getElementById("number-a")
        this.numberB = document.getElementById("number-b")
        this.action = document.getElementById("action")
        this.currentOperation = document.getElementById("current-operation")

    }

    render() 
    {
        if(this.calculator.prevNumberA == 0 && this.calculator.prevNumberB == 0) {
            this.prevNumberA.innerHTML = ''
            this.prevNumberB.innerHTML = ''
            this.prevAction.innerHTML = ''
        } else {
            this.prevNumberA.innerHTML = this.calculator.prevNumberA
            this.prevNumberB.innerHTML = this.calculator.prevNumberB
            this.prevAction.innerHTML = this.actionText(this.calculator.prevAction)
        }
    
        if(this.calculator.isNumberASet) {
            this.numberA.innerHTML = this.calculator.numberA
            this.numberB.innerHTML = this.calculator.display 
        } else {
            this.numberA.innerHTML = this.calculator.display 
            this.numberB.innerHTML = ""
        }

        let Alength = this.calculator.numberA.toString().length

        if(this.isBetween(Alength, 0, 10)) {
            this.defaultFontSize()
        } 

        if(this.isBetween(Alength, 11, 15)) {
            this.mediumFontSize()
        }

        if(this.isBetween(Alength, 16, 100)) {
            this.smallFontSize()
        } 

        this.action.innerHTML = this.actionText(this.calculator.action)
    
    
    }

    actionText(action) 
    {
        return (this.calculator.isActionSet ? (this.calculator.actionSymbols[action] != undefined ?  this.calculator.actionSymbols[action]: "") : "")
    }

    isBetween(x, min, max)
    {
        return x >= min && x <= max;
    }

    defaultFontSize() 
    {
        this.numberA.classList.remove("medium-font-size", "small-font-size")
        this.numberA.classList.add("default-font-size")

        this.numberB.classList.remove("medium-font-size", "small-font-size")
        this.numberB.classList.add("default-font-size")

        this.action.classList.remove("medium-font-size", "small-font-size")
        this.action.classList.add("default-font-size")
    }

    mediumFontSize() 
    {
        this.numberA.classList.remove("small-font-size", "default-font-size")
        this.numberA.classList.add("medium-font-size")

        this.numberB.classList.remove("small-font-size", "default-font-size")
        this.numberB.classList.add("medium-font-size")

        this.action.classList.remove("small-font-size", "default-font-size")
        this.action.classList.add("medium-font-size") 
    }

    smallFontSize() 
    {
        this.numberA.classList.remove("medium-font-size", "default-font-size")
        this.numberA.classList.add("small-font-size")

        this.numberB.classList.remove("medium-font-size", "default-font-size")
        this.numberB.classList.add("small-font-size")

        this.action.classList.remove("medium-font-size", "default-font-size")
        this.action.classList.add("small-font-size") 
    }

}
