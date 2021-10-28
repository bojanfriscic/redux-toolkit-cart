import { FC, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { Product } from '../Product';

const Products: FC = () => {
    const context = useContext(ProductsContext);
    const { data, isLoading, isError } = context;

    const renderLoading = isLoading && <p>Loading products...</p>;
    const renderError = !isLoading && isError && <p>There was an error, please try again</p>;

    const renderProducts = data && data.map(product => <Product key={product.id} {...product} />)

    return (
        <section>
            <div className="container">
                <h1 className="mb-4">Products</h1>
                {renderLoading}
                {renderError}
                <div className="row gx-4 gy-4">
                    {renderProducts}
                </div>
            </div>
        </section>
    );
};

export default Products;