import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const RIDES_REMAINING = 8;
const TOTAL_RIDES = 20;
const PROGRESS = (RIDES_REMAINING / TOTAL_RIDES) * 100;

export function MTACard() {
    return (
        <ThemedView lightColor="#2563eb" darkColor="#1d4ed8" style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.titleRow}>
                    <View style={styles.iconBox}>
                        <Ionicons name="train-outline" size={18} color="#e0f2fe" />
                    </View>
                    <View>
                        <ThemedText style={styles.cardTitle}>MTA MetroCard</ThemedText>
                        <ThemedText style={styles.cardSubtitle}>Unlimited Weekly Pass</ThemedText>
                    </View>
                </View>
                <View style={styles.addButton}>
                    <Ionicons name="add-outline" size={16} color="#eff6ff" />
                    <ThemedText style={styles.addText}>Add</ThemedText>
                </View>
            </View>

            <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                    <ThemedText style={styles.progressLabel}>Rides Remaining</ThemedText>
                    <ThemedText style={styles.progressValue}>
                        {RIDES_REMAINING}/{TOTAL_RIDES}
                    </ThemedText>
                </View>
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarFill, { width: `${PROGRESS}%` }]} />
                </View>
                <View style={styles.footerRow}>
                    <ThemedText style={styles.expiryText}>Expires: Nov 22, 2025</ThemedText>
                    <View style={styles.detailsRow}>
                        <ThemedText style={styles.detailsText}>Details</ThemedText>
                        <Ionicons name="chevron-forward" size={14} color="#bfdbfe" />
                    </View>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 16,
        marginTop: 8,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconBox: {
        padding: 8,
        borderRadius: 12,
        backgroundColor: 'rgba(15, 118, 110, 0.3)',
    },
    cardTitle: {
        fontSize: 14,
        color: '#eff6ff',
        marginBottom: 2,
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#bfdbfe',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'rgba(239, 246, 255, 0.6)',
    },
    addText: {
        fontSize: 12,
        color: '#eff6ff',
    },
    progressSection: {
        gap: 6,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabel: {
        fontSize: 12,
        color: '#dbeafe',
    },
    progressValue: {
        fontSize: 12,
        color: '#eff6ff',
    },
    progressBarBackground: {
        height: 6,
        borderRadius: 999,
        backgroundColor: 'rgba(191, 219, 254, 0.4)',
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 999,
        backgroundColor: '#eff6ff',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    expiryText: {
        fontSize: 11,
        color: '#bfdbfe',
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    detailsText: {
        fontSize: 11,
        color: '#eff6ff',
    },
});


