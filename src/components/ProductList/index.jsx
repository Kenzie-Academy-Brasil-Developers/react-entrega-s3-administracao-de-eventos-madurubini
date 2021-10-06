import axios from "axios";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/products";
import Product from "../Product";

const ProductList = () => {
  const { product, setProduct } = useContext(ProductContext);

  useEffect(
    () =>
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => console.log(err)),
    [setProduct]
  );

  return (
    <ul>
      {product.map((item) => (
        <Product item={item} isRemovable={false}></Product>
      ))}
    </ul>
  );
};

export default ProductList;
