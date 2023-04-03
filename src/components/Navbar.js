import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <div className="header-brand-name">
                    <NavLink to="/" exact className="brand-name-link">
                        ArcBoox
                    </NavLink>
                </div>
                <div className="header-left-links">
                    <NavLink
                        to="/reader"
                        exact
                        className="nav-link"
                        activeClassName="active"
                    >
                        <span className="material-symbols-outlined navbar-link-icon">
                            menu_book
                        </span>
                        <span className="navbar-link-span">Reader</span>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        exact
                        className="nav-link"
                        activeClassName="active"
                    >
                        <span className="material-symbols-outlined navbar-link-icon">
                            shelves
                        </span>
                        <span className="navbar-link-span">Bookshelf</span>
                    </NavLink>
                </div>
            </div>
            <div className="navbar-right">
                <NavLink
                    to="/log"
                    exact
                    className="nav-link"
                    activeClassName="active"
                >
                    <span className="material-symbols-outlined navbar-link-icon">logout</span>
                    <span className="navbar-link-span">Log out</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
