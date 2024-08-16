import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FlameStarSvg from '../../../assets/svg/flameStarSvg';
import SwipeCardSection from '../../componetns/SwipeCardSection';
import Discover from '../../componetns/Discover';
const GET_CATS_URL =
    'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10';
const POST_VOTE_API = 'https://api.thecatapi.com/v1/votes';

const users = [
    {
        id: 0,
        profileImg: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
        name: 'Name',
        age: '25',
        description: 'desc',
        distance: 'dist',
    },
    {
        id: 1,
        profileImg: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
        name: 'Name2',
        age: '25',
        description: 'desc',
        distance: 'dist',
    },
];

const CatsScreen: React.FC = () => {
    const [cats, setCats] = useState();

    const getUsersFromApi = async () => {
        try {
            const response = await fetch(GET_CATS_URL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': 'DEMO-API-KEY',
                },
            });
            const json = await response.json();
            console.log(json);
            setCats(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    const postVoteApi = async (id: string, imageId: string) => {
        try {
            console.log('post');
            console.log(id);
            console.log(imageId);
            const response = await fetch(POST_VOTE_API, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': 'DEMO-API-KEY',
                },
                body: JSON.stringify({
                    sub_id: id,
                    value: 1,
                    image_id: imageId,
                }),
            });
            const json = await response.json();
            console.log(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('upload cats');
        console.log(cats);
        // getUsersFromApi();
        if (!cats) {
            getUsersFromApi();
        }
    }, [cats]);

    return (
        <View style={styles.container}>
            <Discover users={cats} postVoteApi={postVoteApi} refetch={() => {}} />
        </View>
    );
};

export default CatsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
