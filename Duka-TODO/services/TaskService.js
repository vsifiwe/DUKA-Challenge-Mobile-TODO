import { v4 as uuid } from 'uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';

let tasks = [];

export const getTasks = async () => {
    let retrievedTasks = await getFromDB();
    return retrievedTasks;
}

export const addTask = (title, description, priority) => {

    let gid = uuid();
    let createdDate = new Date();
    let modifiedDate = new Date();

    let task = {
        id: gid,
        title,
        description,
        priority,
        createdDate,
        modifiedDate
    };
    tasks.push(task);
    saveToDB();
}

export const deleteTask = (id) => {

    var removeIndex = tasks.map(function (item) { return item.id; }).indexOf(id);
    tasks.splice(removeIndex, 1);
    saveToDB();
}

const saveToDB = async () => {
    try {
        const jsonValue = JSON.stringify(tasks)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error
        console.log("There was an error saving the data.");
    }
}

const getFromDB = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("Error reading value");
    }
}