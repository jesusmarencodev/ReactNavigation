import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Nosotros = ({navigation, route}) => {
    const {name} = route;
    const {clienteID} = route.params;

    const visitarInicio = () => {
        navigation.navigate('Inicio')
        //navigation.push('Inicio') hace lo mismo que navigate
        //El metodo goBack siempre volvera a la pagina anterior sin importar el nombre
    }

    return (
        <View style={styles.contenedor}>
            <Text>{name}</Text>
            <Text>{clienteID}</Text>
            <Button
                title="Volver"
                onPress={()=> visitarInicio()}
            />
        </View>
    )
}

export default Nosotros


const styles = StyleSheet.create({
    contenedor : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})