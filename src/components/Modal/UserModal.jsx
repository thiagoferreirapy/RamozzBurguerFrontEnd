import {
  BackgroundModal,
  Modal,
  ContentTitleModal,
  TitleModal,
  Close,
  ContentModalForm,
  Title,
  Text,
  TextRegister,
  ContentForm,
  Input,
  Link,
  ContentRegisterRoute,
  Button,
  ContentInputPAssaword,
  IconPassword,
} from "./style";
import iconClose from "../../images/icons/buttonClose.svg";
import { useState } from "react";
import RegisterModal from "./components/registerModal/RegisterModal";
import { InputPassword } from "../IconPassword";

export function UserModal({ isOpenModal, setOpenModal }) {
  const [typeModalUser, setTypeModalUser] = useState(true);

  if (isOpenModal) {
    return (
      <BackgroundModal>
        {typeModalUser ? (
          <Modal>
            <ContentTitleModal>
              <TitleModal>Identifique-se</TitleModal>
              <Close
                src={iconClose}
                onClick={() => setOpenModal(!isOpenModal)}
              />
            </ContentTitleModal>
            <ContentModalForm>
              <Title>Login</Title>
              <Text>
                Entre em sua conta para aproveitar todas as novidades e
                condições imperdiveis
              </Text>
              <ContentForm>
                <Text>E-mail</Text>
                <Input type="email" placeholder="example@email.com" required />
                <Text>Senha</Text>
                {/* <ContentInputPAssaword>
                                    <Input type='password' placeholder='Senha' required/>
                                    <IconPassword>olho</IconPassword>
                                </ContentInputPAssaword> */}
                <InputPassword placeholder="Senha" required isValid={""} />
                <Link>Esqueci a minha senha</Link>
                <br />
                <Button>Entrar</Button>
              </ContentForm>
              <ContentRegisterRoute>
                <Text>ou</Text>
                <TextRegister onClick={() => setTypeModalUser(!typeModalUser)}>
                  Não possui uma conta?{" "}
                  <strong>
                    {" "}
                    <Link>Cadastre-se!</Link>{" "}
                  </strong>
                </TextRegister>
              </ContentRegisterRoute>
            </ContentModalForm>
          </Modal>
        ) : (
          <Modal>
            <RegisterModal
              isOpenModal={isOpenModal}
              setOpenModal={setOpenModal}
              typeModalUser={typeModalUser}
              setTypeModalUser={setTypeModalUser}
            />
          </Modal>
        )}
      </BackgroundModal>
    );
  }
}
