import axios from "axios";

const getProductsCategory = async (index) => {
  try {
    const response = await axios.get(`http://127.0.0.1:800/api/v1/products/` + index);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default getProductsCategory;