import React from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
    Container,
    Content,
    HeroInfo,
    Description,
    DescriptionText,
    Image,
    Comics,
    ComicsInfo,
    ComicsText,
    ComicTitle,
} from "./styles";
import HeaderInfo from "../../components/HeaderInfo";

const Info: React.FC = () => {
    const { params } = useRoute();

    return (
        <Container>
            <HeaderInfo heroName={params.hero.name} />

            <ScrollView contentContainerStyle={{ paddingBottom: 102 }}>
                <Content>
                    <Image
                        source={{
                            uri: `${params.hero.thumbnail.path}/portrait_fantastic.${params.hero.thumbnail.extension}`,
                        }}
                    />
                    <HeroInfo
                        style={{
                            borderBottomColor: "#777",
                            borderBottomWidth: 0.5,
                        }}
                    >
                        <Description>Description</Description>
                        <DescriptionText>
                            {params.hero.description === ""
                                ? "No description available"
                                : params.hero.description}
                        </DescriptionText>
                    </HeroInfo>

                    <ComicsInfo>
                        <Comics>
                            <ComicsText>Comics</ComicsText>
                            {params.hero.comics &&
                                params.hero.comics.items.map((comic) => (
                                    <ComicTitle key={comic.name}>
                                        {comic.name}
                                    </ComicTitle>
                                ))}
                        </Comics>
                    </ComicsInfo>
                </Content>
            </ScrollView>
        </Container>
    );
};

export default Info;
