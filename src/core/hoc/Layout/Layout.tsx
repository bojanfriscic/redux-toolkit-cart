import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from '../Routes';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Layout: FC = () => {
    return (
        <Router>
            <Header />
            <main className="bg-light py-5">
                <Routes />
            </main>
            <Footer />
        </Router>
    )
};

export default Layout;