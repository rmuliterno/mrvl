import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 24px;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 100%;

    padding: 0 0 24px 0;
`;

export const Image = styled.Image`
    height: 72px;
    width: 72px;
    border-radius: 4px;
`;

export const HeroInfo = styled.View`
    display: flex;

    margin-left: 12px;
    text-align: center;
`;

export const Name = styled.Text`
    color: #333;
    font-size: 24px;
    text-align: left;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
    color: #afafaf;
    font-size: 18px;
`;
