import React from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AIScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5ECFF', dark: '#161022' }}
      headerImage={null}>
      <ThemedView style={{ gap: 12 }}>
        <ThemedText type="title">AI Assistant</ThemedText>
        <ThemedText>
          This is the AI tab. We&apos;ll bring over the AI assistant experience from the web UI
          here.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


