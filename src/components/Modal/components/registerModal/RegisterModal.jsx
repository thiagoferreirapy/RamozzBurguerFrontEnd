import React, { useState } from "react";
import Modal from "react-modal";
import {
  ContentTitleModal,
  ContentModalForm,
  Title,
  Text,
  TitleModal,
  Close,
  ContentForm,
  Input,
  Link,
  ContentRegisterRoute,
  Button,
  ContentProgressRegister,
  ProgressBar,
  Bar,
  ContentButtons,
} from "./style";

import iconClose from "../../../../images/icons/buttonClose.svg";

import DadosPessoaisForm from "../dadosPessoais/DadosPessoaisForm";
import SenhaForm from "../passwordForm/SenhaForm";
import VerificacaoEmailForm from "../emailverification/VerificacaoEmailForm";
// import Progress from './components/ButtonModal';
// import ButtonModal from './components/ButtonModal';

export default function RegisterModal({
  isOpenModal,
  setOpenModal,
  typeModalUser,
  setTypeModalUser,
}) {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setEtapaAtual(1);
  };

  const [dadosPessoais, setDadosPessoais] = useState({ nome: "", email: "" });
  const [etapaAtual, setEtapaAtual] = useState(1); // 1 para dados pessoais, 2 para senha

  const mudarEtapa = () => {
    if (etapaAtual === 3) {
      setEtapaAtual(2);
    } else if (etapaAtual === 2) {
      setEtapaAtual(1);
    }
  };

  const handleDadosPessoaisSubmit = () => {
    const regexNome = /^(?=.*[$*&@#.,;><)([{}=+%$!?/:_-])/;

    var regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let nome = dadosPessoais.nome.trim();
    let email = dadosPessoais.email.trim();

    if (nome.length === 0) {
      alert("nome obrigatorio");
    } else if (nome.length < 5) {
      alert("nome muito curto, minimo 5 caracteres");
    } else if (nome.length > 255) {
      alert("nome muito grande, máximo 255 caracteres");
    } else if (nome.match(regexNome) != null) {
      alert(
        "Nome inválido, nome de usuário não pode conter caracteres especiais"
      );
    } else if (email.length === 0) {
      alert("email obrigatorio");
    } else if (email.match(regexEmail) == null) {
      alert("E-mail inválido");
    } else {
      alert("Agora crie sua senha");
    }
    setEtapaAtual(2);
  };

  const handleVerificarEmail = (codigoVerificacao) => {
    console.log("Código de verificação do email:", codigoVerificacao);
  };

  const handleSenhaSubmit = (senha, confirmacaoSenha) => {
    alert("Senha e confirmação de senha:", senha, confirmacaoSenha);
    setEtapaAtual(3);
  };

  return (
    <>
      <ContentTitleModal>
        <TitleModal>Identifique-se</TitleModal>
        <Close
          src={iconClose}
          onClick={() => {
            setOpenModal(!isOpenModal), setTypeModalUser(!typeModalUser);
          }}
        />
      </ContentTitleModal>
      <ContentModalForm>
        {/* Componente rautilizavel */}
        <Title>Cadastro</Title>
        <Text>
          Crie sua conta e aproveite nossas condições e promoções imperdivéis!
        </Text>
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
              isOpenModal={isOpenModal}
              setOpenModal={setOpenModal}
              typeModalUser={typeModalUser}
              setTypeModalUser={setTypeModalUser}
            />
          ) : etapaAtual === 2 ? (
            <SenhaForm
              onSubmit={handleSenhaSubmit}
              onChangeEtapa={fecharModal}
              isOpenModal={isOpenModal}
              setOpenModal={setOpenModal}
              typeModalUser={typeModalUser}
              setTypeModalUser={setTypeModalUser}
            />
          ) : etapaAtual === 3 ? (
            <VerificacaoEmailForm
              email={dadosPessoais.email}
              name={dadosPessoais.nome}
              onVerificarEmail={handleVerificarEmail}
              onChangeEtapa={fecharModal}
              isOpenModal={isOpenModal}
              setOpenModal={setOpenModal}
              typeModalUser={typeModalUser}
              setTypeModalUser={setTypeModalUser}
            />
          ) : null}
          <br />
        </ContentForm>
        <ContentRegisterRoute>
          <Text onClick={() => setTypeModalUser(!typeModalUser)}>
            Já possui uma conta?
            <strong>
              <Link>Login!</Link>
            </strong>
          </Text>
        </ContentRegisterRoute>
      </ContentModalForm>
    </>
  );
}
