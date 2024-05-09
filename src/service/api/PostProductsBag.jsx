import axios from "axios";

const postProductsBag = async (jsonData) => {
    try {
      const response = await axios.post('http://127.0.0.1:800/api/v1/bag/', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export default postProductsBag;