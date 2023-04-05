import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RotasNavBar from './components/JuniorTI'
//import RotasNavBar from './components/PlenoTI'
//import RotasNavBar from './components/SeniorTI'

export default function App(){
  return (
    <NavigationContainer>
      <RotasNavBar/>
    </NavigationContainer>
  )
} 