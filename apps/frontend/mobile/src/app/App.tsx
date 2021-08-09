import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Link, NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import { Child } from '../components/Child/Child';
import i18n, { lngs } from '../_temp';

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <Text style={styles.topic}>Please select a topic.</Text>}
    />
  </View>
);

const App = () => {
  const [state, setState] = useState('');
  const { t } = useTranslation();
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
    // callApi();
  }, []);
  return (
    <ThemeProvider
      theme={{
        colors: {
          red: 'red',
          purple: 'purple',
        },
      }}
    >
      <NativeRouter>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.nav}>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>About</Text>
              </Link>
              <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Topics</Text>
              </Link>
            </View>
            <View style={styles.header}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Image style={styles.logo} source={require('./logo.png')} />
              <Text style={styles.heading} testID="heading">
                {t('footer.date', { date: new Date() })}
                {/* {JSON.stringify(state)} */}
                <View>
                  {Object.keys(lngs).map((lng: string) => (
                    <Button
                      key={lng}
                      title={lng}
                      onPress={() => {
                        i18n.changeLanguage(lng);
                      }}
                    ></Button>
                  ))}
                </View>

                <Child />
              </Text>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit{' '}
                  <Text style={styles.highlight}>
                    apps/frontend/mobile/App.tsx
                  </Text>{' '}
                  to change this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions /> Alternatively, press{' '}
                  <Text style={styles.highlight}>R</Text> in the bundler
                  terminal window.
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
                    Visit <Text style={styles.link}>nx.dev</Text> for more info
                    about Nx.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NativeRouter>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: '#143055',
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
    color: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    color: '#45bc98',
  },
});

export default App;
