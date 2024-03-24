
import axios, { AxiosRequestConfig } from "axios";
import { DOMAIN, TOKEN } from "../configs/setting";
import RequestType from "../types";

const axiosInstance = axios.create({
    baseURL: DOMAIN
});

const addTokenToRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }
    return config;
};

const handleRequestError = (error: any): Promise<never> => {
    throw error.response?.data || error.message
};

const sendRequest = async <T>(options: RequestType): Promise<T> => {
    const {
        method,
        url,
        data,
        params
    } = options || {};

    const config: AxiosRequestConfig = {
        url,
        method,
        data,
        params
    };

    try {
        const response = await axiosInstance(addTokenToRequest(config));
        return response.data;
    } catch (error) {
        return handleRequestError(error);
    }
};

export const request = async <T>(options: RequestType): Promise<T> => {
    return sendRequest<T>({ ...options });
};