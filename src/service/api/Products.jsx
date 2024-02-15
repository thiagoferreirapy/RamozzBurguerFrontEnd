import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:800/todo_outer/products/`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default getProducts;