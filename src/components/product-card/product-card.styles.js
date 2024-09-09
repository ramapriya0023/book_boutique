import { Card, CardActions, CardMedia } from "@mui/material";
import styled from "styled-components";

export const ProductCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 345px;
  justify-content: space-between;
`;

export const ImageContainer = styled(CardMedia)`
  width: 100%;
  flex-grow: 1;
  object-fit: contain !important;
  height: 230px;
`;

export const ProductActions = styled(CardActions)`
  mt: auto;
  justify-content: center;
  padding: 20px !important;
`;
