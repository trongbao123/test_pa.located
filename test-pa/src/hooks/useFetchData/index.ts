
import { useQuery, useQueryClient } from 'react-query';
import Notification from '../../components/notification';


const useFetchData = (options: any) => {
    const {
        queryKey,
        fetchData,
        params,
        ...rest
    } = options || {};

    const {
        data,
        dataUpdatedAt,
        error,
        errorUpdateCount,
        errorUpdatedAt,
        failureCount,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        remove,
        status,
    } = useQuery(
        [queryKey, params],
        fetchData,
        {
            onError: (error) => {
                const {
                    message,
                    success,
                    statusCode
                } = error as any || {};

                Notification({
                    message: message || error,
                    type: 'error'
                });
            },
            retry: false,
            cacheTime: 60 * 1000,
            staleTime: 55 * 1000,
            ...rest
        },
    );

    return {
        data,
        dataUpdatedAt,
        error,
        errorUpdateCount,
        errorUpdatedAt,
        failureCount,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        remove,
        status,
    };
};

export default useFetchData;