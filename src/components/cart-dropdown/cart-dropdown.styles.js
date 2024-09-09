import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px; /* Adjust the width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded corners for the thumb */
    border: 2px solid transparent; /* Add space between thumb and track */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Darker color on hover */
  }
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 10px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px; /* Adjust the width of the scrollbar */
  }
`;
