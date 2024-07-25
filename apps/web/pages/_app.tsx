import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createSdk } from '@vue-storefront/next';
import '~/styles/main.scss';
import { getSdkConfig } from '../sdk/config';
import { getSdkOptions } from '../sdk/options';
import { SdkProvider } from '../sdk/sdk.provider';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            retry: 3,
            retryDelay: (failureCount) => 500 * 2 ** failureCount,
          },
        },
      }),
  );
  const { getSdk } = createSdk(getSdkOptions(), getSdkConfig());

  return (
    <QueryClientProvider client={queryClient}>
      <SdkProvider sdk={getSdk()}>
        <Component {...pageProps} />
      </SdkProvider>
    </QueryClientProvider>
  );
}
