import styled from 'styled-components';

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  span {
    margin: 0 6px;
  }
`;

export const styles = (theme) => ({
  pidupload: {
    background: "#27AE60",
    textTransform: "initial"
  },
  pidtemplate: {
    background: "#E0FAE9",
    textTransform: "initial"
  },
  cidupload: {
    background: "#F39019",
    textTransform: "initial"
  },
  cidtemplate: {
    background: "#FFF3CD",
    textTransform: "initial"
  },
  back: {
    background: "#FFF",
    textTransform: "initial"
  },
  newPromo: {
    textTransform: "initial"
  }
});
