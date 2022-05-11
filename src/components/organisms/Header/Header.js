import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header>
            <div className='col-left'>
                <Link className='logo' to="/">Op Admin</Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/logs">Logs</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='col-right'>Login</div>
        </header>
    );
}
export default Header;