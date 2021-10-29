import styled from 'styled-components';

export const OnePromoBodyWrap = styled.div`
  background-color: #fff;
  color: #626669;
  overflow: scroll;
  height: 100%;
`;

export const FlexWrap = styled.div`
  display: flex;
  .fieldDiv {
    margin-right: 24px;
  }
  h4 {
    font-weight: 500;
    margin: 0 0 8px 0;
  }
  p {
    margin: 0;
    height: 42px;
    line-height: 42px;
  }
  textarea {
    height: 300px;
    width: 150px;
    text-align: right;
    padding: 8px;
  }
  textarea::placeholder {
    text-align: right;
  }
  input {
    font-size: 16px;
    color: #2F3337;
    height: 42px;
  }
`;

export const Form = styled.form`
  display: flex;
  overflow: scroll;
  height: 100%;
  flex-direction: column;
  margin: 0;
`;
