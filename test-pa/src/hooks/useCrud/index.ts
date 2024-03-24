import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import Notification from '../../components/notification';
import { useLoading } from '../../contexts/loadingContext';

const useCrud = (options: any) => {

    const {
        mutationKey,
        mutaFn,
        params,
        url,
        schema,
        ...rest
    } = options || {};

    const navigate = useNavigate();

    const {
        data,
        error,
        isError,
        isIdle,
        isPaused,
        isSuccess,
        failureCount,
        isLoading,
        mutate,
        mutateAsync,
        reset,
        status,
        variables,
    } = useMutation({
        ...rest,
        mutationFn: (data) => mutaFn(data),
        mutationKey: [mutationKey, params],
        onError: async (error) => {
            const {
                message,
                success,
                statusCode
            } = error as any || {};

            if (message === "Unverified account" && statusCode === 401 && success === false) {
                Notification({
                    message: message || error,
                    type: 'error'
                });
                await navigate("/authentication/otp")
            } else {
                Notification({
                    message: message || error,
                    type: 'error'
                });
            }

        },
        onSuccess(data, variables, context) {
            const {
                data: _data,
                message,
                success,
                statusCode
            } = data as any || {};

            if (statusCode === 200 && success === true && _data) Notification({
                message: message,
                type: 'success'
            });
        },
    });

    return {
        data,
        error,
        isError,
        isIdle,
        isPaused,
        isSuccess,
        failureCount,
        mutate,
        mutateAsync,
        reset,
        status,
        variables,
        isLoading
    };
}

export default useCrud;