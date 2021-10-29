import styled from 'styled-components';

export const styles = () => ({
  formControl: {
    margin: 0,
    minWidth: 155,
    borderRadius: '2px'
  },
  selectMenu: {
    borderRadius: '2px',
    padding: '12px 32px 12px 12px',
    color: '#2f3337'
  },
  createPromoBtn: {
    textTransform: "initial"
  }
});

export const Form = styled.form`
  display: flex;
  overflow: scroll;
  height: 100%;
  flex-direction: column;
  margin: 0;
  h4 {
    font-size: 14px;
    font-weight: medium;
  }
  input, textarea, textarea::placeholder, input::placeholder, p {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const VerifyDialogWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00000066

`;

export const VerifyDialogBox = styled.div`
  width: 278px;
  height: 205px;
  padding: 24px 48px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
  h2 {
    font-size: 24px;
    margin: 0 auto 24px auto;
  }
  button {
    margin: 4px;
  }
`;

export const ButtonContainer = styled.div`
   text-align: right;
   width: 100%;
   button {
     margin-left: 12px;
   }
`;
