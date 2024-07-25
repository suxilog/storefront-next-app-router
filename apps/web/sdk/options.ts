import type { CreateSdkOptions } from '@vue-storefront/next';
import { env } from 'next-runtime-env';

export function getSdkOptions() {
  const apiUrl = 'http://localhost:8181';
  const ssrApiUrl = 'http://localhost:8181';
  const cdnCacheBustingId = env('NEXT_PUBLIC_ALOKAI_MIDDLEWARE_CDN_CACHE_BUSTING_ID') ?? 'no-cache-busting-id-set';
  const isMultiStoreEnabled = env('NEXT_PUBLIC_MULTISTORE_ENABLED') === 'true';
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_ALOKAI_MIDDLEWARE_API_URL is required to run the app');
  }

  const options: CreateSdkOptions = {
    middleware: {
      apiUrl,
      cdnCacheBustingId,
      ssrApiUrl,
    },
    multistore: {
      enabled: isMultiStoreEnabled,
    },
  };

  return options;
}
