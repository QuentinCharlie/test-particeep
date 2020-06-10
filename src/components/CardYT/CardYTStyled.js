import styled from 'styled-components';

const CardYTStyled = styled.div`

  margin: 5px;

  .likes-count {
    display: flex;
    justify-content: space-evenly;
  }

  .hover-button {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .delete-button {
    position: absolute;
    top: 4px;
    right: 1px;
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
