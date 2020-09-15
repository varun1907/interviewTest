import React from 'react'
import './ProductCard.css'
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GradeIcon from '@material-ui/icons/Grade';
function ProductCard({ product }) {
    return (
        <>
        <div className="productCard">
            <div className="productCard_image">
                <img style={{width:'100%'}} className="" src={`${product.image_urls.x520}`} alt={product.name}></img>
            </div>
            <div className="productCard_info">
                {
                    product.rating
                    ?
                    <div className="productCard_rating">
                        <span style={{fontSize:15}}>{product.rating}</span>
                        <GradeIcon style={{ fontSize: 15,color:'gray' }}/>
                    </div>
                    :
                    null

                }
                
                <p className="productCard_title">{product.name}</p>
                <p style={{color:'gray',fontSize:'12px'}}>({product.weight} {product.weight_unit})</p>
    <p className="productCard_price">$ {product.price}<span style={{color:'gray',paddingLeft:7}}><small style={{textDecoration:'line-through'}}>$ {product.final_price}</small></span></p>
                
                <div className="productCard_button">
    <Button style={product.is_in_stock ? {backgroundColor:'#4fcf64'} : {backgroundColor:'gray'}} variant="contained">{product.is_in_stock?'ADD TO CART':'OUT OF STOCK'}</Button>

                <YouTubeIcon disabled/>
                </div>
            </div>
            
        </div>
        <hr className="productCard_hr"/>
        </>
    )
}

export default ProductCard
