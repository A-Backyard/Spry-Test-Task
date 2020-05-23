import {StepContext} from './stepContext';
import React, {useReducer} from 'react';
import {stepReducer} from './stepReducer';
import {FINISH_FIRST, FINISH_SECOND, FINISH_THIRD, FINISH_FOURTH, FINISH_FIFTH} from './types';
import {sendEmail} from '../containers/send-email'

export const StepState = ({children}) => {
  const initialState = {
    step1: {},
    step2: {
      educationalInstitution: '',
      educationalSpecialization: '',
      educationalGraduatedYear: '',
    },
    step3: {
      courseEducationalOrganization: '',
      course: '',
      courseFinishDate: '',
    },
    step4: {
      workPlace: '',
      workPositionHeld: '',
      workStartDate: '',
      workEndDate: '',
    },
    step5: {
      freeTimeSpendInfo: '',
      questionsToUs: '',
      terms: true,
    },
  };

  const [state, dispatch] = useReducer(stepReducer, initialState);

  const finishFirst = (localState) => {
    console.log(localState);
    dispatch({
      type: FINISH_FIRST,
      payload: localState,
    });
  };

  const finishSecond = (localState) => {
    console.log(localState);
    dispatch({
      type: FINISH_SECOND,
      payload: localState,
    });
  };

  const finishThird = (localState) => {
    console.log(localState);
    dispatch({
      type: FINISH_THIRD,
      payload: localState,
    });
  };

  const finishFourth = (localState) => {
    console.log(localState);
    dispatch({
      type: FINISH_FOURTH,
      payload: localState,
    });
  };

  const finishFifth = (localState) => {
    console.log(localState);
    dispatch({
      type: FINISH_FIFTH,
      payload: localState,
    });
    sendEmail(
      'anton.backyard@gmail.com',
      'Test task states',
      {initialState},
    ).then(() => {
      console.log('Your message was successfully sent!');
    });
  };


  return (

        <StepContext.Provider value={{finishFirst, finishSecond, finishThird, finishFourth, finishFifth, stepperState: state}}>
            {children}
        </StepContext.Provider>
  );
};
