import React , {Component} from 'react';
import { View , Text , StyleSheet, Image, TextInput, TouchableOpacity , ActivityIndicator, FlatList, ScrollView  } from 'react-native';



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
               <ScrollView style={{ padding:10}}>
                <Image source={ require('../asset/img/logo.png')} style={{width:100, height:100,  alignSelf:'center'}} />
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

          
            <TouchableOpacity style={{flex:1, flexDirection:'row',margin:2 ,justifyContent: 'space-between', backgroundColor:'#85929E', padding:10, borderRadius:100 }}>
                        <Image  source={{uri: item.avatar_url }} style={{width:50, borderRadius:100   }} /> 
                        <Text style={{ fontSize:14 , paddingTop:12,textAlign:'left' }}> {item.login}</Text>
                        <View style={{borderRadius:100, backgroundColor:'#F1C40F'  }}>
                           <View s style={{  width:80, height:40, marginTop:10, }} >
                              <Text style={{textAlign:'center', fontWeight:'bold', color:'#000', alignSelf:'center'}}>Follow</Text>
                            </View>
                        </View>
                        
            </TouchableOpacity>
        }
          keyExtractor={(item, index) => index}
        />

</ScrollView>
               </View>
        );
    }
}



const styles = StyleSheet.create({

container:{
    flex:2,
    backgroundColor:'#34495E',
    textAlign:'center',
    alignItems: 'center',
    flexDirection: 'row',
    
    justifyContent:'space-between'
},
githubAppText:{
fontSize: 22,
color:'#ECF0F1',
fontWeight: 'bold',
textAlign:'center'

},
textContainer:{
   
    marginTop: 25,
    backgroundColor:'#fff',
    borderRadius: 5,
    padding: 5
},
searchButton:{
    backgroundColor:'#5DADE2',
    
    borderRadius: 5,
    marginTop:10,
    textAlign:'center'
},
ScrollViewContainer:{
    marginTop:10,
    
    
}

})