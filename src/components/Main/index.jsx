import {
    Button,
  ConContatos,
  ContainerConteudo,
  ContainerInfomações,
  ContainerInput,
  ContainerMain,
  ContainerMenor,
  Div,
  GridMensagem,
  Input,
  InputMensagem,
  P,
  Pesquisar,
  Pessoal,
} from "./style";
import { SiTheconversation } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSkipForwardBtnFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Contatos from "../Contatos";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { CiMicrophoneOn } from 'react-icons/ci'

function Main() {
  return (
    <ContainerMain className="container">
      <br />
      <ContainerMenor>
        <Div>
          <Pessoal className="mt-3">
            <p>foto</p>
            <div className="d-flex">
              <P>
                <BsFillSkipForwardBtnFill size={20} />
              </P>
              <P>
                <SiTheconversation size={20} />
              </P>
              <P>
                <AiOutlineMenu size={20} />
              </P>
            </div>
          </Pessoal>
          <Pesquisar>
            <Input
              type="text"
              placeholder="Procure ou comece uma nova conversa"
            />
          </Pesquisar>
          <ConContatos>
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
          </ConContatos>
        </Div>
        <GridMensagem>
            <ContainerInfomações>
                <div className="d-flex mt-3">
                    <p className="ms-4">foto</p>
                    <p className="ms-3">nome</p>
                </div>
                <div className="d-flex mt-3">
                    <p className="me-4"><BsSearch size={20}/></p>
                    <p className="me-4"><AiOutlineMenu size={20}/></p>
                </div>
                
            </ContainerInfomações>
            <ContainerConteudo>
                CONTEUDO
            </ContainerConteudo>
            <ContainerInput>
          <BsFillEmojiSunglassesFill
            size={30}
            className="text-muted ms-3 mb-2"
          />
          <AiOutlinePaperClip size={30} className="text-muted ms-3 me-3 mb-2" />
          <InputMensagem type="text" placeholder="Mensagem..." />
          <CiMicrophoneOn className="ms-4 text-muted" size={30}/>
          </ContainerInput>
        </GridMensagem>
      </ContainerMenor>
    </ContainerMain>
  );
}
export default Main;
