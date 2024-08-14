import React, { useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Svg, { G, Path, Text as SvgText } from "react-native-svg";

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
};

const DonutChart = () => {
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const totalSegments = 10;
  const segmentPercentage = 100 / totalSegments;

  const radius = 150; // Larger radius
  const strokeWidth = 40; // Increase stroke width to cover potential gaps
  const spaceBetween = 2; // Ensure there is no gap between segments

  const animationValues = Array.from(
    { length: totalSegments },
    () => new Animated.Value(0)
  );

  const animateSegments = (percentage) => {
    animationValues.forEach((value, index) => {
      Animated.timing(value, {
        toValue: percentage >= (index + 1) * segmentPercentage ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleTap = (index) => {
    const newPercentage =
      selectedPercentage === (index + 1) * segmentPercentage
        ? 0
        : (index + 1) * segmentPercentage;

    setSelectedPercentage(newPercentage);
    animateSegments(newPercentage);
  };

  const scaleInterpolation = (index) =>
    animationValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.1],
    });

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2} style={styles.svgContainer}>
        <G rotation="0" origin={`${radius}, ${radius}`}>
          {Array.from({ length: totalSegments }).map((_, index) => {
            const startAngle = index * (360 / totalSegments) + spaceBetween / 2;
            const endAngle =
              (index + 1) * (360 / totalSegments) - spaceBetween / 2;

            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleTap(index)}
              >
                <AnimatedPath
                  d={describeArc(
                    radius,
                    radius,
                    radius - strokeWidth / 2,
                    startAngle,
                    endAngle
                  )}
                  fill="none"
                  stroke={
                    selectedPercentage >= (index + 1) * segmentPercentage
                      ? "#351F17"
                      : "white"
                  }
                  strokeWidth={strokeWidth}
                  style={{
                    transform: [{ scale: scaleInterpolation(index) }],
                  }}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </G>
        <SvgText
          fontFamily="Sans-serif"
          fontWeight="bold"
          fill="black"
          fontSize="50"
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {`${Math.round(selectedPercentage)}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40%",
    backgroundColor: "transparent", // Match this with your app background
  },
  svgContainer: {
    backgroundColor: "transparent", // Try setting this to transparent to match your app background
  },
});

export default DonutChart;
