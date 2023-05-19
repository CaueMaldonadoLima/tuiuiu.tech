interface CardTabelaProps {
    produto: string;
    avaliacao: any;
}

export default function CardTabela(props: CardTabelaProps) {
    return (
        <div>
            <tbody>
                <tr>
                    <td className="border p-2 py-4">{props.produto}</td>
                    <td className="border p-2 py-4">{props.avaliacao}</td>                                        
                </tr>
            </tbody>
        </div>
    )
}