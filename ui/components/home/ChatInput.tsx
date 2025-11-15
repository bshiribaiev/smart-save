import React from 'react';
import { Alert, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedView } from '@/components/themed-view';

export function ChatInput() {
    const [value, setValue] = React.useState('');

    const handleSend = () => {
        if (!value.trim()) return;
        // Placeholder: wiring to real AI backend will come next
        Alert.alert('AI Chat (coming soon)', value.trim());
        setValue('');
    };

    return (
        <ThemedView style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <Ionicons name="sparkles-outline" size={18} color="#6b7280" />
                <TextInput
                    style={styles.input}
                    placeholder="Ask the AI about your money..."
                    placeholderTextColor="#9ca3af"
                    value={value}
                    onChangeText={setValue}
                    returnKeyType="send"
                    onSubmitEditing={handleSend}
                />
                <Pressable
                    onPress={handleSend}
                    disabled={!value.trim()}
                    style={({ pressed }) => [
                        styles.sendButton,
                        (!value.trim() || pressed) && styles.sendButtonDisabled,
                        pressed && value.trim() && styles.sendButtonPressed,
                    ]}>
                    <Ionicons name="arrow-up" size={20} color="#ffffff" />
                </Pressable>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        // Margin handled by parent
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 999,
        backgroundColor: '#f3f4f6',
        gap: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 4,
        fontSize: 14,
        color: '#111827',
    },
    sendButton: {
        width: 32,
        height: 32,
        borderRadius: 999,
        backgroundColor: '#4f46e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: '#e5e7eb',
    },
    sendButtonPressed: {
        backgroundColor: '#4338ca',
    },
});


