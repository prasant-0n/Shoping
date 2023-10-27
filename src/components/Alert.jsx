import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useCart } from '../CartContext';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const { cartItemList, isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, removeFromCart, getTotalPrice } = useCart();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={6} sx={{ width: '100%' }}>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    `Thank you for your purchase!\n\nItems:\n${cartItemList}\nTotal: $${getTotalPrice()}`
                </Alert>
            </Snackbar>

        </Stack>
    );
}