import React from 'react';
import styles from './Header.module.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Line = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 100%;
  height: 1px;
  background-color: rgba(16, 24, 40, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(NavLink)`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 20px;
  text-decoration: none;
  position: relative;
  &::after {
    content: '';
    width: 0;
    height: 3px;
    background-color: #ff0000;
    position: absolute;
    left: 0;
    bottom: -14px;
    transition: width 0.3s;
  }
  &.active::after {
    width: 100%;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_wrapper}>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </nav>
          <Line />
        </div>
      </header>
    </>
  );
};
