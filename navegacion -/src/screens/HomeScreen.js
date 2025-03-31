import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bannerTitle}>Bienvenido a Reciclaje Eco</Text>
        <Text style={styles.bannerText}>Ayudamos a cuidar el medio ambiente</Text>
        <Button
          title="Ir a Detalles"
          onPress={() => navigation.navigate('Perfil')} // Cambiado de 'Details' a 'Perfil'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#CEFF25', // Verde para el encabezado
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  bannerText: {
    fontSize: 16,
    color: '#000000',
  },
});