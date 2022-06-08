import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const {name, capital, interest, months, total, errorMessage} = props;
    return (
        <View style={styles.content}>
        {total && (
            <View style={styles.boxResult}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult title="Nombre:" value={`${name} `}/>
                <DataResult title="Cantidad Solicitada:" value={`${capital} $`}/>
                <DataResult title="Interes %" value={`${interest} %`}/>
                <DataResult title="Plazo:" value={`${months} Meses`}/>
                <DataResult title="Pago Mensual:" value={`${total.monthlyFee} $`}/>
                <DataResult title="Total a pagar:" value={`${total.totalPayable} $`}/>
            </View>
        )}
        <View>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
        </View>
    )
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },

    content: {
        marginHorizontal: 40,
    },

    boxResult: {
        padding: 30,
    },

    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },

    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})