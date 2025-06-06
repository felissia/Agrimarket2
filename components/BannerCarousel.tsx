"use client"

import { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window")

interface BannerItem {
  id: number
  title: string
  subtitle: string
  category: string
  emoji: string
  color: string
}

interface BannerCarouselProps {
  data: BannerItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function BannerCarousel({ data, autoPlay = true, autoPlayInterval = 3000 }: BannerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollX = useSharedValue(0)
  const scrollViewRef = useRef<Animated.ScrollView>(null)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    },
    onMomentumEnd: (event) => {
      const index = Math.round(event.contentOffset.x / SCREEN_WIDTH)
      setActiveIndex(index)
    },
  })

  // Auto scroll functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (autoPlay) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % data.length
        scrollViewRef.current?.scrollTo({
          x: nextIndex * SCREEN_WIDTH,
          animated: true,
        })
        setActiveIndex(nextIndex)
      }, autoPlayInterval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [activeIndex, autoPlay, autoPlayInterval, data.length])

  const handleDotPress = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      animated: true,
    })
    setActiveIndex(index)
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <View key={item.id} 
          
          style={[styles.bannerContainer, { backgroundColor: item.color, width: SCREEN_WIDTH }]}>
            <View style={styles.bannerContent}>
              <View style={styles.bannerText}>
                <Text style={styles.bannerTitle}>{item.title}</Text>
                <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                <Text style={styles.bannerCategory}>{item.category}</Text>
              </View>
              <View style={styles.bannerImage}>
                <Text style={styles.bannerEmoji}>{item.emoji}</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <View
              style={[
                styles.paginationDot,
                {
                  backgroundColor: activeIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
                  width: activeIndex === index ? 24 : 8,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  bannerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  bannerSubtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 2,
  },
  bannerCategory: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginTop: 4,
  },
  bannerImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  bannerEmoji: {
    fontSize: 48,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
})
