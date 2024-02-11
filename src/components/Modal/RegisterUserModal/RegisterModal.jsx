import React, { useState } from 'react';
import Modal from 'react-modal';
import {Teste, ActiveModal, ModalWrapper,ContentTitleModal,ContentModalForm, Title, Text, TitleModal, Close, ContentForm,  Input, Link, ContentRegisterRoute, Button, ContentProgressRegister,  ProgressBar, Bar, ContentButtons} from './style'

import iconClose from '../../../images/icons/buttonClose.svg'

import DadosPessoaisForm from './components/dadosPessoais/DadosPessoaisForm';
import SenhaForm from './components/passwordForm/SenhaForm';
import VerificacaoEmailForm from './components/emailverification/VerificacaoEmailForm';
import Progress from './components/ButtonModal';
import ButtonModal from './components/ButtonModal';



export default function RegisterModal(){
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setEtapaAtual(1);
  };

  
  const [dadosPessoais, setDadosPessoais] = useState({ nome: '', email: '' });
  const [etapaAtual, setEtapaAtual] = useState(1); // 1 para dados pessoais, 2 para senha

  const mudarEtapa = () => {
    
    if (etapaAtual === 3){
      setEtapaAtual(2);
    }else if (etapaAtual === 2){
      setEtapaAtual(1);
    }
  };


  const handleDadosPessoaisSubmit = () => {
    const regexNome = /^(?=.*[$*&@#.,;><)([{}=+%$!?/:_-])/

    var regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let nome = dadosPessoais.nome.trim()
    let email = dadosPessoais.email.trim()
    // Aqui você pode adicionar lógica para verificar os dados pessoais
    // Se estiver tudo certo, avança para a próxima etapa
    if(nome.length === 0){
      alert('nome obrigatorio')
    }else if(nome.length < 5){
      alert('nome muito curto, minimo 5 caracteres')
    }else if(nome.length > 255){
      alert('nome muito grande, máximo 255 caracteres')
    }else if(nome.match(regexNome) != null){
      alert('Nome inválido, nome de usuário não pode conter caracteres especiais')


    }else if(email.length === 0){
      alert('email obrigatorio')

    } else if(email.match(regexEmail) == null){
      alert('E-mail inválido')
    }
    else{
      alert('')
    }
    setEtapaAtual(2);
  };

  const handleVerificarEmail = (codigoVerificacao) => {
    // Aqui você pode adicionar lógica para verificar o código de verificação do email
    console.log('Código de verificação do email:', codigoVerificacao);
    // Avance para a próxima etapa ou faça o que for necessário com os dados
  };

  const handleSenhaSubmit = (senha, confirmacaoSenha) => {
    // Aqui você pode adicionar lógica para verificar a senha
    // Se estiver tudo certo, você pode prosseguir para a próxima etapa ou
    // fazer o que for necessário com os dados
    alert('Senha e confirmação de senha:', senha, confirmacaoSenha);
    setEtapaAtual(3);
  };

  return (
    <div>
      <ActiveModal onClick={abrirModal}>ENTRE OU CADASTRE-SE</ActiveModal>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        contentLabel="Exemplo de Modal"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.164)', zIndex: 1000 },
          content: { ...Teste.reduce((acc, obj) => ({ ...acc, ...obj }), {}) },
          
        }}
      >
        
        <ModalWrapper>
          {/* Componente reutilizavel */}
            <ContentTitleModal>
                <TitleModal>Identifique-se</TitleModal>
                <Close src={iconClose} onClick={fecharModal}/>
            </ContentTitleModal>
            <ContentModalForm>
              {/* Componente rautilizavel */}
                <Title>Cadastro</Title>
                <Text>Crie sua conta e aproveite nossas condições e promoções imperdivéis!</Text>
                <ContentProgressRegister>
                    <Text>Etapa: {etapaAtual}/3</Text>
                    <Link onClick={() => mudarEtapa()}>voltar</Link>
                </ContentProgressRegister>
                <ContentForm>
                    {etapaAtual === 1 ? (
                      <DadosPessoaisForm
                        dados={dadosPessoais}
                        onSubmit={handleDadosPessoaisSubmit}
                        onChange={(novosDados) => setDadosPessoais(novosDados)}
                        onChangeEtapa={fecharModal}
                      />
                    ) : etapaAtual === 2 ? (
                      <SenhaForm onSubmit={handleSenhaSubmit} onChangeEtapa={fecharModal}/>
                    ) : etapaAtual === 3 ? (
                      <VerificacaoEmailForm email={dadosPessoais.email} onVerificarEmail={handleVerificarEmail}  onChangeEtapa={fecharModal}/>
                    ) : null}
                    <br/>
                    
                </ContentForm>
                <ContentRegisterRoute>
                    <Text>ou</Text>
                    <Text>Já possui uma conta? <strong><Link>Login!</Link></strong></Text>   
                </ContentRegisterRoute>
            </ContentModalForm>
          
          
        </ModalWrapper>
      </Modal>
    </div>
  );
};

