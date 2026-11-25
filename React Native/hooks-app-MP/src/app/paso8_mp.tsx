import { useState, useReducer } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface EstadoVenta {
    saldo: number;
    cursosComprados: string[];
}

type AccionVenta =
    | { type: "COMPRAR"; curso: string; precio: number }
    | { type: "RECARGAR"; monto: number }
    | { type: "REINICIAR" };

function ventaReducer(estado: EstadoVenta, accion: AccionVenta): EstadoVenta {
    switch (accion.type) {
        case "COMPRAR":
            if (estado.saldo < accion.precio || estado.cursosComprados.includes(accion.curso)) {
                return estado;
            }
            return {
                saldo: estado.saldo - accion.precio,
                cursosComprados: [...estado.cursosComprados, accion.curso],
            };
        case "RECARGAR":
            return {
                ...estado,
                saldo: estado.saldo + accion.monto,
            };
        case "REINICIAR":
            return {
                saldo: 100,
                cursosComprados: [],
            };
        default:
            return estado;
    }
}

export default function Paso8Hooks() {
    const [estado, dispatch] = useReducer(ventaReducer, {
        saldo: 100,
        cursosComprados: [],
    });
    const [ultimoAviso, setUltimoAviso] = useState<string>("Listo para comprar");

    const manejarCompra = (curso: string, precio: number) => {
        if (estado.cursosComprados.includes(curso)) {
            setUltimoAviso(`Ya compraste ${curso}`);
            return;
        }
        if (estado.saldo < precio) {
            setUltimoAviso(`Saldo insuficiente para ${curso}`);
            return;
        }
        dispatch({ type: "COMPRAR", curso, precio });
        setUltimoAviso(`Compraste ${curso} por $${precio}`);
    };

    const manejarRecarga = (monto: number) => {
        dispatch({ type: "RECARGAR", monto });
        setUltimoAviso(`Recargaste $${monto}`);
    };

    const manejarReinicio = () => {
        dispatch({ type: "REINICIAR" });
        setUltimoAviso("Estado reiniciado");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Estado de Venta Complejo - useReducer</Text>
            <Text style={styles.saldo}>Saldo: ${estado.saldo}</Text>
            <Text style={styles.aviso}>{ultimoAviso}</Text>

            <View style={styles.fila}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => manejarCompra("React Native", 45)}
                >
                    <Text style={styles.textoBtn}>Comprar RN ($45)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonSecundario}
                    onPress={() => manejarCompra("TypeScript", 30)}
                >
                    <Text style={styles.textoBtn}>Comprar TS ($30)</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fila}>
                <TouchableOpacity
                    style={styles.botonRecarga}
                    onPress={() => manejarRecarga(50)}
                >
                    <Text style={styles.textoBtn}>Recargar +$50</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonReiniciar}
                    onPress={manejarReinicio}
                >
                    <Text style={styles.textoOscuro}>Reiniciar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitulo}>Cursos comprados ({estado.cursosComprados.length}):</Text>
            {estado.cursosComprados.map((c, i) => (
                <Text key={i} style={styles.item}>
                    - {c}
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
    saldo: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#16a34a",
    },
    aviso: {
        fontSize: 14,
        color: "#475569",
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
    botonRecarga: {
        backgroundColor: "#16a34a",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    botonReiniciar: {
        backgroundColor: "#e2e8f0",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    textoBtn: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    textoOscuro: {
        color: "#1e293b",
        fontWeight: "bold",
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0f172a",
        marginTop: 4,
    },
    item: {
        fontSize: 14,
        color: "#334155",
    },
});