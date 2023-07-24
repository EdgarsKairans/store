import { useEffect, useState } from "react";
import useFakeStoreApi from "../../services/FakeStoreApi";

import RenderCards from "../renderCards/RenderCards";
import Spinner from "../spinner/Spinner";

const Electronics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const { getProductsFromCategory } = useFakeStoreApi();
  const categoryName = "electronics";

  useEffect(() => {
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

  const data = RenderCards(productList, "Electronics");

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

export default Electronics;