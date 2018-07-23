import React from 'react'
import { Platform } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import Splash from './splash';


class Root extends React.Component {


  componentDidMount() {
    if (Platform.OS !== 'ios') SplashScreen.hide()
    console.disableYellowBox = true
  }

  render() {
    return (
    
        <Splash />
 

    )
  }
}

export default Root
