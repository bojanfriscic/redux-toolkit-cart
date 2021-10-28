import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../../core/store/hooks';
import { addItem } from '../../../../core/store/slices/cartSlice';
import { IProduct } from '../../../../core/interfaces/IProduct';

const Product: FC<IProduct> = props => {
    const { title, price, category, image } = props;
    const [quantity, setQuantity] = useState(1);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsInvalid(false);
        setIsAdded(false);

        if (quantity > 0) {
            dispatch(addItem({ ...props, quantity }));
            setIsAdded(true);
        } else {
            setIsInvalid(true);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(+e.target.value);
    };

    const renderError = isInvalid && <p className="alert alert-danger mt-3">Quantity must be larger than 0</p>;
    const renderAdded = isAdded 
        && <p className="alert alert-success mt-3">{`${title} (${quantity}) added to cart`}</p>

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <article className="card p-3">
                <img 
                    className="card-img-top" 
                    src={image}
                    alt={title}
                />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-text">{`${price}€`}</div>
                    <span className="card-text">{category}</span>
                    <hr />
                    <form onSubmit={e => handleSubmit(e)}>
                        <input 
                            type="number" 
                            name="quantity" 
                            className="form-control"
                            value={quantity}
                            onChange={e => handleChange(e)}
                        />
                        <button 
                            className="btn btn-primary mt-3"
                            type="submit"
                        >
                            Add to Cart
                        </button>
                    </form>
                    {renderError}
                    {renderAdded}
                </div>
            </article>
        </div>
    );
};

export default Product;