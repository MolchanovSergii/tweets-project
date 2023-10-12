import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px, 28px, 14px, 28px;
  margin: 20px auto;
  border: none;
  border-radius: 10.31px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;

  &:hover {
    background-color: rgba(92, 211, 168, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(174, 123, 227, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }
`;
