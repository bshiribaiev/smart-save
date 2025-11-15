import React from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LeaderboardScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFEFE3', dark: '#20130C' }}
      headerImage={null}>
      <ThemedView style={{ gap: 12 }}>
        <ThemedText type="title">Leaderboard</ThemedText>
        <ThemedText>
          This is the Leaderboard tab. We&apos;ll mirror your wallet leaderboard design from the web
          UI here.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


