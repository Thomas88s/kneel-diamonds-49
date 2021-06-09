import { getStyles, setStyle } from "./dataAccess.js"
import { dispatchOrderBtnEvent  } from "./orderBtnEvent.js"
import { checkOrderState } from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
           setStyle(parseInt(event.target.value))
           if ( checkOrderState() ) {
            dispatchOrderBtnEvent()
        }
    }
}
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}</li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

