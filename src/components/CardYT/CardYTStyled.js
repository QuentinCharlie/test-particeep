import styled from 'styled-components';

const CardYTStyled = styled.div`

  margin: 5px;

  .likes-count {
    display: flex;
    justify-content: space-evenly;
  }

  .delete-button {
    position: absolute;
    top: 4px;
    right: 0;
  }

  .like-bar {
    height: 6px;
    width: 60%;
    margin: .5em auto;
    display: flex;
    justify-content: center;
    .green-bar {
      height: 100%;
      background-color: #2ECC40;
    }
    .red-bar {
      height: 100%;
      background-color: #FF4136;
    }
  }

`;


export default CardYTStyled;
