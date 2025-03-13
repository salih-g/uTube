import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { HydrateClient } from '@/trpc/server';

export default async function Home() {
  return (
    <HydrateClient>
      <Suspense fallback='loading...'>
        <ErrorBoundary fallback={<p>error...</p>}>
          <h1>Home</h1>
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
