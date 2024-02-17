import classes from "../Products.css"

const ProductCard = (props) => {
    const imageUrl = props.imageUrl
    const title = props.title
    const description = props.description
    return(
        <div className = "card">
            <img src = {imageUrl} className = "productImage"></img>
            <h1>{title}</h1>
            <p className="phoneDescription">{description}</p>
        </div>
    )
}
export default ProductCard