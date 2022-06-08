import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
// import colors from "../utils/colors";
import colors from "../utils/colors";

export default function Form(props) {
    const {setName, setCapital, setInterest, setMonths} = props;
    return (
     <View style={styles.viewForm}>
        <View style={styles.viewInputs}>
            <TextInput 
                placeholder="Nombre" 
                Type="text"
                style={styles.inputName}
                onChange={e => setName(e.nativeEvent.text)}
            />
        </View>
        <View style={styles.viewInputs}>
            <TextInput 
                placeholder="Cantidad a pedir" 
                keyboardType="numeric"
                style={styles.input}
                onChange={e => setCapital(e.nativeEvent.text)}
            />
            <TextInput 
                placeholder="Interes %"
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}
                onChange={e => setInterest(e.nativeEvent.text)}
            />
        </View>
        <RNPickerSelect
            style={picketSelectStyles}
            onValueChange={(value) => setMonths(value)}
            placeholder={{
                label: 'Selecciona los plazoas...',
                value: null
            }}
            items={[
                { label: '3 Meses', value: '3' },
                { label: '6 Meses', value: '6' },
                { label: '12 Meses', value: '12' },
                { label: '24 Meses', value: '24' },
            ]}
        />
     </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },

    viewInputs: {
        flexDirection: 'row',
    },

    inputName: {
        width: "100%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR, 
        borderRadius: 5,
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20, 
    },

    input: {
       height: 50,
       backgroundColor: "#fff",
       borderWidth: 1,
       borderColor: colors.PRIMARY_COLOR, 
       borderRadius: 5,
       width: "60%",
       marginRight: 5,
       marginLeft: -5,
       marginBottom: 10,
       color: '#000',
       paddingHorizontal: 20,   
    },

    inputPercentage: {
        width: "40%",
        marginLeft: 5,
    }
});

const picketSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    }
})