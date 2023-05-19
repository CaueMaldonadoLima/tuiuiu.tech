import CardTabela from "./CardTabela";
import { useState } from "react";

interface Produto {
    id: number;
    nome: string;
    avaliacao: number;
  }
  

export default function Tabela() {

    const [produto, setProduto] = useState("");
    const [avaliacao, setAvaliacao] = useState<number | undefined>();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    
    const pesquisarProduto = () => {
        // pesquisa do produto com base no link fornecido
        const novoProduto = {
          id: produtos.length + 1,
          nome: produto,
          avaliacao: avaliacao || 0, // usar valor padrão caso a avaliação não esteja definida
        };
        setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);  // atualiza o estado `produtos` com o novo produto
        // limpa o estado `produto` e `avaliacao` após a pesquisa
        setProduto("");
        setAvaliacao(undefined);
    };

    return (
        <div>
            <div className="relative bg-gray-900 p-5 rounded-lg h-6/12">
                <input
                    type="text"
                    className="w-full border bg-gray-900 border-gray-300 p-2 rounded-lg mb-4"
                    placeholder="Digite seu produto..."
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white rounded-lg px-4 py-2"
                    onClick={pesquisarProduto}
                >
                    Pesquisar
                </button>
                <table className={`w-full mt-10 ${produtos.length > 0 ? 'h-72' : 'h-6/12'}`}>
                    <thead>
                        <tr>
                            <th className="border p-2 py-4">Produto</th>
                            <th className="border p-2 py-4">Avaliação Média</th>
                        </tr>
                    </thead>
                        <tbody>
                            {produtos.map((produto) => (
                            <CardTabela
                                key={produto.id}
                                produto={produto.nome}
                                avaliacao={produto.avaliacao}
                            />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }