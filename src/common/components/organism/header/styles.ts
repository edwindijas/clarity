import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem;
  border-radius: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 16px rgba(42, 51, 81, 0.08);
  backdrop-filter: blur(40px);
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const StyledButton = styled.div`
  background-color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  fill: #2A3351;
  border-radius: 3rem;
  color: #2A3351;
  box-shadow: 0px 4px 16px rgba(42, 51, 81, 0.08);
`;

export const StyledWorkspaceButton = styled(StyledButton).attrs({ as: 'button' })`
  width: auto;
  padding: 0 1rem;
  border-radius: .5rem;
`;

export const StyledLogoButton = styled(StyledButton).attrs({ as: 'button' })`
  path:nth-child(3) {
    fill: #E9EBEF;
  }
`;

export const StyledCloseButton = styled(StyledButton).attrs({ as: 'button' })`
  fill: #A3A9C1;
  &:hover {
    background-color: #F5F6F8;
  }
`;
