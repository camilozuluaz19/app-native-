import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button, Image } from 'react-native';
import bombilloOff from "../assets/img/bombilloOff.jpg"
import bombilloOn from "../assets/img/bombilloOn.jpg"

export default function BombilloPantalla() {

    const [stateBom, setStateBom] = useState(true);
    const [count, setCount] = useState(0)
    const [img, setImg] = useState(null)

    useEffect(() => {
        if(stateBom){
            setImg(bombilloOff)
        }else{
            setImg(bombilloOn)
        }
    })

    const encenderApagar = () => {
        setStateBom(prevValue => !prevValue);
    };

    return(
        <View>
            <Button 
                title="Encender / Apagar"
                onPress={() => {
                    encenderApagar()
                    if(stateBom){
                        setCount(count + 1)
                    }
                }}
            />
            <Text style={{fontSize:30, textAlign:"center"}}>
            {`Encendido ${count} Veces`}
            </Text>
            <Image source={img} style={{width:'100%', height:'100%'}}></Image>
        </View>
    )

  }