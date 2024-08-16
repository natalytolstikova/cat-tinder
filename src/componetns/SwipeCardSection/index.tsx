import React, { Fragment, useCallback } from 'react';
import { Animated } from 'react-native';
import { SwipeCard } from '../SwipeCard';
import { DiscoverStyleSheet } from './styles';
import Choice from '../Choise';
import { UserActions } from '../UserActions';
import { useUsersDiscover } from '../../hooks/useUsersDiscover';
import { SwipeCardChildren } from '../SwipeCardChildren';
// import { useInteractWithPeopleMutation } from '../../rtk-query';
import { IUser, IDiscover } from '../../types';

const SwipeCardSection = ({ usersToDiscover, refetch }: IDiscover) => {
    // const [interact] = useInteractWithPeopleMutation({
    //     fixedCacheKey: 'interactWithPeople',
    // });
    const { users, setUsers } = useUsersDiscover({ usersToDiscover, refetch });

    const likeOpacity = (swipe: any) =>
        swipe.x.interpolate({
            inputRange: [25, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

    const nopeOpacity = (swipe: any) =>
        swipe.x.interpolate({
            inputRange: [-100, -25],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

    const renderChoice = useCallback(
        (swipe: any) => (
            <Fragment>
                <Animated.View
                    style={[
                        DiscoverStyleSheet.choiceContainer,
                        DiscoverStyleSheet.likeContainer,
                        { opacity: likeOpacity(swipe) },
                    ]}
                >
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[
                        DiscoverStyleSheet.choiceContainer,
                        DiscoverStyleSheet.nopeContainer,
                        { opacity: nopeOpacity(swipe) },
                    ]}
                >
                    <Choice type="nope" />
                </Animated.View>
            </Fragment>
        ),
        []
    );

    const handleSwipeUserMatching = (swipe: Animated.ValueXY, prevState: IUser[]) => {
        const isLike = Number(JSON.stringify(swipe.x)) > 0;
        const userIdReceiver = prevState?.[0]?.id;

        console.log('isLike: ' + isLike);

        // interact({
        //     interaction: isLike ? 'like' : 'reject',
        //     userIdReceiver,
        //     userIdTransmitter: 1,
        // });
    };

    return (
        <SwipeCard
            onSwipeUser={handleSwipeUserMatching}
            items={users}
            setItems={setUsers}
            renderActionBar={(handleChoice) => (
                <UserActions onLike={() => handleChoice(1)} onReject={() => handleChoice(-1)} />
            )}
        >
            {(item, swipe, isFirst) => (
                <SwipeCardChildren item={item} swipe={swipe} isFirst={isFirst} renderChoice={renderChoice} />
            )}
        </SwipeCard>
    );
};

export default SwipeCardSection;
