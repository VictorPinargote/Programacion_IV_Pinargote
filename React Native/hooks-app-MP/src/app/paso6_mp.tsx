import { createContext, useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CarritoContextType {
    cursos: string[];
    total: number;
    agregarCurso: (nombre: string, precio: number) => void;
    vaciarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

function ResumenCarrito() {
    const context = useContext(CarritoContext);
    if (!context) return null;

    return (
        <View style={styles.caja}>
            <Text style={styles.subtitulo}>Resumen desde Context</Text>
            <Text style={styles.dato}>Cursos en carrito: {context.cursos.length}</Text>
            <Text style={styles.total}>Total: ${context.total}</Text>
            {context.cursos.map((curso, idx) => (
                <Text key={idx} style={styles.item}>
                    - {curso}
                </Text>
            ))}
        </View>
    );
}

function AccionesCursos() {
    const context = useContext(CarritoContext);
    if (!context) return null;

    return (
        <View style={styles.fila}>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => context.agregarCurso("React Native", 45)}
            >
                <Text style={styles.textoBtn}>+ React Native ($45)</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botonSecundario}
                onPress={() => context.agregarCurso("Kotlin", 35)}
            >
                <Text style={styles.textoBtn}>+ Kotlin ($35)</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botonLimpiar}
                onPress={context.vaciarCarrito}
            >
                <Text style={styles.textoBtn}>Vaciar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function Paso6Hooks() {
    const [cursos, setCursos] = useState<string[]>([]);
    const [total, setTotal] = useState<number>(0);

    const agregarCurso = (nombre: string, precio: number) => {
        setCursos((prev) => [...prev, nombre]);
        setTotal((prev) => prev + precio);
    };

    const vaciarCarrito = () => {
        setCursos([]);
        setTotal(0);
    };

    return (
        <CarritoContext.Provider value={{ cursos, total, agregarCurso, vaciarCarrito }}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Estado Global de Cursos - useContext</Text>
                <AccionesCursos />
                <ResumenCarrito />
            </View>
        </CarritoContext.Provider>
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
    subtitulo: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 4,
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
    },
    textoBtn: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    caja: {
        backgroundColor: "#f8fafc",
        padding: 12,
        borderRadius: 8,
        gap: 4,
    },
    dato: {
        fontSize: 15,
        color: "#334155",
    },
    total: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#16a34a",
    },
    item: {
        fontSize: 14,
        color: "#475569",
    },
});