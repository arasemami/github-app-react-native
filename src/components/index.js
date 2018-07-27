import React , {Component} from 'react';
import { View , Text , StyleSheet, Image, TextInput, TouchableOpacity , ActivityIndicator, FlatList } from 'react-native';



export default class Index extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true, txtUsername: ''}
        
      }
    

    _onPressButton(){
        this.setState({
            isLoading: true
            })
         
        return fetch('https://api.github.com/search/users?q='+ this.state.txtUsername)
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.items,
            }, function(){
    
            });
            console.log(responseJson.items)
          })
          .catch((error) =>{
            console.error(error);
          });
 

    }

    componentDidMount(){
        // console.log(this.state.text)
        return  (
            this.setState({
            isLoading: false
            })

        )
      }
    


    render(){

        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

          

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
                        onChangeText={(text) => this.setState({txtUsername:text})}
                        value={this.state.txtUsername}
                        />
                   </View>

                    <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.searchButton}>
                        <Text style={{padding:12, textAlign:'center', color:'#000'}}>Search</Text>
                    </TouchableOpacity>
            
                         <FlatList
          data={this.state.dataSource}
          style={styles.ScrollViewContainer}
          renderItem={({item}) =>  
            <TouchableOpacity style={{flex:1, flexDirection:'row',margin:10 , backgroundColor:'#fff', padding:10, borderRadius:100 }}>
                        <Image  source={{uri: item.avatar_url }} style={{width:70, height:70 , borderRadius:100   }} /> 
                        <Text style={{ fontSize:20}}> {item.login}</Text>
            </TouchableOpacity>
        }
          keyExtractor={(item, index) => index}
        />


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
    marginTop:10,
    textAlign:'center'
},
ScrollViewContainer:{
    marginTop:10,
    width:600,
    
}

})