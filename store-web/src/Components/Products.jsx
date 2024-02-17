import classes from "../Products.css"
import ProductCard from "./ProductCard"
import { productData } from "../data"
const Products = () => {
    const items = productData.map((product) => {
        return (
            <ProductCard key = {product.id} title = {product.title} description = {product.description} imageUrl = {product.imageUrl}/>
        )
    })
    return(
        <div>
            <h1 className="productHead">
                Products
            </h1>
            <div className = "cardPosition">
                {items}
            </div>
        </div>
    )
}
export default Products