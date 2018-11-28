import React from 'react';
import Header from './Header';
import ListagemItem from './ListagemItem';

//só precisa importar component se for usar classe
//só precisa usar classe quando tiver lifecycle ou state
//quando envolve html em react usa ()
//nao se usa br para layout
const NomesAlunos = [
    { nome: 'Joao Carlos', ra: 3485858585, idade: 34 },
    { nome: 'Joao Carlos 2', ra: 3485858586, idade: 35 },
    { nome: 'Joao Carlos 3', ra: 3485858587, idade: 36 },
    { nome: 'Joao Carlos 4', ra: 3485858588, idade: 37 },
]
const Listagem = () => (
    <div>
        <Header/>
        <main>
            {NomesAlunos.map (
                (aluno) => <ListagemItem key={aluno.ra} aluno={aluno}/>
            )}
        </main>
    </div>
)
export default Listagem;
