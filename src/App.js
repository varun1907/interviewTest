import React, {useState} from 'react';
import Category from './Category'
import Product from './Product'
function App() {
  const [selectedOption, setselectedOption] = useState(185)
  return (
    <div className="App">
      <Category setselectedOption={setselectedOption} />
      <Product selectedOption={selectedOption} />
    </div>
  );
}

export default App;
