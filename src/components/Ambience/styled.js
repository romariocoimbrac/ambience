import styled from "styled-components";
import rain from "../../assets/images/rain.jpg";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
  }
`;

export const ImgAmbience = styled.img`
  @keyframes zoom {
    0% {
      transform: scale(1.3, 1.3);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1.3, 1.3);
    }
  }

  animation: zoom 120s infinite;
  background: url(${(props) => props.bg}) no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: -1;
`;

export const ImgList = styled.img`
  width: 15em;
  height: 10em;
  margin: 0.5em 1em;
  opacity: 0.1;

  :hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    opacity: 0.8;
  }
`;
