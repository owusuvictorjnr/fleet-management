"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";
import { Toaster } from "sonner";

{
  /* This is a fallback UI for errors */
}
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-600">
      <h2 className="text-lg font-bold">Something went wrong:</h2>

      <pre>{error.message}</pre>
    </div>
  );
}

export function ErrorProvider({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
}
