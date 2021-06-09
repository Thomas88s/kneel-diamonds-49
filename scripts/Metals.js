import { getMetals, setMetal } from "./dataAccess.js"
import { dispatchOrderBtnEvent  } from "./orderBtnEvent.js"
import { checkOrderState } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            if ( checkOrderState() ) {
                dispatchOrderBtnEvent()
        }
    }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

