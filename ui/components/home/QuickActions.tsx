import React from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export function QuickActions() {
    const actions = [
        { icon: 'arrow-up-circle-outline' as const, label: 'Send' },
        { icon: 'add-circle-outline' as const, label: 'Top Up' },
        { icon: 'qr-code-outline' as const, label: 'Scan QR' },
        { icon: 'people-outline' as const, label: 'Split' },
    ];

    return (
        <ThemedView style={styles.container}>
            {actions.map((action) => (
                <Pressable
                    key={action.label}
                    style={styles.action}
                    onPress={() => Alert.alert(action.label, 'This action is coming soon!')}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name={action.icon} size={22} color="#ffffff" />
                    </View>
                    <ThemedText style={styles.label}>{action.label}</ThemedText>
                </Pressable>
            ))}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    action: {
        flex: 1,
        alignItems: 'center',
        gap: 6,
    },
    iconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#4f46e5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    label: {
        fontSize: 12,
        color: '#4b5563',
    },
});


