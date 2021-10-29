import styled from 'styled-components';

export const CSVUploadDialogWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00000066
  h2 {
    font-size: 24px;
    margin: 15px 0 29px 0;
  }
`;

export const CSVUploadDialogBox = styled.div`
  width: 588px;
  height: 369px;
  padding: 16px 68px;
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
`;

export const DashedBox = styled.div`
  width: 452px;
  height: 141px;
  padding: 16px;
  border-radius: 10px;
  border: 2px dashed #707070;
  margin: auto;
  background-color: #f9f9fb;
  text-align: center;
  box-sizing: border-box;
  p {
    font-size: 14px;
  }
  svg {
    width: 45px;
    color: #27AE60;
    height: 57px;
  }
`;

export const Exit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const BrowseButton = styled.span`
  color: blue;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Progress = styled.div`
  margin: 13px 0 14px 0;
  p {
    font-size: 14px;
    margin: 4px 0;
  }
  #uploading {
    color: #3668FF;
  }
`;
