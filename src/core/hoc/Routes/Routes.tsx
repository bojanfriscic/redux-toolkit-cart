import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { HomePage } from '../../../modules/HomePage';
import { CartPage } from '../../../modules/CartPage';

const Routes: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path={ROUTES.HOME}
                render={() => <HomePage />}
            />
            <Route
                exact
                path={ROUTES.CART}
                render={() => <CartPage />}
            />
            <Route render={() => <Redirect to={ROUTES.HOME} />} />
        </Switch>
    )
};

export default Routes;