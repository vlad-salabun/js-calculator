import "./css/body.css";
import "./css/header.css";
import "./css/display.css";
import "./css/calculator.css";
import "./css/buttons.css";

import { View } from "./view";
import { Keyboard } from "./keyboard";
import { Calculator } from "./calculator";

class Main
{
    constructor() 
    {
        this.calculator = new Calculator
        this.view = new View(this.calculator)
        this.view.render()
        this.keyboard = new Keyboard

        document.body.addEventListener('click', (event) => {  

            // Click on numbers:
            if (event.target.classList.contains('input-button')) {

                if(window.navigator.vibrate) {
                    window.navigator.vibrate(50)
                }

                let input = event.target.getAttribute("input")

                if(input == '.') {
                    this.calculator.addComma()
                } else {
                    this.calculator.add(input)
                }  
            }
        
            // Click on control button:
            if (event.target.classList.contains('change-operation')) {

                if(window.navigator.vibrate) {
                    window.navigator.vibrate(50)
                }
                let button = event.target.getAttribute("button")
                
                if(button == "clear") {
                    this.calculator.clear()
                } else if(["plus","minus","multiply", "divide"].includes(button)) {
                    this.calculator.readInput(button)
                } else if(button == "equal") {
                    this.calculator.equal()
                } else if(button == "delete") {
                    this.calculator.delete()
                }
            }

            this.view.render()

        }, false)
    }

}

let main = new Main