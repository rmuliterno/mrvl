import styled from "styled-components/native";

export const Container = styled.View`
    height: 92px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #cc0d0d;
`;

export const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 28px;
`;

export const Back = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 22px;
`;

// Helper para alinhamento do conteúdo
export const Aligner = styled.Text`
    font-size: 0px;
    margin-right: 28px;
`;
