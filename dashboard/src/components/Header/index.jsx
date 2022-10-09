import './styles.css';
import Logo from '../../assets/logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <h1>DASHBOARD</h1>
        </header>
    )
};

export default Header;