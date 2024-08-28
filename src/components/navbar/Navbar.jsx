//Css
import "./navbar.css"
//Modules
import { Link } from "react-router-dom"
import { useContext } from "react"
import PropTypes from "prop-types"
//Components
//Context
import { rootContext } from "../../context/rootContext"

function Navbar() {
    const { cart } = useContext(rootContext);
    let title = "{ The Odin Market }"
    return (
        <nav>
            <div className="nav-container">
                <h2>
                    <Link to={'/'}> {title} </Link>
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
                        <Link to={'cart'}>Cart ({Object.keys(cart).length})</Link>
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
    cart: PropTypes.array,
}

export default Navbar
