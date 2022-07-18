import { View, Text, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import styled from "styled-components/native";

export default function App() {
  return (
    <StyleWrapApp>
      <Header />
    </StyleWrapApp>
  );
}

const StyleWrapApp = styled.SafeAreaView`
  flex: 1;
  padding: 0px 25px;
`;
