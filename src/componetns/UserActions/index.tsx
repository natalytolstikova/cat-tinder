import React, { FC } from 'react';
import { GestureResponderEvent, View, Text, TouchableOpacity } from 'react-native';
import { UserActionsStyleSheet } from './styles';

export interface IUserActions {
    onReject: () => void;
    onLike: () => void;
}

export const UserActions: FC<IUserActions> = ({ onReject, onLike }) => {
    const handlePressReject = (event: GestureResponderEvent) => {
        onReject();
        return event;
    };
    const handlePressHeart = (event: GestureResponderEvent) => {
        onLike();
        return event;
    };

    return (
        <View style={[UserActionsStyleSheet.wrapper]}>
            <TouchableOpacity
                onPress={handlePressReject}
                style={[UserActionsStyleSheet.iconWrapper, UserActionsStyleSheet.closeWrapper]}
            >
                <Text>X</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handlePressHeart}
                style={[UserActionsStyleSheet.iconWrapper, UserActionsStyleSheet.heartWrapper]}
            >
                <Text>Heart</Text>
            </TouchableOpacity>
        </View>
    );
};
