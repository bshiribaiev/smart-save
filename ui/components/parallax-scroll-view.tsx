import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage?: ReactElement | null;
  headerBackgroundColor?: { dark: string; light: string };
  headerHeight?: number;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  headerHeight,
}: Props) {
  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const effectiveHeaderHeight = headerHeight ?? HEADER_HEIGHT;
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-effectiveHeaderHeight, 0, effectiveHeaderHeight],
            [-effectiveHeaderHeight / 2, 0, effectiveHeaderHeight * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-effectiveHeaderHeight, 0, effectiveHeaderHeight],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16}>
      {(headerImage || headerBackgroundColor) && (
        <Animated.View
          style={[
            styles.header,
            {
              height: effectiveHeaderHeight,
              backgroundColor:
                headerBackgroundColor?.[colorScheme] ?? backgroundColor,
            },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
      )}
      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 12,
    gap: 16,
    overflow: 'hidden',
  },
});
