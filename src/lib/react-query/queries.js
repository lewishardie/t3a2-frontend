import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

// import { logInUser } from '../api/api'

// // ==========

// export const useLogInUser = () => {
//     return useMutation({
//         mutationFn: (loginData) =>
//         logInUser(loginData.username, loginData.password)
//     })
// }

export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: "",
        queryFn: "",
    });
}
