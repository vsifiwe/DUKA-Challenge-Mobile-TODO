import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native';
import { Layout, Button, Text } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

export const UpdateScreen = ({ route, navigation }) => {

    const { item } = route.params;

    const addTasks = () => {
        let tasks = [];
        tasks = getTasks();
        console.log(tasks)
    }

    const themeContext = React.useContext(ThemeContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.priority}</Text>
                <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
            </Layout>
        </SafeAreaView>
    );
};

export default UpdateScreen;