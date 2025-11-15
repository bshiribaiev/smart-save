import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type Location = {
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    distance: string;
    popular?: boolean;
};

const LOCATIONS: Location[] = [
    {
        name: 'Student Cafe',
        icon: 'cafe-outline',
        color: '#fbbf24',
        distance: '50m away',
        popular: true,
    },
    {
        name: 'Campus Bookstore',
        icon: 'book-outline',
        color: '#3b82f6',
        distance: '120m away',
    },
    {
        name: 'Dining Hall',
        icon: 'restaurant-outline',
        color: '#ef4444',
        distance: '200m away',
    },
    {
        name: 'Campus Store',
        icon: 'cart-outline',
        color: '#a855f7',
        distance: '85m away',
    },
];

export function CampusLocations() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <ThemedText type="subtitle" style={styles.title}>
                    Nearby Campus Locations
                </ThemedText>
                <ThemedText type="link" style={styles.viewAll}>
                    View all
                </ThemedText>
            </View>

            <View style={styles.grid}>
                {LOCATIONS.map((location) => (
                    <ThemedView key={location.name} style={styles.card}>
                        {location.popular && (
                            <View style={styles.popularBadge}>
                                <ThemedText style={styles.popularText}>Popular</ThemedText>
                            </View>
                        )}
                        <View style={[styles.iconPill, { backgroundColor: `${location.color}22` }]}>
                            <Ionicons name={location.icon} size={18} color={location.color} />
                        </View>
                        <ThemedText style={styles.locationName}>{location.name}</ThemedText>
                        <ThemedText style={styles.locationDistance}>{location.distance}</ThemedText>
                    </ThemedView>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    viewAll: {
        fontSize: 14,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
    },
    card: {
        width: '48%',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    iconPill: {
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 12,
        marginBottom: 8,
    },
    locationName: {
        fontSize: 14,
        marginBottom: 2,
    },
    locationDistance: {
        fontSize: 12,
        color: '#6b7280',
    },
    popularBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#f97316',
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    popularText: {
        fontSize: 10,
        color: '#ffffff',
    },
});


