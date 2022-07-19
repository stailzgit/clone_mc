import { View, Text, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import styled from "styled-components/native";
import Popular from "./src/components/Popular";
import { COLORS } from "./src/constants";

export default function App() {
  return (
    <StyleWrapApp>
      <Header />
      <Categories />
      <Popular />
    </StyleWrapApp>
  );
}

const StyleWrapApp = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.black};
  padding: 0px 35px;
`;
