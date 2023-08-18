import React, { useState, useEffect } from 'react';

/* Import basic components from react native */
import {
    ActionSheetIOS,
    ActivityIndicator,
    Button,
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';


// Version 1
// export default function App() {
//   /* using useState Hook for creating state*/
//   const [count, setCount] = useState(0);
//   return (
//     /* using state in button and updating on click*/
//     <SafeAreaView>
//       <StatusBar />
//       <View style={styles.view}>
//         {/* using state in button and updating on click*/}
//         <Button onPress={() => setCount(count + 1)} title={`Count is ${count}`} />
//       </View>
//     </SafeAreaView>
//   );
// }

// Version 2
// function App() {
//   // state for loading
//   const [isLoading, setLoading] = useState(true);
//   // state to hold fetched data
//   const [data, setData] = useState(null);
//   // use effect to fire up on component load
//   useEffect(() => {
//     fetch("https://random.dog/woof.json")
//       .then((response) => response.json())
//       // set the data
//       .then((json) => setData(json.url))
//       // if error log the error
//       .catch((error) => console.error(error))
//       // stop loading(by setting the isLoading false)
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       <SafeAreaView />
//       {/*Check if the photo is loading..*/}
//       {isLoading ? <ActivityIndicator /> : <Photo data={data} />}
//       <Text>{data}</Text>
//     </View>
//   );
// }

// Version 3
const App = () => {
    const [result, setResult] = useState("🔮");

    const onPress = () =>
        // open sheet
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Generate number", "Reset"],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
                userInterfaceStyle: 'dark'
            },
            buttonIndex => {
                // handle button press on the sheet
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    setResult(Math.floor(Math.random() * 100) + 1);
                } else if (buttonIndex === 2) {
                    setResult("🔮");
                }
            }
        );

    return (
        <View style={styles.container}>
            <Text style={styles.result}>{result}</Text>
            <Button onPress={onPress} title="Show Action Sheet" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    result: {
        fontSize: 64,
        textAlign: "center"
    }
});

export default App;


//create our Photo component.
function Photo({ data }) {
    return (
        <View>
            {/*If the data prop is not undefined, display the image*/}
            {data ? (
                <Image
                    style={{
                        width: 350,
                        height: 400,
                    }}
                    source={{
                        uri: data,
                    }}
                />
            ) : (
                <Text>No Image</Text>
            )}
        </View>
    );
}




