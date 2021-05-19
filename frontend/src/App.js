

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">React E-Commerce Project</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/p1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html"><h2>Generic Shirt</h2></a>
              <div className="rating">
                <span>
                  <i className="fa fa-star" />
                </span>
                <span>
                  <i className="fa fa-star" />
                </span>
                <span>
                  <i className="fa fa-star" />
                </span>
                <span>
                  <i className="fa fa-star" />
                </span>
                <span>
                  <i className="fa fa-star" />
                </span>
              </div>
              <div className="price">Rs.1000</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
