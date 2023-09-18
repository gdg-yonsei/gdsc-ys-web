import { styled } from "styled-components";

const BookmarkLink = ({ url }) => {
  return (
    <BlockContainer>
      <A href={url}>
        <LeftContainer />
        <RightContainer />
      </A>
    </BlockContainer>
  );
};

export default BookmarkLink;

const BlockContainer = styled.div`
  width: 100px;
  max-width: 740px;

  margin: 4px 0;

  display: flex;
`;

const A = styled.a`
  flex: 1;
  position: relative;

  display: flex;
  align-items: stretch;
  text-align: left;

  border: 1px solid ${({ theme }) => theme["bookmark-border"]};
  border-radius: 3px;

  background-color: transparent;
  color: inherit;

  overflow: hidden;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: "rgba(255, 255, 255, 0.055)";
  }
`;

const LeftContainer = styled.div`
  flex: 4 1 180px;

  padding: 12px 14px 14px;

  position: relative;
  overflow: hidden;
  text-align: left;
`;

const RightContainer = styled.div`
  flex: 1 1 180px;
  position: relative;
`;
