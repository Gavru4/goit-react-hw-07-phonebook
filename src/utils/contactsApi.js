import axios from "axios";

const baseUrl = "https://6213bd6f89fad53b1fffc912.mockapi.io/api/v1/"; //contacts

axios.defaults.baseURL = baseUrl;

export const getContacts = () => {
  return axios
    .get("contacts")
    .then((res) => console.log(res))
    .catch((error) => {
      throw error;
    });
};
