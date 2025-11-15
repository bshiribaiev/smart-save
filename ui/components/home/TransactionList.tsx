import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type Transaction = {
    id: number;
    name: string;
    location: string;
    date: string;
    amount: number;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
};

const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        name: 'Student Cafe',
        location: 'West Campus',
        date: 'Today, 2:30 PM',
        amount: -8.5,
        icon: 'cafe-outline',
        color: '#fbbf24',
    },
    {
        id: 2,
        name: 'MTA Subway',
        location: 'Times Square',
        date: 'Today, 9:00 AM',
        amount: -2.9,
        icon: 'train-outline',
        color: '#3b82f6',
    },
    {
        id: 3,
        name: 'Dining Hall',
        location: 'East Campus',
        date: 'Yesterday, 7:45 PM',
        amount: -12.5,
        icon: 'restaurant-outline',
        color: '#ef4444',
    },
    {
        id: 4,
        name: 'Campus Bookstore',
        location: 'Main Building',
        date: 'Nov 13, 2025',
        amount: -45.99,
        icon: 'book-outline',
        color: '#a855f7',
    },
    {
        id: 5,
        name: 'Split from Sarah',
        location: 'Lunch payment',
        date: 'Nov 13, 2025',
        amount: 7.5,
        icon: 'arrow-down-circle-outline',
        color: '#22c55e',
    },
];

export function TransactionList() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <ThemedText type="subtitle" style={styles.title}>
                    Recent Transactions
                </ThemedText>
                <ThemedText type="link" style={styles.seeAll}>
                    See all
                </ThemedText>
            </View>

            <ThemedView style={styles.listCard}>
                {TRANSACTIONS.map((tx, index) => (
                    <View
                        key={tx.id}
                        style={[styles.row, index < TRANSACTIONS.length - 1 && styles.rowDivider]}>
                        <View style={[styles.iconCircle, { backgroundColor: `${tx.color}22` }]}>
                            <Ionicons name={tx.icon} size={18} color={tx.color} />
                        </View>
                        <View style={styles.infoColumn}>
                            <ThemedText style={styles.name}>{tx.name}</ThemedText>
                            <ThemedText style={styles.meta}>
                                {tx.location} · {tx.date}
                            </ThemedText>
                        </View>
                        <ThemedText
                            style={[
                                styles.amount,
                                tx.amount > 0 ? styles.amountPositive : styles.amountNegative,
                            ]}>
                            {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                        </ThemedText>
                    </View>
                ))}
            </ThemedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        gap: 8,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 18,
    },
    seeAll: {
        fontSize: 14,
    },
    listCard: {
        borderRadius: 20,
        paddingHorizontal: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 12,
    },
    rowDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoColumn: {
        flex: 1,
    },
    name: {
        fontSize: 14,
        marginBottom: 2,
    },
    meta: {
        fontSize: 12,
        color: '#6b7280',
    },
    amount: {
        fontSize: 14,
        fontWeight: '600',
    },
    amountPositive: {
        color: '#16a34a',
    },
    amountNegative: {
        color: '#111827',
    },
});


