import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState({});
  const location = useLocation();

  console.log('-- category location --', location);
  useEffect(() => {
    setCategory(location.state.category);
  }, [location]);

  return (
    <div className="w-100">
      <h4>
        <Link to={
          {
            pathname: '/categories',
            state: { request: 'category', categories: location.state.categories }
          }
        }>Equipment Catalog</Link> / {category.name}
      </h4>
      <div className="d-flex">
        {
          category.subcategories && 
          category.subcategories.map((subcategory, index) => {
            return <div className="card" key={index}>
              <div>
                <img src={"./images/category/subcategory/" + subcategory.image} alt={subcategory.name} />
              </div>
              <div className="card-info">{subcategory.name}</div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category;