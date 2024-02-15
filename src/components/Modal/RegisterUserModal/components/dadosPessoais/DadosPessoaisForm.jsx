import React, { useState } from 'react';
import { LabelForm, Text, Input, InputEmail, ContentButtons, MsgAlert } from './style';
import ButtonModal from '../ButtonModal';

export default function DadosPessoaisForm({ dados, onSubmit, onChange, onChangeEtapa }) {
  
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [msgNameError, setMsgNameError] = useState('') 
  const [msgEmailError, setMsgEmailError] = useState('') 

  console.log("isNameValid:", isNameValid);
  console.log("isEmailValid:", isEmailValid);
  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = dados.nome.trim()
    const email = dados.email.trim()

    const regexNome = /^(?=.*[$*&@#.,;><)([{}=+%$!?/:_-])/
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(nome.length === 0){
      alert('nome obrigatorio')
      setIsNameValid(false);
      setMsgNameError('Nome obrigatório')
    }else if(nome.length < 5){
      alert('nome muito curto, minimo 5 caracteres')
      setIsNameValid(false);
      setMsgNameError('Nome muito curto, mínimo 5 caracteres')
    }else if(nome.length > 255){
      alert('Nome muito longo, máximo 255 caracteres')
      setIsNameValid(false);
      setMsgNameError('Nome muito longo, máximo 255 caracteres')
    }else if(nome.match(regexNome) != null){
      alert('Nome inválido, nome de usuário não pode conter caracteres especiais')
      setIsNameValid(false);
      setMsgNameError('Nome inválido, nome de usuário não pode conter caracteres especiais')

    }else if(email.length === 0){
      alert('email obrigatorio')
       setIsEmailValid(false);
        setMsgEmailError('E-mail obrigatório')

    } else if(email.match(regexEmail) == null){
      alert('E-mail inválido')
       setIsEmailValid(false);
        setMsgEmailError('E-mail inválido')
    }
    else{
      const verificationResult = verify();

      if (verificationResult.status === 200) {
        onSubmit();
        setIsNameValid(true);
        setIsEmailValid(true);
        setMsgNameError('');
        setMsgEmailError('');
      } else {
        setIsEmailValid(false);
        setMsgNameError('');
        setMsgEmailError('E-mail já cadastrado');
      }
      
      
      
    }
    
  };

  const verify = () =>{
    return {'status': 200, 'message': 'E-mail já cadastrado'}
  }

  // onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
  return (
    <form  onSubmit={handleSubmit}>
      <LabelForm>
        <Text>Usuário</Text>
        <Input
          type="text"
          value={dados.nome}
          onChange={(e) => onChange({...dados, nome: e.target.value })}
          placeholder='Nome de Usuário'
          required
          isNameValid={isNameValid}
        />
        <MsgAlert>{msgNameError}</MsgAlert>
      </LabelForm>
      <LabelForm>
        <Text>Email:</Text>
        <InputEmail
          type="email"
          value={dados.email}
          onChange={(e) => onChange({...dados, email: e.target.value })}
          placeholder='example@email.com'
          required
          isEmailValid={isEmailValid}
        />
        <MsgAlert>{msgEmailError}</MsgAlert>
      </LabelForm>
      <br />
      <ContentButtons>
        <ButtonModal label={'Cancelar'} typebutton={'danger'} onClick={onChangeEtapa}/>
        <ButtonModal type={'submit'} label={'Continuar'} typebutton={'default'}/>
      </ContentButtons>
      
    </form>
  );
}

