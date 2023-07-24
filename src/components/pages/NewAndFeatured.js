import { useEffect, useState } from 'react';
import useFakeStoreApi from "../../services/FakeStoreApi";
import RenderCards from "../renderCards/RenderCards";
import Spinner from "../spinner/Spinner";

const NewAndFeatured = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const { getAllProducts } = useFakeStoreApi();


  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllProducts()
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
  }

  const data = RenderCards(productList, "New & Featured");

  return (
    <>
      {isLoading ? ( 
        <Spinner/>
      ) : (
        data
      )}
    </>
  )
}

export default NewAndFeatured;