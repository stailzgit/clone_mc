import { View, Text, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { SIZES, COLORS } from "../constants";
import styled from "styled-components/native";
import { categories } from "../data/categoriesData";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <TextBoldStyle>Hey,</TextBoldStyle>
      <TextStyle>what`s up?</TextStyle>
      <CategoriesView>
        {categories.map((category, index) => (
          <CategoryItem>
            <TouchableHighlight onPress={() => setActiveCategory(index)}>
              <CategoryItemInner
                bg={index === activeCategory ? COLORS.secondary : COLORS.gray}
              >
                <CategoryImage source={{ uri: category.image }} />
                <CategoryText>{category.name}</CategoryText>
              </CategoryItemInner>
            </TouchableHighlight>
          </CategoryItem>
        ))}
      </CategoriesView>
    </View>
  );
};

export default Categories;

const TextStyle = styled.Text`
  font-size: ${SIZES.h1}px;
  color: ${COLORS.white};
`;

const CategoriesView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: -5px -5px;
  margin-top: 30px;
`;

const CategoryItem = styled.View`
  flex: 1 1 30%;
  height: 120px;
  margin: 5px 5px;
`;

const CategoryItemInner = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ bg }) => bg};
  border-radius: ${SIZES.radius}px;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 5px;
`;

CategoryItemInner;

const CategoryText = styled.Text`
  color: ${COLORS.white};
  text-align: center;
`;

const TextBoldStyle = styled.Text`
  font-size: ${SIZES.h1};
  color: ${COLORS.white};
  font-weight: bold;
`;

const CategoryImage = styled.Image`
  width: 50px;
  /* height: 80px; */

  height: auto;
  aspect-ratio: 1;
`;
