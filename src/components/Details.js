import React, {Component} from 'react';
import { StyleSheet  } from "react-native";
import {Container, Header, Left, Body, Right, Button, Icon, Title 
    , Card, CardItem, Text , Thumbnail, Content  } from 'native-base';




class Details extends Component {

    constructor(props){
        super(props);

    }

    render() { 
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const {navigation} = this.props;
        let {username} = navigation.getParam('userName');
            console.log(username);

        return (
            <Container>
                <Header style={styles.headerStyle}>
                    <Left>
                        <Button transparent  onPress={() => navigation.goBack()}  >
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{navigation.getParam('userName')} </Title>
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

export default Details;


const styles = StyleSheet.create({

    headerStyle:{
        backgroundColor: '#34495E',

    },
    infoStyle:{
        textAlign: 'center',
        
        // flex:1,
        // flexDirection: 'row',


    }
})