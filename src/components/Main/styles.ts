import styled, { css } from "styled-components";
import {
  MdArrowBack,
  MdHome,
  MdEmail,
  MdSearch,
  FaBell,
} from "../../styles/icons";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
export const BackIcon = styled(MdArrowBack)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;
export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const iconCss = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const BottomMenu = styled.div`
  padding: 8px min(46px, max(10vw, 10px));
  border-bottom: 1px var(--outline) solid;
  background: var(--primary);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const HomeIcon = styled(MdHome)`
  ${iconCss}
`;
export const SearchIcon = styled(MdSearch)`
  ${iconCss}
`;
export const BellIcon = styled(FaBell)`
  ${iconCss}
`;
export const EmailIcon = styled(MdEmail)`
  ${iconCss}
`;
