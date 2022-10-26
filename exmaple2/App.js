import React, { useState,useRef, useEffect } from 'react';
import { Button,StyleSheet,Animated, Text, View } from 'react-native';

// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

//   useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 240,
//         duration: 1000,
//       }
//     ).start();
//   }, [fadeAnim])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         ...props.style,
//         paddingLeft: fadeAnim,         // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

export default function App() {
  const [run, setRun] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current 
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: run ? 240 : 0,
        duration: 1000,
      }
    ).start();
  },[run])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={{width: 250, height: 50, paddingLeft:fadeAnim}}>
        <View style={{width:50, height:50,backgroundColor:"#ccc"}}></View>
      </Animated.View>
      <Button title='Run' onPress={()=>setRun(!run)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent:"flex-start"
    paddingLeft:0

  },
});


