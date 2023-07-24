export class Keyboard 
{
    buttons = {}

    constructor() 
    {
        let elements = document.getElementsByClassName("numpad")
        for (let element of elements) {
            if(element.hasAttribute("input")) {
                this.buttons["Numpad" + element.getAttribute("input")] = element
                this.buttons["Digit" + element.getAttribute("input")] = element
            }
        }

        this.buttons["NumpadAdd"] = document.getElementById("plus-icon")
        this.buttons["NumpadSubtract"] = document.getElementById("minus-icon")
        this.buttons["NumpadMultiply"] = document.getElementById("multiply-icon")
        this.buttons["NumpadDivide"] = document.getElementById("divide-icon")
        this.buttons["NumpadDecimal"] = document.getElementById("decimal")
        this.buttons["NumpadEnter"] = document.getElementById("equal")
        this.buttons["Backspace"] = document.getElementById("delete")
        this.buttons["Escape"] = document.getElementById("clear")
        this.buttons["Period"] = document.getElementById("decimal")
        this.buttons["Enter"] = document.getElementById("equal")


        document.addEventListener('keydown', (event) => {
 
            if(event.code in this.buttons) {
                this.buttons[event.code].click()
            }

        })

    }
}
