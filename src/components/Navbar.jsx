import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCart } from 'react-use-cart';


const Navbar = () => {
    const [user, setUser] = useState(null); // Set initial state as null
    const { totalItems } = useCart();

    const handleProfileClick = () => {
        if (user) {
            setUser(null); // Log out
        } else {
            setUser({ id: 1, name: 'John Doe' }); // Log in with user details
        }
    };
    return (
        <AppBar position="static" style={{ marginBottom: "20px" }}>
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Shopping App
                </Typography>
                <div style={{ marginLeft: 'auto' }}>
                    <IconButton component={Link} to="/cart" color="inherit">
                        <Badge badgeContent={totalItems} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton component={Link} to="/wishlist" color="inherit">
                        <Badge badgeContent={3} color="error">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleProfileClick}>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
