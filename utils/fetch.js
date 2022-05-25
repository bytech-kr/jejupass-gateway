/**
 * Axios 유틸
 * @author Hyun-Joo
 */
import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        // if(token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        console.debug('request ===> ', config.headers);
        return config;
    },
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (config) => {
        console.debug('response ===> ', config.status);
        return config;
    },
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
);

const axiosUtil = Object.freeze({
    get: (url, param) => {
        return axiosInstance
            .get(url, { params: param, withCredentials: true })
            .then((res) => {
                console.debug(res);
                if(res.data) return res.data;
            })
            .catch((error) => {
                console.dir(error);
                if(error.response) return error.response;
            });
    },
    post: (url, param) => {
        return axiosInstance
            .post(url, param, {
                withCredentials: true
            })
            .then((res) => {
                console.debug(res);
                if(res.data) return res.data;
            })
            .catch((error) => {
                console.dir(error);
                if(error.response) return error.response;
            })
    },
    fileUpload: (url, formData) => {
        return axiosInstance
            .post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            .then((res) => {
                console.debug(res);
                if(res.data) return res.data;
            })
            .catch((error) => {
                console.dir(error);
                if(error.response) return error.response;
            })
    }
});

export default axiosUtil;