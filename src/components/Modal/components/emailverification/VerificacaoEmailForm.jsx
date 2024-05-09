import React, { useState, useEffect } from "react";
import {
  LabelForm,
  Text,
  Input,
  AlignText,
  ContentButtons,
  AlertCode,
  MsgAlert,
} from "./style";
import MultiInputCode from "../InputCode/MultiInputCode";
import ButtonModal from "../ButtonModal";
import TimerWithBorder from "../TimerWithBorder";
import styled from "styled-components";

const VerificacaoEmailForm = ({
  email,
  name,
  onVerificarEmail,
  onChangeEtapa,
  isOpenModal,
  setOpenModal,
  typeModalUser,
  setTypeModalUser,
}) => {
  const [codigoVerificacao, setCodigoVerificacao] = useState("");
  const [msgCodeError, setMsgCodeError] = useState("");
  const [parentTime, setParentTime] = useState(60);
  const [sendEmail, setSendEmail] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);

  console.log("email:", email);
  console.log("email:", name);
  console.log("Tempo para expirar o codigo: ", parentTime);

  const onVerificarEmailForm = (codigo) => {
    // Aqui você pode adicionar lógica para verificar o código de verificação
    console.log("Código de verificação na função:", codigo);
    // Adicione sua lógica de verificação de email aqui

    const verificationResult = verify(codigo);
    const verificaTime = parentTime;

    if (verificaTime > 0) {
      if (verificationResult.status != 200) {
        alert("Código de verificação inválido");
        setMsgCodeError("Código inválido!");
      } else {
        alert("Código de verificação válido, usuario logado");
        setMsgCodeError("");
      }
    } else {
      setMsgCodeError("Tempo de verificação esgotado!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerificarEmailForm(codigoVerificacao);
  };

  const enviarEmail = async (name, email) => {
    try {
      // const response = await fetch('sua-url-do-backend', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ name, email }),
      // });

      const response = 200;
      if (response == 200) {
        console.log("Email enviado com sucesso:", name, email);
        setSendEmail(true);
        setDisabledInput(false);
      } else {
        console.error("Erro ao enviar o email");
      }
    } catch (error) {
      console.error("Erro durante a requisição:", error);
    }
  };

  useEffect(() => {
    enviarEmail(name, email);
  }, []);

  const verify = (codigo) => {
    if (codigo === "123456") {
      return { status: 200, message: "código valido" };
    } else {
      return { status: 404, message: "código invalido" };
    }
  };

  const handleTimeUpdate = (newTime) => {
    setParentTime(newTime);
    if (newTime == 0) {
      setDisabledInput(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AlignText>
        <Text>
          Enviamos um código de verificação para o e-mail: <br />{" "}
          <strong>{email}</strong>
        </Text>
        <Text>Fique atento ao tempo de expiração desse código</Text>
      </AlignText>
      <LabelForm>
        <MultiInputCode
          numInputs={6}
          onCodeChange={setCodigoVerificacao}
          disabled={disabledInput}
        />
      </LabelForm>

      {msgCodeError && (
        <AlertCode>
          <MsgAlert>{msgCodeError}</MsgAlert>
        </AlertCode>
      )}
      <br />
      {sendEmail && <TimerWithBorder onTimeUpdate={handleTimeUpdate} />}

      <br />
      <ContentButtons>
        <ButtonModal
          label={"Cancelar"}
          typebutton={"danger"}
          onClick={() => {
            setOpenModal(!isOpenModal), setTypeModalUser(!typeModalUser);
          }}
        />
        {parentTime > 0 ? (
          <ButtonModal
            type={"submit"}
            label={"Verificar"}
            typebutton={"default"}
          />
        ) : (
          <ButtonModal
            type={"submit"}
            label={"Reenviar código"}
            typebutton={"default"}
          />
        )}
      </ContentButtons>
    </form>
  );
};

export default VerificacaoEmailForm;
