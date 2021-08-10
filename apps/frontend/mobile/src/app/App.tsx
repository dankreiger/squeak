import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { i18n } from '@squeak-frontend/shared.i18n';
import { ALL_THEMES } from '@squeak-frontend/shared.ui';
import { LANG_LIST } from '@squeak-shared.constants';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components';
import { Child } from '../components/Child/Child';

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./logo.png')} />
        <Text style={styles.heading} testID="heading">
          {t('web.footer.date', { date: new Date() })}
          <View>
            {LANG_LIST.map((lng: string) => (
              <Button
                key={lng}
                title={lng}
                onPress={() => {
                  i18n.changeLanguage(lng);
                }}
              ></Button>
            ))}
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <Child />
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit{' '}
            <Text style={styles.highlight}>apps/frontend/mobile/App.tsx</Text>{' '}
            to change this screen and then come back to see your edits.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions /> Alternatively, press{' '}
            <Text style={styles.highlight}>R</Text> in the bundler terminal
            window.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => openURLInBrowser('https://nx.dev')}
            testID="nx-link"
          >
            <Text style={styles.sectionDescription}>
              Visit <Text style={styles.link}>nx.dev</Text> for more info about
              Nx.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen = () => <Text style={styles.header}>DetailsScreen</Text>;

const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setState] = useState('');
  const callApi = async () => {
    try {
      const res = await fetch('http://localhost:3333/api/restaurants');
      const json = await res.json();
      console.log({ json });
      setState(json);
      return json;
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <ThemeProvider theme={ALL_THEMES.v0}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  header: {
    // backgroundColor: '#143055',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.lighter,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    // color: '#45bc98',
  },
});

export default App;
