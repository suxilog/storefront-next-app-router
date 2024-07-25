import { Endpoints } from '@vue-storefront/magento-api';
import { defineSdkConfig } from '@vue-storefront/next';

export function getSdkConfig() {
  return defineSdkConfig(({ buildModule, config, middlewareModule, getRequestHeaders }) => ({
    config,
    magento: buildModule(middlewareModule<Endpoints>, {
      apiUrl: 'http://localhost:8181/magento',
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
  }));
}
