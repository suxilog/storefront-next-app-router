import { useQuery } from '@tanstack/react-query';
import { useSdk } from '../../sdk/sdk.provider';

export function useCart() {
  const sdk = useSdk();

  return useQuery(['cart'], () => sdk.magento.cart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
