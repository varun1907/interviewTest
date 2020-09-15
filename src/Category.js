import React, { useEffect, useState } from 'react'
import './Category.css'

function Category({ setselectedOption, setselectedOptionText, categories }) {

   
    
    const handleCategory = (id, name) => {
        console.log(id)
        setselectedOption(id)
        setselectedOptionText(name)
    }
    
    console.log(categories)

    
    return (
        
        <div className="category">
            {categories.map(category => {
                return <button onClick={() => handleCategory(category.category_id, category.category_name)} key={category.category_id} style={{ backgroundImage: `url(${category.category_image})` }}
                 className="category_box">
                        <div className="category_content">{category.category_name}</div>
                    </button>
                
            })}
        </div>
    )
}

export default Category
