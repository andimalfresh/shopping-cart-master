import React from 'react'

const AppItems = (props) => {

        return(
         <div className="container">
           <div> 
               <form>
                <div>
                <label>Total Price: {props.total}</label>
                </div>
                <label>Quantity:</label>
                <input className="inputField" id="quantityField" onChange={props.handleQuantity}  />
                <label>Products:</label>
                <select value={props.value} onChange={props.handleChange}>
                    <option className="dropOpening" defaultValue>Select An Item.</option>
                    {props.products.map((product) => <option>{product.name}</option>)}
                </select>
                <input type="submit" onClick={props.handleClick} />
            </form>
            </div>
        </div> 
        )
}

export default AppItems