import React, {Component} from 'react';
import {  StyleSheet} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title 
    , Card, CardItem, Text , Thumbnail, Content, List, ListItem  } from 'native-base';



class Repo extends Component{

    render(){
        const {navigation} = this.props;

        return(
        
            <Container>
                <Header style={styles.headerStyle}>
                        <Left>
                            <Button transparent  onPress={() => navigation.goBack()}  >
                                <Icon name='close'/>
                            </Button>
                        </Left>
                        <Body>
                            {/*{navigation.getParam('userName')}*/}
                            <Title>Repo</Title>
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
            </Container>

        );
    }
}

export default Repo;


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