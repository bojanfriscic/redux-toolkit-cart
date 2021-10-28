import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../core/store/hooks';
import { ROUTES } from '../../../../core/enums/routes';
import { CartItem } from '../Cartitem';
import { CartActions } from '../CartActions';

const Cart: FC = () => {
    const items = useAppSelector(state => state.cart.data);
    const message = useAppSelector(state => state.cart.message);

    const renderThead = (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Change Quantity</th>
                <th scope="col">Remove</th>
            </tr>
        </thead>
    );

    const renderTbody = items.length > 0 && (
        <tbody>
            {items.map((item, index) => <CartItem key={index} { ...item } index={index} />)}
        </tbody>
    );

    const renderCartContent = items.length > 0 && (
        <>
            <table className="table table-striped">
                {renderThead}
                {renderTbody}
            </table>
            <CartActions />
        </>
    );

    const renderEmptyCart = items.length === 0 && (
        <p className="alert alert-info">
            Your cart is empty. Return to the <Link to={ROUTES.HOME} className="alert-link">shop</Link>?
        </p>
    );

    const renderMessage = message && (
        <p className="alert alert-warning">{message}</p>
    );

    return (
        <>
            {renderCartContent}
            {renderEmptyCart}
            {renderMessage}
        </>
    );
};

export default Cart;