import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Paso2Form() {
    const [nombreCurso, setNombreCurso] = useState<string>("");
    const [precio, setPrecio] = useState<string>("");
    const [cupos, setCupos] = useState<string>("");
    const [resumen, setResumen] = useState<string>("");

    const registrarCurso = () => {
        if (!nombreCurso.trim() || !precio.trim() || !cupos.trim()) {
            setResumen("Completa el nombre, precio y cupos del curso.");
            return;
        }
        setResumen(
            `Curso registrado: ${nombreCurso} | Precio: $${precio} | Cupos: ${cupos}`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Nuevo Curso</Text>

            <Text style={styles.label}>Nombre del curso</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej. Kotlin para Android"
                value={nombreCurso}
                onChangeText={setNombreCurso}
            />

            <Text style={styles.label}>Precio ($)</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej. 35"
                keyboardType="numeric"
                value={precio}
                onChangeText={setPrecio}
            />

            <Text style={styles.label}>Cupos disponibles</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej. 15"
                keyboardType="numeric"
                value={cupos}
                onChangeText={setCupos}
            />

            <TouchableOpacity style={styles.boton} onPress={registrarCurso}>
                <Text style={styles.botonTexto}>Guardar Curso</Text>
            </TouchableOpacity>

            {resumen !== "" && <Text style={styles.resumen}>{resumen}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 12,
        gap: 10,
    },
    titulo: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#334155",
    },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: "#0f172a",
        backgroundColor: "#f8fafc",
    },
    boton: {
        backgroundColor: "#2563eb",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 6,
    },
    botonTexto: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15,
    },
    resumen: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "600",
        color: "#1e293b",
    },
});