import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator  } from "react-navigation"; // Version can be specified in package.json
import SplashScreen from 'react-native-splash-screen';
 


import SplashScreen2 from './splash';
import IndexScreen from './components/index';
import DetailsScreen from './components/Details';
import RepoScreen from './components/Repo';



const RootStack = createStackNavigator({
    Splash: {screen: SplashScreen2 },
    Index: {screen: IndexScreen},
    Details: {screen: DetailsScreen},
    Repo: {screen: RepoScreen},
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

  },
   

  
);


export default  class Root extends React.Component {


  componentDidMount() {
    if (Platform.OS !== 'ios') SplashScreen.hide()
    console.disableYellowBox = true
  }

  render() {
    return (
    
       // <Splash />

       <RootStack />
 

    )
  }
}

  
