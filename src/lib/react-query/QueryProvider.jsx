import { QueryClient, QueryClientProivder } from '@tanstack/react-query'
import { ReactQueryDevTools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const QueryProivder = ({ children }) => {
    return (
        <QueryClientProivder client={queryClient}>
            {children}
            <ReactQueryDevTools initialIsOpen={false}/>
        </QueryClientProivder>
    );
};