import { PRODUCTS } from "./Products";
import { Product } from "./product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="container py-5">
      <h1 className="title pb-5">
        <center>Products</center>
      </h1>
      <button
        class="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter by 
      </button>
      <div class="row">
        <div className="productGrid">
          {" "}
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
