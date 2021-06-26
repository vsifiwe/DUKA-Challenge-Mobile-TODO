import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Maldives</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            style={styles.footerControl}
            size='small'
            status='basic'>
            CANCEL
        </Button>
        <Button
            style={styles.footerControl}
            size='small'>
            ACCEPT
        </Button>
    </View>
);


const TaskItem = () => {

    return (
        <Card style={styles.card} header={Header} footer={Footer}>
            <Text>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
            </Text>
        </Card>
    )

}

export default TaskItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});