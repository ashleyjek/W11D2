import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
    return (
        <>
            <ul className="nav-bar">
                <Link to="/"> Home </Link>
                <Link to="/sample"> Sample </Link>
                <Link to="/inventory"> Inventory </Link>
                <Link to="/report"> Report </Link>
            </ul>
        </>
    )
}


export default NavBar;