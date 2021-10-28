import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';

const Header: FC = () => {
    return (
        <header>
            <nav className="navbar navbar-nav navbar-dark bg-dark">
                <div className="container">
                    <Link to={ROUTES.HOME} className="navbar-brand">
                        Shopper
                    </Link>
                    <Link to={ROUTES.CART} className="btn btn-light">Cart</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;