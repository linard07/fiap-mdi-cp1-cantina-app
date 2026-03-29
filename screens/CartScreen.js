import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const { item } = route.params;

  const [cart, setCart] = useState([item]);

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Carrinho</Text>

      {cart.length === 0 ? (
        <Text style={{ color: '#fff' }}>Carrinho vazio</Text>
      ) : (
        cart.map((i, index) => (
          <Text key={index} style={{ color: '#fff' }}>
            {i.name} - R${i.price}
          </Text>
        ))
      )}

      <Text style={{ marginTop: 20, color: '#ED1C24' }}>
        Total: R${total}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Pedido realizado com sucesso!')}
      >
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ marginTop: 20, color: '#fff' }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ED1C24',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#ED1C24',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});