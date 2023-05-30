

import styled from 'styled-components';

export const LoaderWrap = styled.div`

  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;


`;

export const LoaderSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;