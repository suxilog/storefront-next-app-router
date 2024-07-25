import { forwardRef } from 'react';
// eslint-disable-next-line no-restricted-imports
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = NextLinkProps;

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<typeof NextLink>>(
  ({ prefetch, ...rest }, reference) => <NextLink ref={reference as any} prefetch={prefetch ?? false} {...rest} />,
);
