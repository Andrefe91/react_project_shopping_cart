//Css
import "./categorylink.css"
//Component
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function CategoryLink({category}) {
    // Capitalize the first letter of the category name
    let categoryTitle = [category[0].toUpperCase(), category.slice(1)]

    return (
        <Link className="category-link" to={`/category/${category}`}>{categoryTitle}</Link>
    )
}

CategoryLink.propTypes = {
    category: PropTypes.string.isRequired
}

export default CategoryLink
