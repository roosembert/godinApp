import React, {Component} from "react";
import {View, TextField, Text, Button} from 'react-native-ui-lib';

export default class SignIn extends Component {

    render(){
        return(
            <View flex centerV paddingH-30>
                <View>
                    <Text blue50 text30L center>Bienvenid@</Text>
                    <View left>
                        <TextField left  marginT-70 floatingPlaceholder text50L grey10  placeholder="usuario"/>
                        <TextField marginT-30 floatingPlaceholder text50L grey10 placeholder="password" secureTextEntry/>
                    </View>
                    <View marginT-70 center>
                        <Button paddingH-25 paddingV-15 text60L white background-blue30 label="Iniciar sesión"/>
                    </View>
                </View>
            </View>
        );
    }
};