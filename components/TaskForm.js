import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create(
    {
        container: {            
        },
        label: {           
        }
    }
);
export default class TaskForm extends React.Component {
    render() {
        return (
            <View style={style.container} >
                <Text style={style.label}>
                   Task Form
                </Text>
            </View>
        )
    }
}