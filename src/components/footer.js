import './footer.css';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>© Heckys Sub Shop {year}</p>
        </div>
    );
}

export default Footer;