import type { Metadata } from 'next';

export function getCanonicalMetadata(path: string): Metadata {
  return {
    alternates: {
      canonical: `https://minimaverse.com${path}`,
    },
  };
}
