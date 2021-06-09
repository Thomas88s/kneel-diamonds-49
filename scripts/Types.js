import { getTypes, setType, checkOrderState } from "./dataAccess.js"
import { dispatchOrderBtnEvent  } from "./orderBtnEvent.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
          setType(parseInt(event.target.value))
          if ( checkOrderState() ) {
            dispatchOrderBtnEvent()
          }
        }
    }
)

export const Types = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = types.map(type => {
        return `<li class="typeSelector">
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}