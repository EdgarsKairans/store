import { useEffect, useState } from "react";
import useFakeStoreApi from "../../services/FakeStoreApi";

import RenderCards from "../renderCards/RenderCards";
import Spinner from "../spinner/Spinner";

const Womensclothing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const { getProductsFromCategory } = useFakeStoreApi();
  const categoryName = "women's clothing";

  useEffect(() => {
        onRequest(categoryName);
    onRequest(categoryName);
  }, []);

  const onRequest = (categoryName) => {
    setIsLoading(true); 
    getProductsFromCategory(categoryName)
      .then((products) => {
        onProductListLoaded(products);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setIsLoading(false); 
      });
  };

  const onProductListLoaded = (products) => {
    setProductList(products);
    console.log(products);
  };

  const data = RenderCards(productList, "Women's clothing");

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        data
      )}
    </>
  );
};

export default Womensclothing;