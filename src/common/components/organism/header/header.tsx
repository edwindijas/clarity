import LogoIcon from 'assets/icons/logo.svg?react';
import CloseIcon from 'icons/outlined/close.svg?react';
import UserIcon from 'icons/outlined/person.svg?react';
import { JSX } from 'react';


import { StyledButton, StyledCloseButton, StyledHeader, StyledHeaderContent, StyledLogoButton, StyledWorkspaceButton } from './styles';

export const Header = (): JSX.Element => <StyledHeader>
  <StyledHeaderContent>
    <StyledLogoButton><LogoIcon /></StyledLogoButton>
    <StyledWorkspaceButton>Workspace</StyledWorkspaceButton>
    <StyledWorkspaceButton>Recent</StyledWorkspaceButton>
  </StyledHeaderContent>
  <StyledHeaderContent>
    <StyledButton><UserIcon /></StyledButton>
    <StyledCloseButton >
      <CloseIcon />
    </StyledCloseButton>
  </StyledHeaderContent>
</StyledHeader>;
