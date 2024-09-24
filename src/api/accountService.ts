import requester from "./requester";

const baseUrl = 'http://localhost:7082/api/accounts';


const getAllAccounts = () => requester.get(baseUrl);

const getAccountById = (id: string) => requester.get(`${baseUrl}/${id}`);

const deleteAccount = (accountId: string, customerId: string) =>
    requester.del(`${baseUrl}/${accountId}/${customerId}`, { accountId, customerId });


export default {
    getAllAccounts,
    getAccountById,
    deleteAccount
}
