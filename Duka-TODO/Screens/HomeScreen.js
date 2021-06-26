import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Button, Text } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import TaskList from '../components/TaskList';
import { getTasks } from '../services/TaskService';

export const HomeScreen = ({ navigation }) => {

    const themeContext = React.useContext(ThemeContext);
    const [tasks, setTasks] = useState([]);

    const getData = async () => {
        setTasks(await getTasks());
    }

    getData();

    // console.log(tasks);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container}>
                <Text style={styles.title}>Tasks</Text>
                <TaskList tasklist={tasks} />
                <Button style={{ marginVertical: 4 }} onPress={() => navigation.navigate('Add')} status="success">Add Tasks</Button>
                <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>Dark Mode</Button>
                <Button style={{ marginVertical: 4 }} onPress={() => console.log(tasks)}>Print Data</Button>
            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});