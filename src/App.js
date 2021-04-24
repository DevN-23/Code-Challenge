import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import HomeComponent from './components/Home';
import CategoriesComponent from './components/Categories';
import CategoryComponent from './components/Category';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="container">
            <div className="brand">
              <Link to="/">RETAIL MANAGEMENT SYSTEM</Link>
            </div>
            <div className="header-links">
              <Nav />
              {/* <Dropdown /> */}
            </div>
          </div>
        </header>
        <main className="main">
          <div className="container">
            <Route path="/" exact={true} component={HomeComponent} />
            <Route path="/categories" exact={true} component={CategoriesComponent} />
            <Route path="/category" exact={true} component={CategoryComponent} />
          </div>
        </main>
        <footer className="footer">
          @2021
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
