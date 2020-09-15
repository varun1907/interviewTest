import React, {useState, useEffect} from 'react';
import Category from './Category'
import Product from './Product'
function App() {
  const [selectedOption, setselectedOption] = useState(185)
  const [selectedOptionText, setselectedOptionText] = useState('Sales')
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
  return (
    <div className="App">
      <Category setselectedOption={setselectedOption} setselectedOptionText={setselectedOptionText} categories={categories}/>
      <Product setselectedOption={setselectedOption} setselectedOptionText={setselectedOptionText} selectedOption={selectedOption} selectedOptionText={selectedOptionText} categories={categories}/>
    </div>
  );
}

export default App;
