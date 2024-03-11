"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { cache } from "react";
// import { HydrationBoundaryProps as RQHydrate, HydrateOptions } from "@tanstack/react-query";

// function Hydrate(props: HydrateOptions) {
//   return <RQHydrate {...props} />;
// }

// export default Hydrate;
type Props = {
  children: React.ReactNode;
};
export function AppQueryClientProvider({ children }: Props) {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
