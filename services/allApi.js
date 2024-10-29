import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonApi"

//register
export const registerApi = async (userDetails) => {
    return await commonAPI('POST', `${BASE_URL}/user/register`, userDetails, '')
}

//consumer info adding by admin
export const consumerInfoApi = async (consumerDetails) => {
    return await commonAPI('POST', `${BASE_URL}/consumer-info`, consumerDetails, '')
}

//login
export const loginApi = async (loginDetails) => {
    return await commonAPI('POST', `${BASE_URL}/user/login`, loginDetails, '')
}

// all consumers
export const allConsumersApi = async () => {
    return await commonAPI('GET', `${BASE_URL}/all-consumers`, '', '');
};

// create new connection
export const createNewConnectionApi = async (consumerDetails) => {
    return await commonAPI('POST', `${BASE_URL}/new-connection`, consumerDetails, '')
}

//view all new connection 

export const viewAllNewConnectionsApi = async()=>{
    return await commonAPI('GET', `${BASE_URL}/view-new-connection`, '', '');
}

