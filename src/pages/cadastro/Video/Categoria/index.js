import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../../componentes/PageDefault';
import FormField from '../../../../componentes/FormField';

function CadastroCategoria () {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais); // [] serve para abrir o que vem antes do array

/*          ↑
        nome da variável
                                ↑
                            o que faz ela mudar
                                                        ↑
                                                    valor inicial */
function setValue(chave, valor) {
    //chave: valor variável, bla, bla
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }
function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
        getAttribute('name'),
        value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) { //onSubmit retira os relods da página
                infosDoEvento.preventDefault(); 
                setCategorias([ //função permite a criação de listas, mantendo valores pré definidos
                    ...categorias, 
                    values
                ]);

                setValues(valoresIniciais)
            }}>
                    <FormField
                        label="Categoria: "
                        type="text"
                        value={values.nome}
                        name="nome"
                        onChange={handleChange}
                     />
                         <FormField
                         label="Descrição: "
                         type="text"
                         value={values.descricao}
                         name="descricao"
                        onChange={handleChange}
                     />
                         <FormField
                         label="Cor: "
                         type="color"
                         value={values.cor}
                         name="cor"
                        onChange={handleChange}
                     />
         {/*        <div>
                <label>
                    Descrição:   
                    <textarea
                        type="text"
                        value= {values.descricao}
                        name="descricao"
                        onChange={handleChange}
                        />
                </label>
                </div>
                <div>
                <label>
                   Cor:  
                    <input
                        type="color"
                        value= {values.cor}
                        name="cor"
                        onChange={handleChange}
                        />
                </label>
                </div> */}
                <button>
                    Cadastrar
                </button>
            </form>
                
                <ul>
                    {categorias.map((categoria, indice) => {
                      return (
                          <li key={`${categoria}${indice}`}> 
                              {categoria.nome}
                          </li>
                      )  
                    })}
                </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;