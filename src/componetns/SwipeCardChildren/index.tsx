/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, View } from 'react-native';
import { DiscoverStyleSheet } from './styles';
import { Card } from '../Card';
import { Button } from '../Button';
import { IUser } from '../../types';

export interface ISwipeCardChildren {
    item: IUser;
    swipe: Animated.ValueXY;
    isFirst: boolean;
    renderChoice: (swipe: any) => React.JSX.Element;
}

export const SwipeCardChildren = ({ item, swipe, isFirst, renderChoice }: ISwipeCardChildren) => {
    return (
        <Card profileImg={item.url} minWidth={400} maxHeight={400} minHeight={400}>
            <Card.Info style={DiscoverStyleSheet.userInfo}>
                {isFirst && renderChoice(swipe)}
                <View>
                    <Card.Title>
                        {item.breeds[0].name}, {item.breeds[0].energy_level}
                    </Card.Title>
                    <Card.Description>{item.breeds[0].temperament}</Card.Description>
                </View>
                <Button
                    maxWidth={100}
                    colors={['#000000', '#2f2f2f']}
                    text={item.breeds[0].origin}
                    styles={{
                        borderRadius: 30,
                    }}
                />
            </Card.Info>
        </Card>
    );
};
