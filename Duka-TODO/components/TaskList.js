import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let data = [];

const TaskList = (props) => {

    const navigation = useNavigation();
    data = props.tasklist;

    const renderItemAccessory = (props) => (
        <>
            <Button size='tiny' status="danger">Delete</Button>
        </>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='checkmark-square-outline' />
    );

    const ListItemPressed = (item, index) => {
        navigation.navigate("Update", { item });
        console.log(item + index);
    }

    const renderItem = ({ item, index, }) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.description}`}
            priority={`${item.priority} ${index + 1}`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
            onPress={() => ListItemPressed(item, index)}
        />
    );

    return (
        <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
        />
    );
};

export default TaskList

const styles = StyleSheet.create({
    container: {
        // maxHeight: 192,
    },
});