import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { DiscoverStyleSheet } from './styles';

import SwipeCardSection from '../SwipeCardSection';

import FlameStarSvg from '../../../assets/svg/flameStarSvg';

// import {useFindPeopleQuery} from '../../rtk-query';

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

export const Discover = () => {
    // const {data: peopleToDiscover, refetch} = useFindPeopleQuery({userId: '1'});

    return (
        <SafeAreaView>
            <View style={[DiscoverStyleSheet.discoverWrapper]}>
                <View style={[DiscoverStyleSheet.discoverTitle]}>
                    <FlameStarSvg />
                </View>

                {users?.length ? (
                    <SwipeCardSection usersToDiscover={users} refetch={() => {}} />
                ) : (
                    <Text>No results</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Discover;
