import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error occurred during HTTP request:", error);
      throw error;
    }
  },

  post: async () => {
    throw new Error("Not implemented yet");
  },
  put: async () => {
    throw new Error("Not implemented yet");
  },
  patch: async () => {
    throw new Error("Not implemented yet");
  },
  delete: async () => {
    throw new Error("Not implemented yet");
  },
};
