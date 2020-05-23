import React from 'react';
import {View, Text, TouchableHighlight, Image, Linking, StyleSheet, } from 'react-native';
import {Link} from 'react-router-native';
// import {StepContext} from '../../context/stepContext';


const MainPage = ({history}:any) => {

  //  for console.log() to view state after send
  // const stepper: any = useContext(StepContext);

  return (
    <>
      <Image
        source={require('../../../assets/img/bg-main.png')}
        style={styles.bgMain}/>
      <View style={styles.container}>
        <Image source={require('../../../assets/img/logo.png')}
               style={styles.Logo}/>
        <Text style={styles.title}>
          Welcome!
        </Text>

        {/*View state after send by this button*/}
        {/*<Button title={'Click'} onPress={()=>console.log(stepper)} />*/}

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            Want to be a part of a team?
          </Text>
              <TouchableHighlight underlayColor="#fff"
                                  style={styles.btn}
                  onPress={()=> history.push('/step1')}
              >
                <Text style={styles.btnText}>Send Form</Text>
              </TouchableHighlight>
        </View>
        <View style={styles.routeContainer}>
          <Link to={'/about'}>
            <Image
              source={require('../../../assets/img/about.png')}/>
          </Link>
          <Link to={'/about'}>
            <Text style={styles.routeLink}
                  onPress={() => Linking.openURL('https://spryrocks.com/')}
            >spryrocks.com</Text>
          </Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Logo: {
    alignItems: 'flex-end',
    width: '100%',
  },
  title: {
    position: 'absolute',
    top: '42%',
    width: 320,
    height: 54,
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 46,
    lineHeight: 53,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  bgMain: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    zIndex: -1,
  },
  btn: {
    backgroundColor: '#7A4ED9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    color: '#FFF',
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
  },
  container: {
    zIndex: 0,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 7, 69, 0.7)',
  },
  formContainer: {
    position: 'absolute',
    top: '65%',
  },
  formTitle: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 37,
    textAlign: 'center',
  },
  routeContainer: {
    position: 'absolute',
    top: '87%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeLink: {
    marginTop: 15,
    color: '#FFF',
    fontFamily: 'BebasNeue-Regular',
    textDecorationLine: 'underline',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
});

export default MainPage;
