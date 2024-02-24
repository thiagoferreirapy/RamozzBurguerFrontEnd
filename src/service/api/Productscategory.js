import axios from "axios";

const getProductsCategory = async (index) => {
  try {
    const response = await axios.get(`http://127.0.0.1:800/todo_outer/get_category/` + index);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default getProductsCategory;