import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import StackNavigatior from './Navigation/StackNavigatior';
import { ThemeContext } from './theme-context';
import 'react-native-get-random-values'


export default function App() {

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };


  return (

    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <StackNavigatior />
          <StatusBar style="auto" />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}
