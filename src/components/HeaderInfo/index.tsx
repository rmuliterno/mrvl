import React from "react";

import Icon from "react-native-vector-icons/Feather";

import { Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container, Wrapper, Back, Title, Aligner } from "./styles";

interface HeaderInfoProps {
    heroName: string;
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({ heroName }) => {
    const navigation = useNavigation();

    return (
        <Container>
            <Wrapper>
                <Back
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Icon name="chevron-left" color="#fff" size={28} />
                </Back>
                <Title>{heroName}</Title>
                <Aligner>Alignment Helper</Aligner>
            </Wrapper>
        </Container>
    );
};

export default HeaderInfo;
