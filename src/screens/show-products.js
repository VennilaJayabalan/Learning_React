import React, {useState} from "react";
import axios from "axios";

import "../css/products.css"

const ShowProductsScreen = () => {

    const [ShowProducts, updateShowProducts] = useState([])

    const LoadShowProducts = () => {
        const url = "https://dummyjson.com/products";

        axios.get(url)
        .then((response) => {
            updateShowProducts(response.data.products);

        })
        .catch((error) => {
            console.error(error);
        })
    }

    const productListMap = ShowProducts.map((value, index) => {
        return(
            <div className="product-box" key={index}>
                    <img src={value.thumbnail} width={100} />
                    <div style={{ marginLeft: "5px" }}>
                <label>Title :</label>
                    <span>{value.titleName}</span>
                    <br></br>
                    <label>Brand :</label>
                    <span>{value.brand}</span>
                    <br></br>
                    <label>description :</label>
                    <span>{value.description}</span>
                    <br></br>
                    <label>Price :</label>
                    <span>{value.price}</span>

                </div>
                </div>

        )
    })

    return (
        <div>
            <h2>Products Page</h2>
            <button onClick={() =>LoadShowProducts()}> Show Products</button>
            <div className="main-user-container">
                {productListMap}
            </div>
        </div>
    )
}
export default ShowProductsScreen;