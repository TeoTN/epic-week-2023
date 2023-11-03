import React from 'react';
import { ErrorBoundary, ErrorBoundaryProps } from './error-boundary';

export const withErrorBoundary = (ebProps: ErrorBoundaryProps) => (
    <T extends object>(Component: React.ComponentType<T>): React.FC<T> => {
        return ({ ...props }: T) => (
            <ErrorBoundary {...ebProps}>
                <Component {...props} />
            </ErrorBoundary>
        );
    }
);
