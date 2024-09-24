import requester from "./requester";


const baseUrl = 'http://localhost:7082/api/customers';


const getAllCustomers = () => requester.get(baseUrl);

const getCustomerById = (id: string) => requester.get(`${baseUrl}/${id}`);

const createAccount = (customerId: string, data: any) => 
    requester.post(`${baseUrl}/${customerId}/create-account`, data);


const createCustomer = (data : any) => requester.post(baseUrl, data);

const updateCustomer = (id : string, data : any) =>
    requester.put(`${baseUrl}/${id}`, data);

const deleteCustomer = (id : string) => requester.del(`${baseUrl}/${id}`);


export default {
    getAllCustomers,
    getCustomerById,
    createAccount,
    createCustomer,
    updateCustomer,
    deleteCustomer
}
