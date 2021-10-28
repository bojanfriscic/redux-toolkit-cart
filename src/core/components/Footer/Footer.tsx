import { FC } from 'react';

const Footer: FC = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="text-muted py-5">
            <div className="container">
                Copyright &copy; {date}
            </div>
        </footer>
    )
};

export default Footer;