import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const StyledButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  fill: #2A3351;
  border-radius: 3rem;
  color: #2A3351;
`;

export const StyledWorkspaceButton = styled(StyledButton).attrs({ as: 'button' })`
  width: auto;
  padding: 0 1rem;
  border-radius: .5rem;
  border: 1px solid #ccc;
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
