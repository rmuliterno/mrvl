import React from "react";

import {
    Container,
    Content,
    Image,
    HeroInfo,
    Name,
    Link,
    LinkText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

interface HeaderInfoProps {
    hero: IHero;
}

interface IHero {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    };
}

const HeroListItem: React.FC<HeaderInfoProps> = ({ hero }) => {
    const navigation = useNavigation();

    return (
        <Container>
            <Content
                style={{
                    borderBottomColor: "#777",
                    borderBottomWidth: 0.5,
                }}
            >
                <Image
                    source={{
                        uri: `${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`,
                    }}
                />
                <HeroInfo>
                    <Name
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={{ width: 260 }}
                    >
                        {hero.name}
                    </Name>
                    <Link
                        onPress={() => {
                            navigation.navigate("Info", {
                                hero,
                            });
                        }}
                    >
                        <LinkText>See more</LinkText>
                    </Link>
                </HeroInfo>
            </Content>
        </Container>
    );
};

export default HeroListItem;
