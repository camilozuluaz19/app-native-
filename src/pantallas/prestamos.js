import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button } from 'react-native';
import colors from "../utils/colors";
import Form from "../components/Form";
import Footer from "../components/Footer";
import ResultCalculation from "../components/ResultCalculation";

export default function PrestamosPantalla(){
  const [name, setName] = useState(null);
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, seterrorMessage] = useState('');

  useEffect(() => {
    // if(capital && interest && months) calculate();
    // else reset();

    calculate();
  }, [capital, interest, months])

  const calculate = () => {
    reset();
    if(!capital){
      seterrorMessage('Añade la cantidad a solicitar');
    }else if(!interest){
      seterrorMessage('Añade el interes del prestamo');
    }else if(!months){
      seterrorMessage('Selecciona los meses a pagar');
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
      })

    }
  }

  const reset = () => {
    seterrorMessage("");
    setTotal(null)
  }

  return(
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador De Prestamo</Text>
        <Form setName={setName} setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}></Form>
      </SafeAreaView>
      <ResultCalculation 
        name={name}
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 240,   
    alignItems: 'center',
  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    margin: 15,
  }
});