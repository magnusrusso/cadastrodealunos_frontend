import React from 'react';
/*vamos receber essa variavel aluno como props*/
const ListagemItem = (props) => {
    const aluno = props.aluno;
    return (
    <div className="Aluno">
<p className="Nome">{aluno.nome}</p>
<p className="Dados">{aluno.ra}, {aluno.idade} anos </p></div>
    );
}

export default ListagemItem;