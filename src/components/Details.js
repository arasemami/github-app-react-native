import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';



class Details extends Component {

    render() {
        const { goBack } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent  onPress={() => goBack()}  >
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.navigation.nameUser}</Title>
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