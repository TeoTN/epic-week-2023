import { ReactElement } from 'react';
import { withErrorBoundary } from './error-boundary';
import { SideEffect } from './effects';
import { Markdown } from '../Markdown';
import styled from 'styled-components';
import { useRuntimeManager } from './use-runtime-manager';
import { RuntimeContext } from './runtime-context';
import { StackFrame } from './stack-frame';
import { Task } from './task';
import { Controls } from './Controls';

interface VisualRuntimeProps {
  playbook: SideEffect[];
  snippet: string;
  showApiCalls?: boolean;
  showTasks?: boolean;
  showMicroTasks?: boolean;
}

const RuntimeBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

const CallStackWrapper = styled.div.attrs({ className: 'stack' })`
  width: 100%;
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.dark.base0};
  border-radius: 0.3rem;

  & .body {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    row-gap: 0.25rem;
  }
`;

const Queue = styled.div.attrs({ className: 'queue' })`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0.75rem 0;
  padding: 1rem;
  border-radius: 0.3rem;
  gap: 1rem;
`;

const FeatureTitle = styled.span`
  color: white;
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.code};
  font-weight: 500;
`;

const Toolbox = styled.div`
  margin: 0 2.5rem;
`;

const FloatingControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const EditorArea = styled.div`
  position: relative;
  flex: 1 0 65%;
`;

export const VisualRuntime = withErrorBoundary({ scope: 'visual-runtime' })(
  ({ playbook, snippet, showApiCalls, showTasks, showMicroTasks }: VisualRuntimeProps): ReactElement => {
    const manager = useRuntimeManager();

    return (
      <RuntimeContext.Provider value={manager}>
        <RuntimeBox>
          <EditorArea>
            <Markdown
              highlighterProps={{
                showLineNumbers: true,
                wrapLines: true,
                codeTagProps: {
                  style: { display: 'flex', flexDirection: 'column' },
                },
                lineProps: (lineNumber: number): any => {
                  if (lineNumber === manager.linePointer) {
                    return { className: 'line line-selected' };
                  }
                  return { className: 'line' };
                },
              }}
            >
              {snippet}
            </Markdown>
            <FloatingControls>
              <Controls playbook={playbook} />
            </FloatingControls>
          </EditorArea>
          <CallStackWrapper>
            <FeatureTitle>Call stack</FeatureTitle>
            <div className="body">
              {manager.stack.map((frame, i) => (
                <StackFrame key={i} {...frame} />
              ))}
            </div>
          </CallStackWrapper>
        </RuntimeBox>
        <Toolbox>
          {showTasks && (<Queue>
            <FeatureTitle>Task queue</FeatureTitle>
            {manager.tasks.map((task, i) => (
              <Task key={i} {...task} />
            ))}
          </Queue>)}
          {showApiCalls && <Queue>
            <FeatureTitle>Runtime API</FeatureTitle>
            {manager.apiCalls.map((task, i) => (
              <Task key={i} {...task} />
            ))}
          </Queue>}
          {showMicroTasks && <Queue>
            <FeatureTitle>Microtasks queue</FeatureTitle>
            {manager.microTasks.map((task, i) => (
              <Task key={i} {...task} />
            ))}
          </Queue>}
        </Toolbox>
      </RuntimeContext.Provider>
    );
  },
);
