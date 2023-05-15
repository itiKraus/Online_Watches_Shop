import axios from 'axios'

export const fetchAllOrdersApi= async () => {
    return axios.get('http://localhost:4545/order');
}  
export const AddOrderToServerApi= async (ord) => {
    return axios.post('http://localhost:4545/order',ord);
}  
export const  deleteOrderFromServer=async (ord)=>{
 return axios.delete("http://localhost:4545/order", ord); 
}