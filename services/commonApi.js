import axios from "axios";

export const commonAPI = async (httpRequestType, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequestType,
        url: url,
        data: reqBody,
        header: reqHeader ? reqHeader : { 'Content-Type': 'application/json' }
    }
    return await axios(reqConfig).then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })
}