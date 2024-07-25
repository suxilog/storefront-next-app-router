import { useQuery } from '@tanstack/react-query';
import { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';
import { GetServerSideEnhancedContext } from '~/helpers/types';
import { useSdk } from '../../sdk/sdk.provider';

export async function prefetchProducts(context: GetServerSideEnhancedContext): Promise<GetProducts> {
  const { queryClient, sdk } = context;
  const products = await sdk.magento.products({});
  // console.log('prefetchProducts', products);
  queryClient.setQueryData(['products'], products);

  return products;
}

/**
 * Hook for getting products catalog data
 */
export function useProducts() {
  const sdk = useSdk();
  // console.log('useProducts');
  return useQuery(['products'], () => sdk.magento.products({}), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
