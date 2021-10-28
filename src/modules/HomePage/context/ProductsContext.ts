import { createContext } from 'react';
import { IProduct } from '../../../core/interfaces/IProduct';

interface IProductsContext {
    data: Array<IProduct> | undefined;
    isLoading: boolean;
    isError: boolean;
};

const initialProductsContext: IProductsContext = {
    data: [],
    isLoading: false,
    isError: false
};

const ProductsContext = createContext<IProductsContext>(initialProductsContext);

export { ProductsContext };