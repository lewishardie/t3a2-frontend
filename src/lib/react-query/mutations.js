import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserAccount } from '../api/api';

export const useCreateUserAccount = () => {
    return useMutation({
      mutationFn: createUserAccount,
      mutationKey: 'createUser'
    });
  };