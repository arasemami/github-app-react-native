import React , {Component} from 'react';
import { View , Text , StyleSheet } from 'react-native';



export default class Index extends Component {


    render(){

        return (
               <View style={styles.container}>
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