import React, { useEffect, useState } from 'react'
import './Category.css'

function Category({ setselectedOption }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategory()
        {
            let response = await fetch('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
            let result = await response.json()
            let tempCategory = [...result.category_list, {category_id:999,category_name:'View All',category_image:''}]
            setCategories(tempCategory)
        }
        fetchCategory()
    }, [])
    
    const handleCategory = (id) => {
        console.log(id)
        setselectedOption(id)
    }
    
    console.log(categories)

    
    return (
        
        <div className="category">
            {categories.map(category => {
                return <button onClick={() => handleCategory(category.category_id)} key={category.category_id} style={{ backgroundImage: `url(${category.category_image})` }}
                 className="category_box">
                        <div className="category_content">{category.category_name}</div>
                    </button>
                
            })}
        </div>
    )
}

export default Category
