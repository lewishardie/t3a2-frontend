import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tankstack/react-query'


export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: () => createUserAccount(user)
    });
};