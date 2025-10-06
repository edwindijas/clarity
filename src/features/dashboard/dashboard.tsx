import { JSX } from 'react';

import { StyledButton, StyledButtonWrapper, StyledDashboardWrapper, StyledPromptWrapper } from './style';
import { PromptInput } from '@/src/common/components/organism/prompt-input';

export const DashboardPage = (): JSX.Element => {
  return <StyledDashboardWrapper>
    <StyledPromptWrapper>
      <PromptInput />
    </StyledPromptWrapper>
    <StyledButtonWrapper>
      <StyledButton>Summarize Page</StyledButton>
      <StyledButton>Deep Search</StyledButton>
    </StyledButtonWrapper>
  </StyledDashboardWrapper>;
};
