import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export const InputText = ({ title, placeholder, secure }) => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.areaInput}>
            <Text style={styles.label}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#bbb"
                value={email}
                secureTextEntry={secure}
                onChangeText={(e) => setEmail(e)}
                style={styles.input}
            />
        </View>
    );
};
