import React from 'react'

const CartItem = (props) => {
    const cartList = props.cartItemsList.map(itemPrint => {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div class="col-md-8">{itemPrint.product.name}</div>
                    <div class="col-md-2">{itemPrint.product.priceInCents}</div>
                    <div class="col-md-2">{itemPrint.quantity}</div>
                </div>
            </div>
        )

    })

    return (
        <div className="collection-item">
            {cartList}
        </div>
    )
}
export default CartItem