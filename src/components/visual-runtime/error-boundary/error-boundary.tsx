import React from 'react';
import styled from 'styled-components';

enum ScopeState {
  OK,
  ERROR,
}

interface ErrorBoundaryState {
  scopeState: ScopeState;
}

export interface ErrorBoundaryProps {
  scope: string;
  title?: string;
  description?: string;
}

const Alert = styled.div`
  background-color: var(--r-base00);
  color: var(--r-base3);
  border-top: 3px solid var(--r-red);
  border-bottom: 3px solid var(--r-red);
  padding: ${({ theme }) => theme.spacing(2)};
`;

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = { scopeState: ScopeState.OK };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(errorInfo);
    console.error(error);
    this.setState({ scopeState: ScopeState.ERROR });
  }

  render() {
    const { scopeState } = this.state;
    const {
      title = 'Unexpected error occurred',
      description,
      scope,
      children,
    } = this.props;
    if (scopeState === ScopeState.ERROR) {
      console.error(`Error occurred in scope: ${scope}`);
      return (
        <Alert>
          <strong>{title}</strong>
          {description && <p>{description}</p>}
        </Alert>
      );
    }
    return <>{children}</>;
  }
}
