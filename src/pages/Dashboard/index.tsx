import React, { useEffect, useState, useCallback } from "react";
import md5 from "js-md5";
import Spinner from "react-native-loading-spinner-overlay";

import { FlatList } from "react-native";

import { Container } from "./styles";

import api from "../../services/api";
import HeroListItem from "../../components/HeroListItem";
import Header from "../../components/Header";

interface IHero {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    };
}

const Dashboard: React.FC = () => {
    const [heroes, setHeroes] = useState<IHero[]>([]);
    const [offset, setOffset] = useState(10);
    const [loading, setLoading] = useState(false);

    // Como o gerenciamento desse tipo de chave não é muita responsabilidade do front e esconder chaves de API no front
    // não tem uma eficácia muito grande vou deixar disponível aqui ao invés de usar no .env mesmo para ficar mais fácil de testar a aplicação
    const PUBLIC_KEY = "cbd795df6ff311678809e8399e80710a";
    const PRIVATE_KEY = "7cacdb117b185fed6585c7b7e7abfc330a1fe81f";
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const loadMoreHeroes = useCallback(async () => {
        setLoading(true);
        const response = await api.get(
            `characters?ts=${timestamp}&orderBy=name&limit=10&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        );
        await setHeroes([...heroes, ...response.data.data.results]);
        setOffset(offset + 10);
        setLoading(false);
    }, [hash, timestamp]);

    function handleOffsetIncrease() {
        loadMoreHeroes();
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const response = await api.get(
                `characters?ts=${timestamp}&orderBy=name&limit=10&offset=0&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
            );
            setHeroes(response.data.data.results);

            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <Container>
            <Header />
            <Spinner
                visible={loading}
                textContent={"Assembling Heroes..."}
                color="#cc0d0d"
                textStyle={{ color: "#fff", fontSize: 28 }}
            />
            {heroes && (
                <FlatList
                    onEndReached={handleOffsetIncrease}
                    onEndReachedThreshold={0.1}
                    data={heroes}
                    renderItem={({ item }) => <HeroListItem hero={item} />}
                    contentContainerStyle={{ paddingBottom: 92 }}
                    keyExtractor={(item) => item.name}
                />
            )}
        </Container>
    );
};

export default Dashboard;
