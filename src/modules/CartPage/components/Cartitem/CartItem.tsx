import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../../core/store/hooks';
import { updateQuantity, removeItem, setMessage } from '../../../../core/store/slices/cartSlice';
import { ICartItem } from '../../../../core/interfaces/ICartItem';
import cartItem from './css/cartItem.module.css';

interface ICartItemProps extends ICartItem {
    index: number;
};

const CartItem: FC<ICartItemProps> = props => {
    const { index, id, title, price, quantity } = props;
    const dispatch = useAppDispatch();
    const [newQuantity, setNewQuantity] = useState(quantity);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewQuantity(+e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateQuantity({ id, quantity: newQuantity }));
        dispatch(setMessage(`The quantity of ${title} has been set to ${newQuantity}`));
    };

    const handleClick = (id: number) => {
        dispatch(removeItem(id));
        dispatch(setMessage(`${title} has been removed from your cart.`));
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{`${price} €`}</td>
            <td>{quantity}</td>
            <td>
                <form className={cartItem.quantityForm} onSubmit={e => handleSubmit(e)}>
                    <input 
                        type="number" 
                        value={newQuantity} 
                        className="form-control" 
                        onChange={e => handleChange(e)}
                    />
                    <button 
                        className="btn btn-primary" 
                        type="submit"
                        disabled={newQuantity < 1}
                    >
                        Update
                    </button>
                </form>
            </td>
            <td>
                <button 
                    className="btn btn-danger"
                    onClick={() => handleClick(id)}
                >
                    &times;
                </button>
            </td>
        </tr>
    );
};

export default CartItem;