import React , {Component} from 'react';
import { View , Text , StyleSheet, Image } from 'react-native';



export default class Index extends Component {


    render(){

        return (
               <View style={styles.container}>
                <Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
                   <Text>
                       Hello to index page
                   </Text>
               </View>
        );
    }
}



const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'#48C9B0',
    textAlign:'center',
    alignItems: 'center',
    flexDirection: 'row',
    

    


}

})