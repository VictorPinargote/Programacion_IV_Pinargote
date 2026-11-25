import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Paso2Hooks() {
    const [cursosDisponibles, setCursosDisponibles] = useState<number>(3);
    const [estadoCatalogo, setEstadoCatalogo] = useState<string>("Cargando catalogo...");

    useEffect(() => {
        if (cursosDisponibles > 0) {
            setEstadoCatalogo(`Hay ${cursosDisponibles} cursos listos para inscribir`);
        } else {
            setEstadoCatalogo("No quedan cursos disponibles en este momento");
        }
    }, [cursosDisponibles]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sincronizacion de Catalogo - useEffect</Text>
            <Text style={styles.estado}>{estadoCatalogo}</Text>

            <View style={styles.fila}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => setCursosDisponibles((prev) => Math.max(0, prev - 1))}
                >
                    <Text style={styles.textoBtn}>Vender 1 Curso</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonSecundario}
                    onPress={() => setCursosDisponibles(3)}
                >
                    <Text style={styles.textoSecundario}>Reponer Cupos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 12,
        gap: 12,
    },
    titulo: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#0f172a",
    },
    estado: {
        fontSize: 15,
        fontWeight: "600",
        color: "#2563eb",
    },
    fila: {
        flexDirection: "row",
        gap: 10,
    },
    boton: {
        backgroundColor: "#2563eb",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    textoBtn: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    botonSecundario: {
        backgroundColor: "#e2e8f0",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    textoSecundario: {
        color: "#1e293b",
        fontWeight: "bold",
    },
});