import React from "react";
import LOGO_MC from "../assets/mc_logo.png";
import USA_ICON from "../assets/usa.png";
import BASKET_ICON from "../assets/basket.png";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderView>
      <TouchableHighlight onPress={() => Linking.openURL("http://google.com")}>
        <IconMCStyle
          source={LOGO_MC}
          onPress={() =>
            Linking.openURL(
              "https://dribbble.com/shots/7049291/attachments/49835?mode=media"
            )
          }
        />
      </TouchableHighlight>

      <IconBasketStyle
        source={BASKET_ICON}
        onPress={() =>
          Linking.openURL(
            "https://dribbble.com/shots/7049291/attachments/49835?mode=media"
          )
        }
      />
    </HeaderView>
  );
};

const TextStyle = styled.Text`
  font-size: 30px;
`;

const IconMCStyle = styled.Image`
  width: 59px;
  height: 50px;
`;

const IconBasketStyle = styled.Image`
  width: 55px;
  height: 50px;
`;

const IconUSAStyle = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px;
`;

export default Header;
