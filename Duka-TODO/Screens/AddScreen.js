import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Button, Input, IndexPath, Select, SelectItem } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import { addTask, getTasks } from '../services/TaskService';

export const AddScreen = () => {

    const addTasks = async () => {
        addTask(title, desc, displayValue);
        let newTasks = await getTasks();
        console.log(newTasks)
    }

    const data = [
        'LOW',
        'MEDIUM',
        'HIGH'
    ]

    const themeContext = React.useContext(ThemeContext);
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const displayValue = data[selectedIndex.row];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container}>
                <Input
                    style={styles.items}
                    placeholder='Title'
                    value={title}
                    onChangeText={nextValue => setTitle(nextValue)}
                />
                <Input
                    style={styles.items}
                    placeholder='Description'
                    value={desc}
                    onChangeText={nextValue => setDesc(nextValue)}
                />
                <Select
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                    value={displayValue}
                    style={styles.items}>
                    <SelectItem title='LOW' />
                    <SelectItem title='MEDIUM' />
                    <SelectItem title='HIGH' />
                </Select>
                <Button
                    onPress={() => addTasks()}
                    style={styles.items}>Save TODO Item</Button>
            </Layout>
        </SafeAreaView>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    items: {
        paddingBottom: 20
    }
});