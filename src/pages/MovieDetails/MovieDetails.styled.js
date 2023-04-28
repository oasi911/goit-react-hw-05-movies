import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(51, 27, 0, 0.7);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ImgThumb = styled.div`
  width: 500px;
  height: 325px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescrLable = styled.p`
  color: #000;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;

export const DescrText = styled.span`
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  list-style: none;
`;

export const NavItem = styled.li`
  height: 42px;

  & + & {
    margin-left: 15px;
  }
`;
