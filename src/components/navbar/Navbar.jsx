import "./navbar.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Navbar({cartQuantity}) {
    return (
        <nav>
            <div className="nav-container">
                <h2>
                    <Link to={'/'}>The Odin Market</Link>
                </h2>

                <div id="search-container">
                    <form id="search-form" role="search">
                        <input type="search" name="q" id="q" aria-label="search product" placeholder="Search"/>
                        <div className="search-spinner" aria-hidden hidden={true}></div>
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                </div>

                <div className="nav-links">

                    <div className="nav-button">
                        <Link to={'cart'}>Cart ({cartQuantity})</Link>
                    </div>

                    <div className="nav-button">
                        <Link to={'about'}>About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    cartQuantity: PropTypes.number.isRequired,
}

export default Navbar
