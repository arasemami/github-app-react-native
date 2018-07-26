import React , {Component} from 'react';
import { View , Text , StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';



export default class Index extends Component {


    render(){

        return (
               <View style={styles.container}>
                <Image source={ require('../asset/img/logo.png')} style={{width:100, height:100, marginTop:100}} />
                   <Text style={styles.githubAppText}>
                      Github App
                   </Text>

                   <View style={styles.textContainer}>
                       <TextInput
                       style={{height: 40 , width:400, paddingLeft:30}}
                       placeholder="Seach github account . . ."
                    //    onChangeText={(text) => this.setState({text})}
                        />
                   </View>

                    <TouchableOpacity onPress={this._onPressButton} style={styles.searchButton}>
                        <Text>Search</Text>
                    </TouchableOpacity>
               </View>
        );
    }
}



const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'#34495E',
    textAlign:'center',
    alignItems: 'center',
    flexDirection: 'column',
},
githubAppText:{
fontSize: 22,
color:'#ECF0F1',
fontWeight: 'bold'

},
textContainer:{
    width:400,
    marginTop: 25,
    backgroundColor:'#fff',
    borderRadius: 5,
    padding: 5
},
searchButton:{
    backgroundColor:'#5DADE2',
    width:400,
    borderRadius: 5,


}

})