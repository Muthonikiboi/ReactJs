import Food from "./components/foods/food";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";
import { PrimeReactProvider } from 'primereact/api';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
         <div className="p-0 m-0 h-dvh w-full box-border bg-slate-200">
            <Food />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
      </PrimeReactProvider>
    </QueryClientProvider>
  )
}
