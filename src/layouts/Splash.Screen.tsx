import { useEffect, useState } from "react";
import {View, Image, StyleSheet} from "react-native";
import LoginScreen from "./LoginScreen";


export default function SplashScreen() {
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 3000); // 3 segundos

        return () => clearTimeout(timer); // Limpiar el temporizador
    }, []);

    if (showLogin) {
        return <LoginScreen />;
    }
<View>
            <Image source={require("../assets/logo.png")} />
        </View>;
        }