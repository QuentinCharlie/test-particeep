import styled from 'styled-components';

const AppStyled = styled.div`

  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* background-color: #F9F9F9; */

  h1 {
    margin: .5em 0;
    color: #F05E50;
  }

  .cover {
    position: fixed;
    z-index: 2;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .filter-menu {
    margin: 0 auto 2em auto;
    width: 95%!important;

  }

  .cards {
    margin-bottom: 2em;
    z-index: 3;
  }

`;


export default AppStyled;
