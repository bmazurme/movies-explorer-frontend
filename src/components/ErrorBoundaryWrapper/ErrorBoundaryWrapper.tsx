import React from 'react';

import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Header from '../Header';
import Footer from '../Footer';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <Header />
      <div className="error-boundary">
        <div className="error-boundary__title">
          <h2 className="error-boundary__title">APP-ERROR</h2>
          <p className="error-boundary__message">{error.message}</p>
          <div className="error-boundary__block">
            Try to
            <Button
              className="button button_error"
              onClick={resetErrorBoundary}
              value="Reload app"
              isValid
            />
            or
            <Link className="link link_home" onClick={resetErrorBoundary} to="/">
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ErrorBoundaryWrapper({
  children,
}: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary onReset={() => console.log('reset')} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
