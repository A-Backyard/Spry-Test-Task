/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {BackButton, NativeRouter, Route} from 'react-router-native';

import About from './src/components/About/About';
import MainPage from './src/components/MainPage/MainPAge';
import Step1 from './src/components/Steps/Step1';
import Step2 from './src/components/Steps/Step2';
import Step3 from './src/components/Steps/Step3';
import Step4 from './src/components/Steps/Step4';
import Step5 from './src/components/Steps/Step5';
import {StepState} from './src/context/stepState';

declare const global: {HermesInternal: null | {}};


const App = () => {
  return (
    <StepState>
      <NativeRouter>
        <BackButton>
          <Route path="/about" component={About}/>
          <Route path="/step1" component={Step1}/>
          <Route path="/step2" component={Step2}/>
          <Route path="/step3" component={Step3}/>
          <Route path="/step4" component={Step4}/>
          <Route path="/step5" component={Step5}/>
          <Route path="/" exact component={MainPage}/>
        </BackButton>
      </NativeRouter>
    </StepState>
  );
};

export default App;
