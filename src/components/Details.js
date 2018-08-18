import React, {Component} from 'react';
import { View,StyleSheet , ScrollView, FlatList  } from "react-native";
import {Container, Header, Left, Body, Right, Button, Icon, Title 
    , Card, CardItem, Text , Thumbnail, Content, List, ListItem  } from 'native-base';





class Details extends Component {

    constructor(props){
        super(props);
        this.state = {bio: '' };
    }


    _onPressButton(ID) {
        console.log("user name ID:" + ID);
        return fetch('https://api.github.com/users/' + ID)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    bio: responseJson.bio
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



    render() {
        const {navigation} = this.props;
        const uri = navigation.getParam('avatar');
        const uriIcon = 'https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/folder-512.png';



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
                                <Text      style={styles.H1} >{navigation.getParam('userName')}</Text>
                                <Text      style={styles.H2} >{this.state.bio}</Text>
                        </View>

                    <FlatList
                        data={this.state.dataRepo}
                        style={styles.flatViewContainer}
                        renderItem={({item}) =>


                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: uriIcon }} />
                                </Left>
                                <Body>
                                <Text>{item.name}</Text>
                                <Text note>{item.description}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.stargazers_count}</Text>
                                </Right>
                            </ListItem>
                        </List>

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
        color:'#666',
    },
    flatViewContainer: {
        marginTop: 10,
        flex: 3


    }
})