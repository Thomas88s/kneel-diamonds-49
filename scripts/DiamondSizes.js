import { getSizes, setSize } from "./dataAccess.js"
import { dispatchOrderBtnEvent  } from "./orderBtnEvent.js"
import { checkOrderState } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
          setSize(parseInt(event.target.value))
          if ( checkOrderState() ) {
            dispatchOrderBtnEvent()
        }
    }
}
)
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

