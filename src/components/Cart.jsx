import React from 'react'
import { useCart } from 'react-use-cart'
import AddIcon from '@mui/icons-material/Add';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Swal from 'sweetalert2';


const Cart = () => {
    const { isEmpty, totalItems, items, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    if (isEmpty) return <h1 className='text-center'>Your cart is Empty</h1>
    const handleBuyNow = () => {
        // Display a SweetAlert popup
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Successfully purchased all items. Thank you for your purchase.',
        });
        emptyCart();

    };

    return (
        <div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                        <table className="table table-light tablr-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.imgUrl} alt="" style={{ height: '6rem' }} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity {item.quantity}</td>
                                            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <button type="button" class="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><AddIcon /></button>
                                                <button type="button" class="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><RemoveRoundedIcon /></button>
                                                <button type="button" class="btn btn-danger" onClick={() => removeItem(item.id)}><DeleteForeverRoundedIcon /></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                        <h2> Total Price: Rs.{cartTotal}</h2>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary " onClick={() => handleBuyNow()}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Cart
