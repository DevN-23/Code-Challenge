import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
  const [locations, setLocations] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('../../catalog.json');
      const { data } = await request.json();
      setLocations(data.locations);
    }
    fetchData();

    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);

  return (
    <ul className="menu" ref={ref}>
      <li>
        <p onClick={e => setOpen(!open)}>Select Location</p>
        <ul className={`submenu ${open ? "active" : ""}`}>
          {
            locations.map(location => {
              return <li key={location.dealers_id}>
                <Link to={
                  {
                    pathname: '/categories',
                    state: { request: 'location', location }
                  }
                }>{location.name}</Link>
                <ul className="submenu2">
                  { location.branches.map(branch => {
                    return <li key={branch.branch_id}>
                      <Link to={
                        {
                          pathname: '/categories',
                          state: { request: 'branch', branch }
                        }
                      }>{branch.name}</Link>
                    </li>
                  })}
                </ul>
              </li>
            })
          }
        </ul>
      </li>
    </ul>
  )
}

export default Nav;