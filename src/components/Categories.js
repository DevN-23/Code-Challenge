import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    switch (location.state.request) {
      case 'branch':
        setCategories(location.state.branch.categories);
        break;
      case 'category':
        setCategories(location.state.categories);
        break;
      default:
        const _cate = [];
        location.state.location.branches.forEach(branch => {
          _cate.push(...branch.categories);
        });
        setCategories(_cate);
        break;
    }
  }, [location]);

  return (
    <div className="w-100">
      <h4>Equipment Catalog</h4>
      <div className="d-flex">
        {
          categories.map((category, index) => {
            return <Link className="card" to={
              {
                pathname: '/category',
                state: { categories, category }
              }
            }
            key={index} >
              <div>
                <img src={"./images/category/" + category.image} alt={category.name} />
              </div>
              <div className="card-info">{category.name}</div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Categories;