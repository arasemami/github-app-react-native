import React, {Component} from 'react';
import { View,StyleSheet , ScrollView  } from "react-native";
import {Container, Header, Left, Body, Right, Button, Icon, Title 
    , Card, CardItem, Text , Thumbnail, Content, List, ListItem  } from 'native-base';




class Details extends Component {

    constructor(props){
        super(props);
        this.state = {userId: 'arasemami' };
    }


    _onPressButton(ID) {
        console.log("user name ID:" + ID);
        return fetch('https://api.github.com/users/' + ID)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson,
                }, function () {

                });
                // TODO Delete latter
                console.log(this.state.data.bio)
            })
            .catch((error) => {
                console.error(error);
            });


    }

    componentWillMount(){
       // console.log("user name is:" + this.state.userId);
        this._onPressButton(this.state.userId);

    }

    render() { 

        const {navigation} = this.props;
        const  infoItem =  this.state.dataSource;
        const uri = navigation.getParam('avatar');
       // console.log(navigation.getParam('userName'));
        console.log("info" + infoItem);




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

                                <Thumbnail   style={styles.thumbnailIMG}   source={{uri: uri }} />
                                <Text style={styles.H1} >{navigation.getParam('userName')}</Text>
                                <Text style={styles.H2} >Front end ss  |  000</Text>




                    </View>

                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: uri }} />
                                </Left>
                                <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>

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
    }
})