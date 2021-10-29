import styled from 'styled-components';

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 14px;
  background-color: #2F3337;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Helvetica Neue', helvetica;
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    h5 {
      margin: 0 8px;
      font-weight: 100;
      font-size: 18px;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    span {
      margin: 0 8px;
    }
`;

export const Name = styled.span`
    display: flex;
    align-items: center;
`;

export const BadgeSpan = styled.span`
    &:hover {
      cursor: pointer;
    }
`;

export const NotificationBox = styled.div`
    position: fixed;
    right: 24px;
    top: 48px;
    background: #fafafa;
    z-index: 10;
    box-shadow: #000 0px 0px 3px;
    border-radius: 3px;
`;
