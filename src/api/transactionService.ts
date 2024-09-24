import requester from "./requester";


const baseUrl = 'http://localhost:7082/api/transactions';


const getAllTransactions = () => requester.get(baseUrl);

const getTransactionById = (id : Number) => requester.get(`${baseUrl}/${id}`);

const getTransactionsByAccountId = (accountId : String) => 
    requester.get(`${baseUrl}/by-account/${accountId}`);

const getTransactionsByDate = (accountId : String, startDate : Date, endDate : Date) =>
    requester.get(`${baseUrl}/by-date`, { accountId, startDate, endDate });


const getTransactionsByAmount = (accountId : String, minAmount : Number, maxAmount : Number) =>
    requester.get(`${baseUrl}/by-amount`, { accountId, minAmount, maxAmount });


const getIncomingTransactions = (accountId : String) => requester.get(`${baseUrl}/incoming/${accountId}`);

const getOutgoingTransactions = (accountId : String) => requester.get(`${baseUrl}/outgoing/${accountId}`);

const createTransaction = (data : any) => requester.post(baseUrl, data);

const deleteTransaction = (id : Number) => requester.del(`${baseUrl}/${id}`);




export default {
    getAllTransactions,
    getTransactionById,
    getTransactionsByAccountId,
    getTransactionsByDate,
    getTransactionsByAmount,
    getIncomingTransactions,
    getOutgoingTransactions,
    createTransaction,
    deleteTransaction
}


