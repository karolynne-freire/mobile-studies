import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, Button, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

export default function App() {
  const image1 =
    'https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d';
      const image2 =
    'https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d';
      const image3 =
    'https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d';
      const image4 =
    'https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d';

  return (
    <>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>BTS</Text>

        <Image
          source={{ uri: image1 }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
              <Image
          source={{ uri: image2 }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
              <Image
          source={{ uri: image3 }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
              <Image
          source={{ uri: image4 }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});