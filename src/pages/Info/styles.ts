import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
    padding: 0 36px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    margin: 36px 0;
    height: 232px;
    width: 182px;
    border-radius: 4px;
`;

export const HeroInfo = styled.View`
    display: flex;
    align-items: center;

    min-width: 100%;
    padding-bottom: 42px;
`;

export const Description = styled.Text`
    font-size: 28px;
`;

export const DescriptionText = styled.Text`
    margin-top: 16px;
    font-size: 16px;
    text-align: center;
`;

export const ComicsInfo = styled.View`
    display: flex;
    margin-top: 42px;
`;
export const Comics = styled.View`
    display: flex;
    min-width: 100%;
`;
export const ComicsText = styled.Text`
    font-size: 28px;
    text-align: left;
    color: #afafaf;
    margin-bottom: 8px;
`;
export const ComicTitle = styled.Text`
    font-size: 20px;
    color: #afafaf;
    margin: 4px 0 4px 12px;
`;
