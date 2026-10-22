import { useRef, useState, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export function Paso3Suma() {
  const inputNum1Ref = useRef<ComponentRef<typeof TextInput>>(null)
  const inputNum2Ref = useRef<ComponentRef<typeof TextInput>>(null)

  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [resultado, setResultado] = useState<number | null>(null)

  function hacerSuma() {
    const suma = Number(num1) + Number(num2)
    setResultado(isNaN(suma) ? 0 : suma)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Suma</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Ingresar Número 1</Text>
        <TextInput
          ref={inputNum1Ref}
          style={styles.input}
          value={num1}
          onChangeText={setNum1}
          placeholder="Número 1"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputNum2Ref.current?.focus()}
        />

        <Text style={styles.etiqueta}>Ingresar Número 2</Text>
        <TextInput
          ref={inputNum2Ref}
          style={styles.input}
          value={num2}
          onChangeText={setNum2}
          placeholder="Número 2"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={hacerSuma}
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={hacerSuma}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      {resultado !== null && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>Resultado: {resultado}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formulario: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  etiqueta: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  boton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  botonActivo: {
    backgroundColor: '#1976d2',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
})