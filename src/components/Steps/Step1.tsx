import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Header from '../../containers/Header';
import {Link} from 'react-router-native';
import {StepContext} from '../../context/stepContext';

export const Step1 = () => {

  const stepper: any = useContext(StepContext);

  console.log(stepper);

  const [firstStepState, setState] = useState({
    fullName: '',
    position: '',
    birthday: '',
    city: '',
    number: '',
  });

  const finish = () => {
    stepper.finishFirst(firstStepState);
  };

  const handleInputName = (value: string) => {
    setState({
        ...firstStepState,
        fullName: value,
      },
    );
  };
  const handleInputPosition = (value: string) => {
    setState({
        ...firstStepState,
        position: value,
      },
    );
  };
  const handleInputBirthday = (value: string) => {
    setState({
        ...firstStepState,
        birthday: value,
      },
    );
  };
  const handleInputCity = (value: string) => {
    setState({
        ...firstStepState,
        city: value,
      },
    );
  };
  const handleInputPhoneNumber = (value: string) => {
    setState({
        ...firstStepState,
        number: value,
      },
    );
  };

  return (
    <>
      <Header/>
      <View style={styles.fillTheForm}>
        <Text style={styles.fillTheFormText}>
          Fill the form
        </Text>
        <Text style={styles.fillTheFormSubText}>area with <Text style={styles.valid}>*</Text> must be filled</Text>
      </View>
      <View style={styles.formTitleWrapper}>
        <Text style={styles.formTitle}>Personal info</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.inputLabel}> Full Name<Text style={styles.valid}>*</Text> </Text>
        <TextInput style={styles.inputForm}
                   autoCompleteType={'name'}
                   placeholder="type your full name"
                   onChangeText={text => handleInputName(text)}
                   value={firstStepState.fullName}


        />
        <Text style={styles.inputLabel}>Position<Text style={styles.valid}>*</Text> </Text>
        <TextInput style={styles.inputForm}
                   placeholder="for example: IOS developer, Designer"
                   onChangeText={text => handleInputPosition(text)}
                   value={firstStepState.position}

        />
        <Text style={styles.inputLabel}>Your Birthday<Text style={styles.valid}>*</Text> </Text>
        <TextInput style={styles.inputForm}
                   keyboardType="number-pad"
                   placeholder="dd.mm.yyyy"
                   onChangeText={text => handleInputBirthday(text)}
                   value={firstStepState.birthday}

        />
        <Text style={styles.inputLabel}>City<Text style={styles.valid}>*</Text> </Text>
        <TextInput style={styles.inputForm}
                   autoCompleteType={'street-address'}
                   placeholder="Kharkiv"
                   onChangeText={text => handleInputCity(text)}
                   value={firstStepState.city}

        />
        <Text style={styles.inputLabel}>Phone Number<Text style={styles.valid}>*</Text> </Text>
        <TextInput style={styles.inputForm}
                   autoCompleteType={'tel'}
                   keyboardType="number-pad"
                   placeholder="+38 (0__)___-__-__"
                   onChangeText={text => handleInputPhoneNumber(text)}
                   value={firstStepState.number}

        />
        {/* Validation here*/}

        {/*(firstStepState.number === '' || firstStepState.city === '' || firstStepState.birthday === '' || firstStepState.position === ''*/}
        {/*|| firstStepState.position === '' || firstStepState.fullName === '')*/}
        {/* ?<Link to={'/step1'} style={styles.btn2}}
        {/*  <Text style={styles.btnText}>Next</Text>*/}
        {/*</Link> */}
        {/*: <Link to={'/step2'} style={styles.btn} onPress={() => finish()}>*/}
        {/*  <Text style={styles.btnText}>Next</Text>*/}
        {/*</Link>  */}
        {/*}*/}
        <Link to={'/step2'} style={styles.btn} onPress={() => finish()}>
          <Text style={styles.btnText}>Next</Text>
        </Link>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    fillTheForm: {
      position: 'absolute',
      top: '24%',
      width: '100%',
      alignItems: 'center',

    },
    fillTheFormText: {
      alignItems: 'center',
      fontFamily: 'BebasNeue',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 36,
      lineHeight: 48,
      color: '#000000',
    },
    fillTheFormSubText: {
      fontFamily: 'Roboto-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 10,
      lineHeight: 12,
    },
    valid: {
      color: 'red',
    },
    formTitleWrapper: {
      position: 'absolute',
      top: '35%',
    },
    formTitle: {
      textTransform: 'uppercase',
      marginLeft: 20,
      fontFamily: 'BebasNeue-Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 22,
      lineHeight: 26,
      color: '#7A4ED9',
    },
    form: {
      position: 'absolute',
      top: '40%',
      left: '10%',
      width: '100%',
    },
    inputLabel: {
      marginTop: 5,
      fontFamily: 'Roboto-Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
    },
    inputForm: {
      padding: 10,
      height: 37,
      borderColor: '#000',
      borderWidth: 1,
      width: '80%',
      borderRadius: 3,

    },
    btn: {
      backgroundColor: '#7A4ED9',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
      marginTop: 15,
      width: '80%',
    },
    btn2: {
      backgroundColor: '#CCC',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
      marginTop: 15,
      width: '80%',
    },
    btnText: {
      color: '#FFF',
      paddingTop: 2,
      paddingBottom: 2,
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 28,
    },
  })
;


export default Step1;

