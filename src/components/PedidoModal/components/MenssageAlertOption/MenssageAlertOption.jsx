import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {MenssageAlert} from './style';


export default function MenssageAlertOption({showMsg, text}){

    
  return (
    <MenssageAlert show={showMsg}>
      <span><FontAwesomeIcon icon={faExclamationCircle} /></span>
      {text}
    </MenssageAlert>
  );
};


