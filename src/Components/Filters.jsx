import { useState } from 'react';
import './Filters.css';
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Precio mínimo:</label>
        <input
          type="range"
          id="price"
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoria:</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="groceries">Comestibles</option>
          <option value="furniture">Muebles</option>
          <option value="fragrances">Fragancias</option>
          <option value="beauty">Belleza</option>
        </select>

      </div>
    </section>
  );

}