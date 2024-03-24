

type Error = {
    status: number,
    statusText: string,
    data: any
}
const useErrorHandle = (response: Error) => {

    const {
        status,
        statusText: message,
        data
    } = response || {};

    let error: any = null;

    switch (status) {
        // Unauthorized
        case 401:
            error = new Error('Unauthorized');
            error.response = response;
            return [data, error, message];
        // Not found
        case 404:
            error = new Error(" Not found");
            error.response = response;
            return [data, error, message];
        // Validate
        case 422:
            error = new Error('Validate invalid');
            error.response = response;
            return [data, error, message];
        // Validate
        case 400:
            error = new Error('Bad request');
            error.response = response;
            return [data, error, message];
        // Bad gateway
        case 502:
            error = new Error('Bad Gateway');
            error.response = response;
            return [data, message, error];
        // Service Unavailable
        case 503:
            error = new Error('Service Unavailable');
            error.response = response;
            return [data, error, message];
        // Forbidden
        case 403:
            error = new Error('Forbidden');
            error.response = response;
            return [data, error, message];
        // Server Internal Error
        case 500:
            error = new Error('Server Internal Error');
            error.response = response;
            return [data, error, message];
        default:
            if (!status) {
                error = new Error('err 444: network error');
                error.response = response;
                return [data, error, message];
            }
            if (status >= 200 && status < 500) {
                return [data, error, message];
            }
    }
    error = new Error('err 444: network error');
    error.response = response;

    return [data, error, message];
};

export default useErrorHandle;