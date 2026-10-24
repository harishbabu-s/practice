import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

const AnimatedSpinner = () => {
    const rotateAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.spinnerContainer}>
            <Animated.View
                style={[
                    styles.spinner,
                    { transform: [{ rotate: rotateInterpolate }] },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        width: '20%',
        // height: ,
        aspectRatio: 1,
        borderWidth: 5,
        borderColor: '#000',
        borderTopColor: 'transparent',
        borderRadius: 25,
    },
});

//     return (
//         <View style={styles.spinnerContainer}>
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="80"
//                 height="80"
//                 viewBox="0 0 100 100"
//                 preserveAspectRatio="xMidYMid"
//                 style={{ animation: 'spin 1s linear infinite' }}
//             >
//                 <circle
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     stroke="lightgray"
//                     strokeWidth="10"
//                     fill="none"
//                 />
//                 <circle
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     stroke="blue"
//                     strokeWidth="10"
//                     fill="none"
//                     strokeDasharray="251.32741228718345"
//                     strokeDashoffset="125.66370614359172"
//                     style={{ animation: 'rotate 1.5s linear infinite' }}
//                 />
//             </svg>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     spinnerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

export default AnimatedSpinner;