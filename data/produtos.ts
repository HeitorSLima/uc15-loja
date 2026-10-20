interface Produto{
    id: string;
    titulo: string;
    preco: number;
    imagem: string;
}
// array que simula dados vindos da API
export const produtos:Produto[] = [
    {id: '1', titulo: 'Mouse Gamer', preco: 119.99, imagem: 'https://http2.mlstatic.com/D_NQ_NP_926318-MLB93963743229_102025-O.webp'},
    {id: '2', titulo: 'Fone de ouvido', preco: 239.99, imagem: ''},
    {id: '3', titulo: 'Monitor 23.8"', preco: 799.99, imagem: ''},
    {id: '4', titulo: 'Teclado Mecânico', preco: 319.99, imagem: ''},
    {id: '5', titulo: 'Mousepad', preco: 39.99, imagem: ''}
]