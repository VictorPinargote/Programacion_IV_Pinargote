import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paso1() {
    const nombreAcademia: string = "Academia DevCursos";
    const cursoDestacado: string = "React Native desde Cero";
    const precioCurso: number = 45;
    const cuposDisponibles: number = 12;
    const tieneCertificado: boolean = true;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.titulo}>Bienvenido a {nombreAcademia}</Text>
                <Text style={styles.subtitulo}>Catalogo de Cursos Disponibles</Text>

                <View style={styles.card}>
                    <Text style={styles.nombreCurso}>{cursoDestacado}</Text>
                    <Text style={styles.dato}>Precio: ${precioCurso}</Text>
                    <Text style={styles.dato}>Cupos disponibles: {cuposDisponibles}</Text>
                    <Text style={styles.dato}>
                        Certificado incluido: {tieneCertificado ? "Si" : "No"}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nombreCurso}>TypeScript para Moviles</Text>
                    <Text style={styles.dato}>Precio: $30</Text>
                    <Text style={styles.dato}>Cupos disponibles: 20</Text>
                    <Text style={styles.dato}>Certificado incluido: Si</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f9",
    },
    content: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 6,
    },
    subtitulo: {
        fontSize: 16,
        color: "#475569",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        padding: 16,
        borderRadius: 10,
        marginBottom: 14,
        elevation: 2,
    },
    nombreCurso: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 8,
    },
    dato: {
        fontSize: 15,
        color: "#334155",
        marginBottom: 4,
    },
});