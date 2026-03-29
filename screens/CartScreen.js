import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const { item } = route.params;
  const [cart] = useState([item]);

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Carrinho</Text>

      {cart.map((i, index) => (
        <Text key={index}>{i.name} - R${i.price}</Text>
      ))}

      <Text style={{ marginTop: 20 }}>Total: R${total}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Pedido realizado!')}
      >
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ marginTop: 20 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: 'green', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});