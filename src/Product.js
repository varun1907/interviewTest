import React, {useState, useEffect} from 'react'
import './Product.css'
import ProductCard from './ProductCard'

function Product({ selectedOption }) {

    const [productList, setProductList] = useState([])
    useEffect(() => {
        async function fetchProduct()
        {
            let response = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${selectedOption}`)
            let result = await response.json()
            setProductList(result.products)
        }
        fetchProduct()
    }, [selectedOption])
    console.log(productList)
    return (
        <>
        <div className="product">
            {productList.map(product => {
                return <ProductCard totalProduct={productList.length} key={product.id} product={product}/>
            }) }

            
        </div>
        { productList.length > 3 
            ? 
                <div>view more</div>
            : null
            }
        </>
    )
}

export default Product
