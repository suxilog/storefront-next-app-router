import { useQuery } from '@tanstack/react-query';
import { useSdk } from '../../sdk/sdk.provider';

export function useCartShippingMethods() {
  const sdk = useSdk();

  return useQuery(['shippingMethods'], () => sdk.magento.getShippingMethods(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
