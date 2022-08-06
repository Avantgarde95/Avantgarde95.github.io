import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Drawer from "@mui/material/Drawer";

import useScreen from "hooks/useScreen";
import Link from "components/Link";
import { resetButton, resetLink } from "styles/Mixins";

import CloseMenu from "layout/assets/CloseMenu.svg";

interface MenuProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Menu = ({ show, setShow }: MenuProps) => {
  const theme = useTheme();
  const { isWide } = useScreen();

  const handleClickPaper = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "284px",
          backgroundColor: theme.color.white,
        },
        onClick: handleClickPaper,
      }}
      anchor="left"
      open={show}
      onClick={handleCloseModal}
      hideBackdrop={isWide}
    >
      <Controls>
        <CloseButton onClick={handleCloseModal}>
          <CloseMenu />
        </CloseButton>
      </Controls>
      <EachLink href="/">My page</EachLink>
      <EachLink href="/projects">Project</EachLink>
      <EachLink href="https://avantgarde95.github.io/blog">Blog</EachLink>
      <EachLink href="https://github.com/Avantgarde95">GitHub</EachLink>
    </Drawer>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 52px;
  margin-bottom: 24px;
`;

const CloseButton = styled.button`
  ${resetButton}

  margin-left: auto;
  margin-right: 14px;
`;

const EachLink = styled(Link)`
  ${resetLink}

  overflow-x: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: block;

  width: 100%;
  height: 44px;
  padding-top: 14px;
  padding-left: 24px;
  font-size: 19px;
  font-weight: 700;

  border-bottom: 0.5px solid ${({ theme }) => theme.color.black};
`;

export default Menu;
