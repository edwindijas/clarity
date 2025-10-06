import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const StyledButton = styled.div`
  background-color: #E9EBEF;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #D8DADC;
  padding: 0.6rem;
  fill: #2A3351;
  border-radius: 50%;
  color: #2A3351;
`;

export const StyledWorkspaceButton = styled(StyledButton).attrs({ as: 'button' })`
  width: auto;
  padding: 0 1rem;
  border-radius: 0.5rem;
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
