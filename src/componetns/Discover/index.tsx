import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { DiscoverStyleSheet } from './styles';

import SwipeCardSection from '../SwipeCardSection';

import FlameStarSvg from '../../../assets/svg/flameStarSvg';

export const Discover = ({ users, postVoteApi, refetch }) => {
    return (
        <SafeAreaView>
            <View style={[DiscoverStyleSheet.discoverWrapper]}>
                <View style={[DiscoverStyleSheet.discoverTitle]}>
                    <FlameStarSvg />
                </View>

                {users?.length ? (
                    <SwipeCardSection usersToDiscover={users} postVoteApi={postVoteApi} refetch={refetch} />
                ) : (
                    <Text>No results</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Discover;
