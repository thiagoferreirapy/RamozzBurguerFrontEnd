import React, { useState } from 'react';
import { LabelForm, Text, Input, AlignText, ContentButtons, AlertCode, MsgAlert } from './style';
import MultiInputCode from '../InputCode/MultiInputCode';
import ButtonModal from '../ButtonModal';
import TimerWithBorder from '../TimerWithBorder';
import styled from 'styled-components';

const VerificacaoEmailForm = ({ email, onVerificarEmail, onChangeEtapa }) => {
  const [codigoVerificacao, setCodigoVerificacao] = useState('');
  const [msgCodeError, setMsgCodeError] = useState('');
  const [parentTime, setParentTime] = useState(60);

  console.log('Tempo para expirar o codigo: ', parentTime)
  const onVerificarEmailForm = (codigo) => {
    // Aqui você pode adicionar lógica para verificar o código de verificação
    console.log('Código de verificação na função:', codigo);
    // Adicione sua lógica de verificação de email aqui

    const verificationResult = verify(codigo);
    const verificaTime = parentTime

    if (verificaTime > 0){
      if (verificationResult.status != 200) {
        alert('Código de verificação inválido')
        setMsgCodeError('Código inválido!')
      }else{
        alert('Código de verificação válido, usuario logado')
        setMsgCodeError('')
      }
    }else{
      setMsgCodeError('Tempo de verificação esgotado!')
    }
    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerificarEmailForm(codigoVerificacao);
  };

  const verify = (codigo) =>{
    if(codigo === '123456'){
      return {'status': 200, 'message': 'código valido'}
    }else{
      return {'status': 404, 'message': 'código invalido'}
    }
  }

  const handleTimeUpdate = (newTime) => {
    // Esta função será chamada sempre que o valor de `time` em StyledLoader for atualizado
    setParentTime(newTime);
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <AlignText>
        <Text>Enviamos um código de verificação para o seu e-mail</Text>
        <Text>Fique atento ao tempo de expiração desse código</Text>
      </AlignText>
      <LabelForm>
        <MultiInputCode numInputs={6}  onCodeChange={setCodigoVerificacao}/>
      </LabelForm>
      
      
      {msgCodeError && (
        <AlertCode>
          <MsgAlert>{msgCodeError}</MsgAlert>
        </AlertCode>
      )}
      <br />
      <TimerWithBorder onTimeUpdate={handleTimeUpdate}/>
      <br />
      <ContentButtons>
        <ButtonModal label={'Cancelar'} typebutton={'danger'} onClick={onChangeEtapa}/>
        <ButtonModal type={'submit'} label={'Continuar'} typebutton={'default'}/>
      </ContentButtons>
      {/* <button type="submit">Verificar Email</button> */}
    </form>
  );
};

export default VerificacaoEmailForm;