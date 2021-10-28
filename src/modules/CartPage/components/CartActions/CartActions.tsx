import { FC } from 'react';
import { useAppDispatch } from '../../../../core/store/hooks';
import { emptyCart } from '../../../../core/store/slices/cartSlice';

const CartActions: FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(emptyCart());
    };

    return (
        <>
            <hr />
            <button className="btn btn-danger" onClick={() => handleClick()}>Empty Cart</button>
        </>
    );
};

export default CartActions;