import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../core/store/hooks';
import { setMessage } from '../../core/store/slices/cartSlice';
import { Cart } from './components/Cart';

const CartPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setMessage(''));
    }, [dispatch]);

    return (
        <section>
            <div className="container">
                <h1 className="mb-4">Cart</h1>
                <Cart />
            </div>
        </section>
    );
};

export default CartPage;