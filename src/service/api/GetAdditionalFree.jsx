import axios from "axios";

const getAdditionalFree = async (index) => {
  try {
    const response = await axios.get(`http://127.0.0.1:800/api/v1/additional/` + index);
    return response;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default getAdditionalFree;