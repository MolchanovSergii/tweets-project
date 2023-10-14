import styled from 'styled-components';
import { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: calc((380px + 20px) * 3);
  margin: 0 auto;
`;

const baseButtonStyles = css`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin: 20px auto;
  border: none;
  border-radius: 10.31px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  text-decoration: none;
  text-align: center;
  color: rgba(55, 55, 55, 1);

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  background: rgba(235, 216, 255, 1);

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

export const Button = styled.button`
  ${baseButtonStyles}
`;

export const StyledLink = styled(Link)`
  ${baseButtonStyles}
  display: flex;
  text-decoration: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  display: block;
  width: 196px;
  height: 50px;
  /* padding: 14px 28px; */
  padding-left: 14px;
  margin: 20px auto;
  border: none;
  border-radius: 10.31px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  text-decoration: none;
  text-align: center;
  color: rgba(55, 55, 55, 1);

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  background: rgba(235, 216, 255, 1);

  /* &:hover {
    background-color: rgba(92, 211, 168, 1);
  } */

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(174, 123, 227, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }
`;
