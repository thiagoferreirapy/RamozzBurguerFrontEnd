import React, { useState } from 'react';
import { LabelForm, Text, Input , ContentButtons, MsgAlert} from './style';
import ButtonModal from '../ButtonModal';

const SenhaForm = ({ onSubmit , onChangeEtapa}) => {
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [isSenhaValida, setIsSenhaValida] = useState(true);
  const [msgPasswordError, setMsgPasswordError] = useState('') 
  const [msgConfPasswordError, setMsgConfPasswordError] = useState('') 


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Adicione lógica para verificar a senha, se necessário
    
    // Chame onSubmit passando as informações necessárias
    // alert(senha, confirmacaoSenha)
    const regexUpperCase = /^(?=.*[A-Z])/
    const regexLowerCase = /^(?=.*[a-z])/
    const regexNumbers = /^(?=.*\d)/
    const regexCaracters = /^(?=.*[$*&@#])/
    const regexFullCase = /^[0-9a-zA-Z$*&@#]{8,}/

    if (senha.length < 8){
      alert('Senha inválida, minimo 8 caracteres')
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, mínimo 8 caracteres')

    }else if(senha.match(regexUpperCase) == null){
      alert("Senha inválida, a senha deve conter pelo menos uma letra 'maiúscula'")
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, a senha deve conter pelo menos uma letra maiúscula')


    }else if(senha.match(regexLowerCase) == null){
      alert("Senha inválida, a senha deve conter pelo menos uma letra 'minúscula'")
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, a senha deve conter pelo menos uma letra minúscula')

    }else if(senha.match(regexNumbers) == null){
      alert("Senha inválida, a senha deve conter pelo menos um 'número'")
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, a senha deve conter pelo menos um número')

    }else if(senha.match(regexCaracters) == null){
      alert("Senha inválida, a senha deve conter pelo menos um 'caractere especial'")
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, a senha deve conter pelo menos um caractere especial')

    }else if(senha.match(regexFullCase) == null){
      alert("Senha inválida, a senha deve conter pelo menos 8 caracteres entre eles uma letra 'maiúscula', uma letra 'minúscula', um 'número' e um 'caractere especial'")
       setIsSenhaValida(false);
       setMsgPasswordError('Senha inválida, a senha deve conter pelo menos 8 caracteres entre eles uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
    }else if(senha != confirmacaoSenha){
      alert("As senhas não conferem")
       setIsSenhaValida(false);
       setMsgPasswordError('As senhas não conferem')
       setMsgConfPasswordError("As senhas não conferem")
    }else{
      onSubmit(senha, confirmacaoSenha);
      setIsSenhaValida(true);
      setMsgPasswordError('')
      setMsgConfPasswordError('')
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelForm>
        <Text>Senha</Text>
        <Input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder='Senha'
          required
          isValid={isSenhaValida}
        />
        <MsgAlert>{msgPasswordError}</MsgAlert>
      </LabelForm>
      <LabelForm>
        <Text>Confirmação de Senha</Text>
        <Input
          type="password"
          value={confirmacaoSenha}
          onChange={(e) => setConfirmacaoSenha(e.target.value)}
          placeholder='Confirmae a sua senha'
          required
          isValid={isSenhaValida}     
        />
        <MsgAlert>{msgConfPasswordError}</MsgAlert>
        <Text>Senha deve conter pelo menos 1 letra maiúscula, 1 letra minuscula, 1 número e caracteres especiais.</Text>
      </LabelForm>
      <br />
      <ContentButtons>
        <ButtonModal label={'Cancelar'} typebutton={'danger'} onClick={onChangeEtapa}/>
        <ButtonModal type={'submit'} label={'Continuar'} typebutton={'default'}/>
      </ContentButtons>
    </form>
  );
};

export default SenhaForm;
