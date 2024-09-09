import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { img, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage src={img} alt={title} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
