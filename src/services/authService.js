import axios from "axios";
import config from "../config/config";
const authService = {
  login: async (data) => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/auth/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default authService;
