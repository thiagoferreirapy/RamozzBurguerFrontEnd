import React, { useState } from 'react';
import { LabelForm, Text, Input, AlignText, ContentButtons } from './style';
import MultiInputCode from '../InputCode/MultiInputCode';
import ButtonModal from '../ButtonModal';
import TimerWithBorder from '../TimerWithBorder';

const VerificacaoEmailForm = ({ email, onVerificarEmail, onChangeEtapa }) => {
  const [codigoVerificacao, setCodigoVerificacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para verificar o código de verificação
    onVerificarEmail(codigoVerificacao);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AlignText>
        <Text>Enviamos um código de verificação para o seu e-mail</Text>
        <Text>Fique atento ao tempo de expiração desse código</Text>
      </AlignText>
      <LabelForm>
        {/* <Text>Verificação de Email</Text>
        <Input
          type="text"
          value={codigoVerificacao}
          onChange={(e) => setCodigoVerificacao(e.target.value)}
          placeholder='Código de Verificação'
          required
        /> */}
        <MultiInputCode/>
      </LabelForm>
      <br />
      <TimerWithBorder/>
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