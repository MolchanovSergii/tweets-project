import styled from 'styled-components';
import backgroundImage from '../../images/background_image.png';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-radius: 20px;

  background-image: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    url(${backgroundImage});

  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-blend-mode: overlay;
`;

export const HomePageTitle = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  color: rgba(235, 216, 255, 1);
  text-align: center;
  margin-bottom: 20px;
`;

export const HomePageDescription = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  color: rgba(235, 216, 255, 1);
  text-align: center;
  max-width: 80%;
`;
