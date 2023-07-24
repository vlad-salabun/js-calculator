export class Calculator
{
    display = "0"
    numberA = 0
    numberB = 0
    prevNumberA = 0
    prevNumberB = 0
    prevAction = ""

    action = ""
    actionSymbols = {
        "plus": "+", "minus": "−", "divide": ":", "multiply": "*"
    }

    isNumberASet = false
    isNumberBSet = false
    isActionSet = false
    hasComma = false

    digitsLimit = 12

    add(input)
    {                
        if(this.isNumberASet && !this.isNumberBSet) {
            this.isNumberBSet = true
            this.display = "0"
        }
        
        if(this.display.length > 9) {
            return
        }

        if(this.display === "0") {
            this.display = input
            return
        }

        this.display = this.display + input
    }

    delete()
    {
        if(this.isNumberASet && !this.isNumberBSet) {
            this.isNumberBSet = true
            this.display = "0"
        }
        
        if(this.display.length > 1) {
            let char = this.display.slice(-1)
            if(char == ".") {
                this.hasComma = false
            }
            this.display = this.display.slice(0, -1)
            return
        }

        this.display = "0"
    }

    addComma() 
    {
        if(this.isNumberASet && !this.isNumberBSet) {
            this.isNumberBSet = true
            this.display = "0"
        }
        
        if(!this.hasComma) {    
            this.display = this.display + "."
            this.hasComma = true
        }
    }

    clear()
    {
        this.display = "0"
        this.numberA = 0
        this.numberB = 0
        this.prevNumberA = 0
        this.prevNumberB = 0
        this.prevAction = ""
    
        this.action = ""

        this.isNumberASet = false
        this.isNumberBSet = false
        this.isActionSet = false
        this.hasComma = false
    }

    readInput(action, isEqual = false)
    {       
        if(this.isNumberASet) {

            this.action = action

            if(!isEqual) {
                return
            }            
            
            this.isNumberBSet = true
            this.hasComma = false
            this.numberB = parseFloat(this.display)

            this.executeAction()
            this.action = action

            return
        } 

        this.isNumberASet = true
        this.isActionSet = true
        this.numberA = parseFloat(this.display)
        this.action = action

        this.display = "0"
        this.hasComma = false
    }

    savePrevNumbers(result)
    {
        this.prevNumberA = this.numberA
        this.prevNumberB = this.numberB
        this.prevAction = this.action  
        this.numberA = result
        this.display = "" + this.numberB
        this.numberB = 0
        this.isNumberBSet = false
    }

    executeAction()
    {
        if(this.action == "plus") {
            this.plus()
        } else if(this.action == "minus") {
            this.minus()
        } else if(this.action == "divide") {
            this.divide()
        } else if(this.action == "multiply") {
            this.multiply()
        }
    }

    plus()
    { 
        let result = this.numberA + this.numberB
        result = parseFloat(result.toFixed(this.findFixedDigit()))
        this.savePrevNumbers(result)
    }

    minus()
    {
        let result = this.numberA - this.numberB
        result = parseFloat(result.toFixed(this.findFixedDigit()))
        this.savePrevNumbers(result)
    }

    divide()
    {
        if(this.numberB == 0) {
            return
        }
        
        let result = this.numberA / this.numberB
        this.savePrevNumbers(result)
    }

    multiply() 
    {
        let result = this.numberA * this.numberB
        result = parseFloat(result.toFixed(this.findFixedDigit()))
        this.savePrevNumbers(result)  
    }

    equal() 
    {
        if(this.action == '') {
            return    
        }     
        this.readInput(this.action, true)
    }

    findFixedDigit() 
    {
        let digitsA = 0;
        let digitsB = 0;
        let a = (this.numberA + "").split('.')
        let b = (this.numberB + "").split('.')

        if(a.length == 2) {
            digitsA = a[1].length
        }

        if(b.length == 2) {
            digitsB = b[1].length
        }

        if(this.action == "multiply") {
            return digitsA + digitsB
        }
        
        return Math.max(digitsA, digitsB)
    }

}
