import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';




class Details extends Component {

    constructor(props){
        super(props);

    }

    render() { 
        const {navigation} = this.props;
        let {username} = navigation.getParam('userName');
            console.log(username);

        return (
            <Container>
                <Header>
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