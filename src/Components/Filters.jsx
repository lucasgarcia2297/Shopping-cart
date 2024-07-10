import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
  const { filters, setFilters } = useFilters();
  
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria:</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
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