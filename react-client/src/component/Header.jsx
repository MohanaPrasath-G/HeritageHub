import { Link } from "react-router-dom";

function Header() {

    const toggleMenu = () => {
        const menuToggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    };

    return (
        <>
            <header>
                <a href="#" className="logo">HERITAGE HUB</a>
                <div className="toggle" onClick={toggleMenu}></div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="#heritage">Posts</Link></li>
                    <li><Link to="#culture">Gallery</Link></li>
                    <li><Link to="/login">User</Link></li>
                </ul>
            </header>
        </>
    )
}
export default Header;