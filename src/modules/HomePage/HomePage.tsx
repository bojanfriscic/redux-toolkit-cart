import { FC } from 'react';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../core/enums/queryKeys';
import { api } from '../../core/api';
import { ProductsContext } from './context/ProductsContext';
import { Products } from './components/Products';

const HomePage: FC = () => {
    const { data, isLoading, isError } = useQuery(QUERY_KEYS.PRODUCTS, api.products.get);

    return (
        <ProductsContext.Provider value={{ data, isLoading, isError }}>
            <Products />
        </ProductsContext.Provider>
    );
};

export default HomePage;