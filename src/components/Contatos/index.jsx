import { ContainerContato, ContainerFoto, ContainerNome, Foto, Paragrafo } from "./style"

function Contatos () {
    return (
        <ContainerContato>
            <ContainerFoto>
                <Foto>
                <p>foto</p>
                </Foto>
                <ContainerNome>
                <Paragrafo>nome</Paragrafo>
                <Paragrafo>ultima mensagem...</Paragrafo>
                </ContainerNome>
            </ContainerFoto>
            <p>14:10</p>
        </ContainerContato>
    )
}
export default Contatos