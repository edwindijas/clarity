import PlusIcon from 'icons/outlined/add.svg?react';
import SendIcon from 'icons/outlined/send.svg?react';
import { JSX } from 'react';


import { StyledButton, StyledPromptButton, StyledPromptWrapper, StyledTextInput } from './style';

export const PromptInput = (): JSX.Element => <StyledPromptWrapper>
  <StyledButton><PlusIcon /></StyledButton>
  <StyledTextInput contentEditable >
    TypePrompt here...
  </StyledTextInput>
  <StyledPromptButton><SendIcon /></StyledPromptButton>
</StyledPromptWrapper>;
