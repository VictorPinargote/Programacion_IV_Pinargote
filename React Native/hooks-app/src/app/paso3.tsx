// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export function Paso3() {
  const inputHostRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputPuertoRef = useRef<ComponentRef<typeof TextInput>>(null)

  const [host, setHost] = useState<string>('')
  const [puerto, setPuerto] = useState<string>('22')

  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciosRef.current += 1
    setUltimaConexion(
      `${host || 'servidor'}:${puerto} — intento #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Conexión SSH</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Host o IP</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="10.0.2.10"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Puerto SSH</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {ultimaConexion}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
      </Text>
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
  tarjeta: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  etiqueta: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
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
  latencia: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  ciclos: {
    marginBottom: 8,
    fontSize: 14,
  },
  detalle: {
    color: '#757575',
    fontSize: 13,
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
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})