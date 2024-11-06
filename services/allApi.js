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


//delete consumer by id
export const deleteConsumerById = async (userId) => {
    return await commonAPI('DELETE', `${BASE_URL}/delete-consumer`, { userId }, '');
};


//get consumerInfo by id
export const getConsumerInfoById = async (id) => {
    console.log(id, '*-*-*-*-*-*/*');
    return await commonAPI('GET', `${BASE_URL}/consumerinfo-byid/${id}`);
};

// Edit consumer information by userId
export const editConsumerInfoApi = async (userId, consumerDetails) => {
    return await commonAPI('PUT', `${BASE_URL}/update-consumer/${userId}`, consumerDetails, '');
};
