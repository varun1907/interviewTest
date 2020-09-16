import React, {useState, useEffect} from 'react'
import './Product.css'
import ProductCard from './ProductCard'
import CategotyPopup from './CategoryPopup'
import Button from '@material-ui/core/Button';

function Product({ selectedOption, selectedOptionText, setselectedOptionText ,categories, setselectedOption }) {

    const [productList, setProductList] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        async function fetchProduct()
        {
            if(selectedOption === 999 || selectedOption === 1000)
            {
                alert('View all clicked')
                return;
            }
            let response = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${selectedOption}`)
            let result = await response.json()
            setProductList(result.products)
            setShowAll(false)
        }
        fetchProduct()
    }, [selectedOption])
    // console.log(productList)

    const handleView = (e) => {
        e.preventDefault();
        setShowAll(!showAll)
    }
    return (
        <>
        <div className="product">
            {productList.map((product, index) => {
                if((showAll == false && productList.length > 3 && index < 3) || showAll==true)
                return <ProductCard totalProduct={productList.length} key={product.id} product={product}/>
            }) }

            
        </div>
        
        <div className="product_footer">
            <div className="product_footer_for">
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <p style={{color:'gray',fontSize:10,paddingRight:10}}>Showing for</p>
            <p style={{fontSize:20,}}>{selectedOptionText}</p>
            </div>
            <div style={{textAlign:'right'}}>
            {/* <p style={{color:'gray',fontSize:10,paddingRight:10}}>Change</p> */}
            <CategotyPopup selectedOptionText={selectedOptionText} selectedOption={selectedOption} setselectedOption={setselectedOption} setselectedOptionText={setselectedOptionText} categories={categories}/>
            </div>
            </div>
            
        { productList.length > 3 && showAll ==false
            ? 
            <Button onClick={handleView}>View More</Button>
                :
            showAll ? <Button onClick={handleView}>View Less</Button> : null
        }

        </div>
        
        
        </>
    )
}

export default Product
