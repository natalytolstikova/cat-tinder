import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FlameStarSvg from '../../../assets/svg/flameStarSvg';
import SwipeCardSection from '../../componetns/SwipeCardSection';
import Discover from '../../componetns/Discover';

const CatsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlameStarSvg />
            <Discover />
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
