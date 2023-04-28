import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.5);
`;

export const NavigationLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(51, 27, 0, 0.7);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;

  & + & {
    margin-left: 20px;
  }
`;

export const ContentWrap = styled.div`
  padding: 0 30px;
  padding-top: 100px;
  min-height: 100vh;
  background: rgba(51, 27, 0, 0.25);
`;
