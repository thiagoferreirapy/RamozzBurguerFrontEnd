import React, { useState } from 'react';
import Modal from 'react-modal';
import {Teste, ActiveModal, ModalWrapper,ContentTitleModal,ContentModalForm, Title, Text, TitleModal, Close, ContentForm,  Input, Link, ContentRegisterRoute, Button} from './style'

import iconClose from '../../../images/icons/buttonClose.svg'


60
export default function LoginModal(){
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
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
        {/* Utilizando o componente estilizado */}
        <ModalWrapper>
            <ContentTitleModal>
                <TitleModal>Identifique-se</TitleModal>
                <Close src={iconClose} onClick={fecharModal}/>
            </ContentTitleModal>
            <ContentModalForm>
                <Title>Login</Title>
                <Text>Entre em sua conta para aproveitar todas as novidades e condições imperdiveis</Text>
                <ContentForm>
                    <Text>E-mail</Text>
                    <Input type='email' placeholder='example@email.com' required/>
                    <Text>Senha</Text>
                    <Input type='password' placeholder='Senha' required/>
                    <Link>Esqueci a minha senha</Link>
                    <br/>
                    <Button>Entrar</Button>
                </ContentForm>
                <ContentRegisterRoute>
                    <Text>ou</Text>
                    <Text>Não possui uma conta? <strong><Link>Cadastre-se!</Link></strong></Text>
                    
                </ContentRegisterRoute>
            </ContentModalForm>
          
          
        </ModalWrapper>
      </Modal>
    </div>
  );
};

