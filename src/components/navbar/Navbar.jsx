import "./navbar.css"

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <h2>The Odin Market</h2>

                <div id="search-container">
                    <form id="search-form" role="search">
                        <input type="search" name="q" id="q" aria-label="search product" placeholder="Search"/>
                        <div className="search-spinner" aria-hidden hidden={true}></div>
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                </div>

                <div className="nav-links">

                    <div className="nav-button">
                        Cart
                    </div>

                    <div className="nav-button">
                        About
                    </div>
                </div>
            </div>
        </nav>
    )
}
