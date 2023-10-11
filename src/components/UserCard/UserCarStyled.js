import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  overflow: hidden;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const BackgroundImage = styled.img`
  width: 308px;
  height: 168px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;
export const Divider = styled.div`
  width: 380px;
  height: 8px;
  background-color: rgba(235, 216, 255, 1);
  position: absolute;
  top: 214px;

  box-shadow: 0px 3.4369px 2.5777px 0px rgba(251, 248, 255, 1) inset,
    0px 3.4369px 3.4369px 0px rgba(0, 0, 0, 0.06),
    0px -1.7185px 3.4369px 0px rgba(174, 123, 227, 1) inset;
`;
export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 178px;
  left: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserInfo = styled.div`
  margin-top: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserCounts = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(235, 216, 255, 1);
`;
