import React from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function EventsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E0ECFF', dark: '#101827' }}
      headerImage={null}>
      <ThemedView style={{ gap: 12 }}>
        <ThemedText type="title">Events</ThemedText>
        <ThemedText>
          This is the Events tab. We&apos;ll hook this up to your wallet events design from the web
          UI next.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


