import * as React from 'react';
import { Text, View } from 'react-native';

const CatsScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cats!</Text>
        </View>
    );
};

export default CatsScreen;
