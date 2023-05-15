import axios from "axios"

export const fetchAllProductsApi= async () => {
  return axios.get('http://localhost:4545/product');
}
