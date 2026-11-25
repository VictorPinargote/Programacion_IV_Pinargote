import { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Paso4Hooks() {
    const [cursosEnCarrito, setCursosEnCarrito] = useState<string[]>([]);
    const [totalAcumulado, setTotalAcumulado] = useState<number>(0);

    const agregarCurso = useCallback((nombreCurso: string, precio: number) => {
        setCursosEnCarrito((prev) => [...prev, nombreCurso]);
        setTotalAcumulado((prev) => prev + precio);
    }, []);

    const limpiarCarrito = useCallback(() => {
        setCursosEnCarrito([]);
        setTotalAcumulado(0);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrito de Cursos - useCallback</Text>
            <Text style={styles.dato}>Cursos agregados: {cursosEnCarrito.length}</Text>
            <Text style={styles.total}>Total acumulado: ${totalAcumulado}</Text>

            <View style={styles.fila}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => agregarCurso("React Native", 45)}
                >
                    <Text style={styles.textoBtn}>+ React Native ($45)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonSecundario}
                    onPress={() => agregarCurso("TypeScript", 30)}
                >
                    <Text style={styles.textoSecundario}>+ TypeScript ($30)</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botonLimpiar} onPress={limpiarCarrito}>
                <Text style={styles.textoBtn}>Vaciar Carrito</Text>
            </TouchableOpacity>

            {cursosEnCarrito.map((item, idx) => (
                <Text key={idx} style={styles.item}>
                    - {item}
                </Text>
            ))}
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
    },
    dato: {
        fontSize: 15,
        color: "#334155",
    },
    total: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#16a34a",
    },
    fila: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    boton: {
        backgroundColor: "#2563eb",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    botonSecundario: {
        backgroundColor: "#0f766e",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    botonLimpiar: {
        backgroundColor: "#dc2626",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    textoBtn: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    textoSecundario: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    item: {
        fontSize: 14,
        color: "#475569",
    },
});