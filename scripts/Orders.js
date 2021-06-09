import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./dataAccess.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()
const orders = getOrders()

// Remember that the function you pass to find() must return true/false


const buildOrderListItem = (order) => {
    
    const foundMetal = metals.find(
        (metal) => {
             return metal.id === order.metalId     
        }  
    )
     const foundStyle = styles.find(
         (style) => {
              return style.id === order.styleId 
        }    
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        } 
    )
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    let subtotal = foundMetal.price + foundSize.price + foundStyle.price  

    const totalCost = () => {         
            if (foundType.id === 2) {
                subtotal = subtotal * 2;
            } else if (foundType.id === 3) {
                subtotal = subtotal * 2.5
            } else {
                subtotal = subtotal   
            }
            return subtotal
    }
    const finalCost = totalCost()   
             
    const costString = finalCost.toLocaleString("en-US", {
         style: "currency",
         currency: "USD"
        })


  return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

  export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

