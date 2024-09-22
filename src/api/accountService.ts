import requester from "./requester";

const baseUrl = 'http://localhost:5000/api/accounts';


const getAllAccounts = () => requester.get(baseUrl);

const getAccountById = (accountId: string) => requester.get(`${baseUrl}/${accountId}`);

const deleteAccount = (accountId: string, customerId: string) =>
    requester.del(`${baseUrl}/${accountId}/${customerId}`, { accountId, customerId });


export default {
    getAllAccounts,
    getAccountById,
    deleteAccount
}