import React from "react";
import {
  Alert,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    // 1. Login Logic
    // const handleLogin = (room, code) => {
    //     const userFound = ROOM_DATABASE.find(
    //         (u) => u.room === room && u.code === code,
    //     );

    //     if (userFound) {
    //         setCurrentUser(userFound);
    //         setIsLoggedIn(true);
    //         if (userFound.room === "201") setIsAdmin(true); // Hardcoded Admin untuk demo
    //         Alert.alert("Login Berhasil", `Selamat datang, ${userFound.guest}`);
    //     } else {
    //         Alert.alert("Login Gagal", "Nomor Kamar atau Kode Booking salah.");
    //     }
    // };

    return (
        <SafeAreaView style={styles.authContainer}>
          <StatusBar barStyle={"default"}/>
            <View style={styles.authBox}>
                <Text style={styles.authTitle}>Hotel Petra Service App</Text>
                <Text style={styles.authSubtitle}>
                    Masuk untuk memesan layanan
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nomor Kamar (Coba: 101)"
                    keyboardType="numeric"
                    id="room"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Kode Booking (Coba: ABC123)"
                    id="code"
                />

                <TouchableOpacity
                    style={styles.btnPrimary}
                    onPress={() => {
                        const room = "101"; // Simulasi input hardcode untuk demo cepat
                        const code = "ABC123";
                        // handleLogin(room, code);
                    }}
                >
                    <Text style={styles.btnText}>Login Sebagai Tamu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnSecondary}
                    // onPress={() => handleLogin("201", "ADMIN")}
                >
                    <Text style={styles.btnTextSecondary}>
                        Login Sebagai Admin
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    authBox: {
        width: "85%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 5,
    },
    authTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
        color: "#2c3e50",
    },
    authSubtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },
    btnPrimary: {
        backgroundColor: "#3498db",
        padding: 15,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    btnText: { color: "#fff", fontWeight: "bold" },
    btnSecondary: {
        backgroundColor: "#95a5a6",
        padding: 15,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    btnTextSecondary: { color: "#fff", fontWeight: "bold" },
    closeText: { marginTop: 15, color: "#e74c3c", textAlign: "center" },
});
export default Login;
