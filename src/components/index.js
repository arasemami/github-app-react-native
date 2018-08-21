import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    ScrollView
} from 'react-native';
import {Container, Header, Title, Content, Left, Button, Icon, Body, Right} from 'native-base';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, txtUsername: '' , baseURL:'https://api.github.com/'};


    }


    _onPressButton() {
        this.setState({
            isLoading: true
        })

        return fetch(this.state.baseURL + 'search/users?q=' + this.state.txtUsername)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.items,
                }, function () {

                });
                console.log( responseJson.items)
            })
            .catch((error) => {
                console.error(error);
            });


    }

    componentDidMount() {
        // console.log(this.state.text)
        return (
            this.setState({
                isLoading: false
            })

        )
    }

 
    _openViewPage(user){
        console.log(user);
        this.props.navigation.navigate('Details', {userName:user.login, avatar:user.avatar_url});

    }



    render() {

        const { navigate } = this.props.navigation;

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>

                </View>
            )
        }


        return (
            <Container>

                <Header style={{backgroundColor: '#34495E', border:0}}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Github...</Title>
                    </Body>
                    <Right/>
                </Header>


                <View style={styles.container}>


                    <ScrollView style={{padding: 10}}>

                        <Image source={require('../asset/img/logo.png')}
                               style={{width: 100, height: 100, alignSelf: 'center'}}/>
                        <Text style={styles.githubAppText}>
                            Github App
                        </Text>

                        <View style={styles.txtSearchBox}>

                            <TextInput
                                style={{
                                    height: 40,
                                    paddingLeft: 30,
                                    flex: 2,
                                    borderRadius: 50,
                                    paddingTop: 14,
                                    backgroundColor: '#fff'
                                }}
                                placeholder="Search github account . . ."
                                onChangeText={(text) => this.setState({txtUsername: text})}
                                value={this.state.txtUsername}
                            />


                            <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.searchButton}>
                                <Text style={{padding: 15, textAlign: 'center', color: '#000'}}>Search</Text>
                            </TouchableOpacity>

                        </View>


                        {/*<TouchableOpacity onPress={() => navigate('Details')} style={styles.searchButton}>*/}
                            {/*<Text style={{padding: 12, textAlign: 'center', color: '#000'}}>Go </Text>*/}
                        {/*</TouchableOpacity>*/}

                        <FlatList
                            data={this.state.dataSource}
                            style={styles.flatViewContainer}
                            renderItem={({item}) =>

                                <TouchableOpacity onPress={ () => this._openViewPage(item)} style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    margin: 2,
                                    justifyContent: 'space-between',
                                    backgroundColor: '#85929E',
                                    padding: 10,
                                    borderRadius: 100
                                }}>
                                    <Image source={{uri: item.avatar_url}} style={{width: 50, borderRadius: 100}}/>
                                    <Text style={{fontSize: 14, paddingTop: 12, textAlign: 'left'}}> {item.login}</Text>
                                    <View style={{borderRadius: 100, backgroundColor: '#F1C40F'}}>
                                        <View s style={{width: 80, height: 40, marginTop: 10,}}>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: '#000',
                                                alignSelf: 'center',
                                                paddingTop: 5
                                            }}>Follow</Text>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index}
                        />

                    </ScrollView>
                </View>


            </Container>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 2,
        backgroundColor: '#34495E',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtSearchBox: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 10,
        padding: 5
    },
    githubAppText: {
        fontSize: 22,
        color: '#ECF0F1',
        fontWeight: 'bold',
        textAlign: 'center'

    },

    searchButton: {
        backgroundColor: '#5DADE2',
        borderRadius: 100,
        textAlign: 'center',
        justifyContent: 'center',


    },
    flatViewContainer: {
        marginTop: 10,
        flex: 3


    }

})


export default Index;