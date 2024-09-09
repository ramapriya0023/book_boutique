import styled from "styled-components";

//import { ReactComponent as ShoppingSvg } from "../../resources/shopping-bag.svg";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "../../resources/shopping-bag";

export const ShoppingIcon = styled(ShoppingCartIcon)`
  width: 30px;
  height: 30px;
`;

export const StyledBadge = styled(Badge)`
'& .MuiBadge-badge': {
  right: -3,
  top: 23,
  border: 2px solid black,
  padding: '0 4px',
},
`;

export const CartIconContainer = styled(IconButton)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
