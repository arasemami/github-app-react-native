//
//
// 
//
//

import React, {Component} from 'react';
import { View,StyleSheet , ScrollView, FlatList , TouchableOpacity  } from "react-native";
import {Container, Header, Left, Body, Right, Button, Icon, Title 
    , Card, CardItem, Text , Thumbnail, Content, List, ListItem  } from 'native-base';





class Details extends Component {

    constructor(props){
        super(props);
        this.state = { dataUser:'' };
    }


    _onPressButton(ID) {
        console.log("user name ID:" + ID);
        return fetch('https://api.github.com/users/' + ID)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataUser: responseJson
                }, function () {

                });
                // TODO Delete latter
             //  console.log(this.state.bio)

            })
            .catch((error) => {
                console.error(error);
            });


    }

    _getRepositories(ID) {
        this.setState({
            isLoading: true
        })

        return fetch('https://api.github.com/users/' + ID + '/repos')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataRepo: responseJson,
                }, function () {

                });
                console.log( responseJson)
            })
            .catch((error) => {
                console.error(error);
            });


    }

    componentWillMount(){
        const {navigation} = this.props;
       // console.log("user name is:" + navigation.getParam('userName'));
        this._onPressButton(navigation.getParam('userName'));
        this._getRepositories(navigation.getParam('userName'));

    }


    _getDescriptopn(s)
{
    /* Chechking if description is empty or null fill somethign and if 
       description is biger the 30 char just get first 30 char. */

    if (s === null  )
        { return("No description and details.\n..."); }
    else
        { return(s.substring(0,100)); }

}

_openViewPage(){
   
    //this.props.navigation.navigate('Details', {userName:user.login, avatar:user.avatar_url});
    this.props.navigation.navigate('Repo');
}


    render() {
        const {navigation} = this.props;
        const uri = navigation.getParam('avatar');
        const uriIcon = 'https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/folder-512.png'; // defualt image for reposotori 
        let userData = this.state.dataUser;  // Get user info like bio , user name , web site 
        console.log(userData);


        return (
            <Container>
                <Header style={styles.headerStyle}>
                    <Left>
                        <Button transparent  onPress={() => navigation.goBack()}  >
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    {/*{navigation.getParam('userName')}*/}
                    <Title>{navigation.getParam('userName')}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search'/>
                        </Button>
                        <Button transparent>
                            <Icon name='heart'/>
                        </Button>
                        <Button transparent>
                            <Icon name='more'/>
                        </Button>
                    </Right>
                </Header>

                <ScrollView>

                        <View style={styles.thumbnailStyle}>
                                <Thumbnail style={styles.thumbnailIMG}   source={{uri: uri }} />
                                <Text      style={styles.H1} >{userData.name}</Text>
                                <Text      style={styles.H2} >{userData.company}</Text>
                                <Text      style={styles.H2} >{userData.bio}</Text>
                                <Text      style={styles.H3} >{userData.blog}   {userData.email}    {userData.location}</Text>
                                <Text      style={styles.H4} >Following {userData.following} | Followers {userData.followers} | Repositories {userData.public_repos}</Text>
                        </View>

                    <FlatList
                        data={this.state.dataRepo}
                        style={styles.flatViewContainer}
                        renderItem={({item}) =>

                        <TouchableOpacity onPress={ () => this._openViewPage()} >

                        <List>
                            <ListItem avatar>
                                <Left >
                                    <Thumbnail source={{ uri: uriIcon }}  />
                                </Left>
                                <Body>
                                <Text>{item.name.toUpperCase().slice(0,50)}</Text>
                                <Text note>{ this._getDescriptopn(item.description)}</Text>
                                <Text note>Pushed at : {item.pushed_at.slice(0,10)}</Text>
                                </Body>
                                <Right>
                                    {/* <Text note>{item.pushed_at.slice(0,10)}</Text> */}
                                    <Button rounded info onPress={ () => this._openViewPage()}>
                                       <Icon name='ios-arrow-forward'/>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                        </TouchableOpacity>

                        }
                        keyExtractor={(item, index) => index}
                    />

                </ScrollView>







            </Container>
        );
    }
}

export default Details;


const styles = StyleSheet.create({

    headerStyle:{
        backgroundColor: '#34495E',
    },
    thumbnailStyle:{
        backgroundColor:'#333',
        padding:20,
        textAlign:'center',
        alignItems:'center'


    },
    thumbnailIMG:{
        marginTop:20,
        width:200,
        height:200,
        borderRadius:200,
        borderWidth: 3,
        borderColor: '#444',

    },
    H1:{
        fontSize:25,
        color:'#888',
    },
    H2:{
        fontSize:14,
        color:'#777',
    },
    H3:{
        fontSize:12,
        color:'#666',
    },
    H4:{
        fontSize:12,
        color:'#555',
    },
    flatViewContainer: {
        marginTop: 10,
        flex: 3


    }
})