import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paso2() {
    const manejarCompra = (curso: string, precio: number) => {
        console.log("Seleccionaste el curso:", curso, "por $" + precio);
    };

    const manejarFavorito = (curso: string) => {
        console.log("Agregado a favoritos:", curso);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.titulo}>Explorar Cursos</Text>
                <Text style={styles.subtitulo}>Selecciona un curso para inscribirte</Text>

                <View style={styles.card}>
                    <Text style={styles.nombreCurso}>React Native desde Cero</Text>
                    <Text style={styles.precio}>$45</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity
                            style={styles.btnComprar}
                            onPress={() => manejarCompra("React Native desde Cero", 45)}
                        >
                            <Text style={styles.textoBtn}>Comprar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnFav}
                            onPress={() => manejarFavorito("React Native desde Cero")}
                        >
                            <Text style={styles.textoFav}>Favorito</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nombreCurso}>TypeScript para Moviles</Text>
                    <Text style={styles.precio}>$30</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity
                            style={styles.btnComprar}
                            onPress={() => manejarCompra("TypeScript para Moviles", 30)}
                        >
                            <Text style={styles.textoBtn}>Comprar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnFav}
                            onPress={() => manejarFavorito("TypeScript para Moviles")}
                        >
                            <Text style={styles.textoFav}>Favorito</Text>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 4,
    },
    precio: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2563eb",
        marginBottom: 12,
    },
    botones: {
        flexDirection: "row",
        gap: 10,
    },
    btnComprar: {
        backgroundColor: "#2563eb",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    btnFav: {
        backgroundColor: "#e2e8f0",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    textoBtn: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    textoFav: {
        color: "#1e293b",
        fontWeight: "bold",
    },
});