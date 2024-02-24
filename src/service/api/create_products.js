
import axios from "axios";

const creat_products = async (data) => {
  try {
    const response = await axios.post(`http://127.0.0.1:800/todo_outer/create_order/`, data);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default creat_products;