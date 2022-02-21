import axios from "axios";

const baseUrl = "https://6213fd6889fad53b1f07c522.mockapi.io/api/v1/"; //contacts

axios.defaults.baseURL = baseUrl;

export const getContactsApi = () => {
  return axios
    .get("contacts")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
