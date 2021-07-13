import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface TranslationsProps {}

class Translations extends React.Component<TranslationsProps> {
  // Don't modify the animated value directly. It is usually stored as a state variable in class components.
  state = {
    translation: new Animated.Value(0),
  };

  onPressAnimate = () => {
    Animated.timing(this.state.translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start(({finished}) => console.log('complete', finished));
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedBox,
            {transform: [{translateY: this.state.translation}]},
          ]}
        />
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => this.onPressAnimate()}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  clickButton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 18,
  },
  animatedBox: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
  },
});

// const Translations: React.FC<TranslationsProps> = () => {
/* 
      Don't modify the animated value directly. You can use the useRef Hook to return a mutable ref object.
      This ref object's current property is initialized as the given argument and persists throughout the component lifecycle.   
   */
//   const translation = useRef(new Animated.Value(0)).current;

//   useEffect(()=>{

//      new Array(5000).fill(0).map(()=>console.log("Hey"));
//     Animated.timing(translation,{
//       toValue:-50,
//       useNativeDriver:true
//     }).start();
//   },[]);

//   return (
//     <Animated.View
//       style={{
//         height: 100,
//         width: 100,
//         backgroundColor: 'yellow',
//         transform:[{translateY:translation}]
//       }}/>
//   );
// }

// const styles = StyleSheet.create({});

export {Translations};
