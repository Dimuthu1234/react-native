import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';

import Navigation from './src/screens';
import { images, tabBarIcons } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';

export default class App extends React.Component{
  render() {
    return (
        <UtilityThemeProvider>
          <Navigation />
        </UtilityThemeProvider>
    );
  }
}
