import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import ListPlayer from './ListPlayer';
import Detail from './Detail';

//This function is to ignore the isMounted message because stacknavigator uses this deprecated function
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

//Define constant for navigate in the components
const App = createStackNavigator ({
    ScreenOne: {screen: ListPlayer},
    ScreenTwo: {screen: Detail}
});

export default App;
