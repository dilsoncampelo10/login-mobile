import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { InputText } from './components/InputText';

import { styles } from './styles';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/login.png')} style={styles.logo} />
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem-vindo(a)! Digite seus dados abaixo.</Text>
        <InputText title='E-mail' placeholder='Digite seu email' />
        <InputText title='Senha' placeholder='*******' secure='secureTextEntry' />
        <View style={styles.forgetArea}>
          <TouchableOpacity style={styles.forgetButton}>
            <Text style={styles.textForgetBtn}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signinBtn}>
          <Text style={styles.signinBtnText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.signupArea}>
          <Text style={styles.textAccount}>Não tem uma conta?</Text>
          <TouchableOpacity><Text style={styles.textSignup}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Criado por Dilson</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default App;
