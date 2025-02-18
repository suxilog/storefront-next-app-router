import { useQuery } from '@tanstack/react-query';
import { GetServerSideEnhancedContext } from '~/helpers/types';
import { useSdk } from '../../sdk/sdk.provider';

export async function prefetchContent(context: GetServerSideEnhancedContext, url: string) {
  const { queryClient, sdk } = context;
  const content = await sdk.magento.getContent({ url });
  queryClient.setQueryData(['content', url], content);

  return content;
}

/**
 * Hook for getting content data
 * @param {string} url Content url
 */

export function useContent<TFields>(url: string) {
  const sdk = useSdk();

  return useQuery(['content', url], () => sdk.magento.getContent<TFields>({ url }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
