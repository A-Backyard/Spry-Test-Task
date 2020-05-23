import React, {useContext, useState} from 'react';
import {Link} from 'react-router-native';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../../containers/Header';
import {StepContext} from '../../context/stepContext';



export const Step2 = () => {

  const stepper: any = useContext(StepContext);

  console.log(stepper);

  const [secondStepState, setState] = useState({
    educationalInstitution: '',
    educationalSpecialization: '',
    educationalGraduatedYear: '',
  });

  const finish = () => {
    stepper.finishSecond(secondStepState);
  };

  const handleInputEducInst = (value: string) => {
    setState({
        ...secondStepState,
      educationalInstitution: value,
      },
    );
  };

  const handleInputSpec = (value: string) => {
    setState({
        ...secondStepState,
      educationalSpecialization: value,
      },
    );
  };

  const handleInputGradYear = (value: string) => {
    setState({
        ...secondStepState,
      educationalGraduatedYear: value,
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
          <Text style={styles.formTitle}>Education</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputLabel}> 1.Educational Institution</Text>
          <TextInput style={styles.inputForm}
                     placeholder="Kharkiv National University of Radioelectronics"
                     onChangeText={text => handleInputEducInst(text)}
                     value={secondStepState.educationalInstitution}


          />
          <Text style={styles.inputLabel}>Specialization</Text>
          <TextInput style={styles.inputForm}
                     placeholder="Java Developer"
                     onChangeText={text => handleInputSpec(text)}
                     value={secondStepState.educationalSpecialization}

          />
          <Text style={styles.inputLabel}>Graduated Year </Text>
          <TextInput style={styles.inputForm}
                     keyboardType="number-pad"
                     placeholder="yyyy"
                     onChangeText={text => handleInputGradYear(text)}
                     value={secondStepState.educationalGraduatedYear}


          />

          <Link to={'/step3'} style={styles.btn} onPress = {() => finish()}>
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
    top: '50%',
    backgroundColor: '#7A4ED9',
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
});

export default Step2;
