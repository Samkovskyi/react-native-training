import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#E7E7E7',
            padding: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
        },
        label: {
            fontSize: 20,
            fontWeight: '300',
        }
    }
);
export default class TaskRow extends React.Component {
    render() {
        return (
            <View style={style.container} >
                <Text style={style.label}>
                    {this.props.todo.task}
                </Text>
            </View>
        )
    }
}

TaskRow.propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,
}