import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { WalletHeader } from '@/components/home/WalletHeader';
import { BalanceCard } from '@/components/home/BalanceCard';
import { QuickActions } from '@/components/home/QuickActions';
import { CampusLocations } from '@/components/home/CampusLocations';
import { MTACard } from '@/components/home/MTACard';
import { TransactionList } from '@/components/home/TransactionList';
import { ChatInput } from '@/components/home/ChatInput';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ThemedView style={styles.chatInputWrapper}>
          <ChatInput />
        </ThemedView>
      </SafeAreaView>
      <ParallaxScrollView>
        <ThemedView style={styles.screen}>
          <WalletHeader />
          <BalanceCard />
          <QuickActions />
          <CampusLocations />
          <MTACard />
          <TransactionList />
        </ThemedView>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: 'transparent',
  },
  chatInputWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  screen: {
    gap: 12,
  },
});
