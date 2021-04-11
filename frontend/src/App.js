import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/"> Amazona </a>
        </div>
        <div>
          <a href="/cart"> Cart </a> <a href="/signin"> Sign In </a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserve </footer>
    </div>
  );
}

export default App;
