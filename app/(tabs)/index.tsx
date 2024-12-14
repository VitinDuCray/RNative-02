import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/161778672?v=4' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Victor</Text>
      <p style={styles.arroba}>@vitinducray</p>
      <Text style={styles.description}>
        Saudades da ex
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#432273',
    borderRadius: 10,
    width: 400,
    alignContent: 'center',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#86ff70',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#86ff70',
    textAlign: 'center',
  },
  arroba: {
    color: '#86ff70',
  },
});