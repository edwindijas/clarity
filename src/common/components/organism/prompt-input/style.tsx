import styled from 'styled-components';

export const StyledPromptWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0rem;
  padding: 0.6rem 0.4rem 0.6rem 0.3rem;
  background-color: #f9f9f6;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 16px rgba(42, 51, 81, 0.08);
  align-items: bottom;
  border-radius: .8rem;
`;

export const StyledTextInput = styled.div`
  line-height: 1.2rem;
  padding: 0.65rem 0.6rem 0.5rem 0;   
  flex: 1;
  min-height: 1.2rem;
  height: max-content;
  color: #666;
  height: auto;
`;

export const StyledButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  color: #ffffff;
  border-radius: 50%;
  padding: 0.4rem;
  fill: #333;
`;

export const StyledPromptButton = styled(StyledButton).attrs({ as: 'button' })`
  width: auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  background-color: #fff;
`;
