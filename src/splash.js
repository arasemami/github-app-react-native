import React, {Component } from 'react';
import { View , Text , StyleSheet , Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';





export default class Splash extends Component {



        componentDidMount() {
            // do stuff while splash screen is shown
            // After having done stuff (such as async tasks) hide the splash screen
            if (Platform.OS !== 'ios')
              SplashScreen.hide();
        }




render(){


    return (



            <View style={styles.container} >
                    <Text >  wwww to splash screen </Text>
                    <Text >  wwww to splash screen </Text>
                    <Text >  wwww to splash screen </Text>
                    <Text >  wwww to splash screen </Text>
                    <Text >  wwww to splash screen </Text>
                
            </View>
    
    );
}

}



const styles = StyleSheet.create({
        container:{
                
              flex:1,
              textAlign:'center',
              color:'#000',
              

        }

})