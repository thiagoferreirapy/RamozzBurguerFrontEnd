import axios from "axios";

const GetProductsbag = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:800/api/v1/bag/`);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default GetProductsbag;