interface Produto{
    id: string;
    titulo: string;
    preco: number;
    imagem: string;
}
// array que simula dados vindos da API
export const produtos:Produto[] = [
    {id: '1', titulo: 'Mouse Gamer', preco: 119.99, imagem: 'https://http2.mlstatic.com/D_NQ_NP_926318-MLB93963743229_102025-O.webp'},
    {id: '2', titulo: 'Fone de ouvido', preco: 239.99, imagem: 'https://acdn-us.mitiendanube.com/stores/005/839/688/products/a780acfc6127312c97fa7e62086fbfc3-efd22d72afd1de2e7a17413677850425-1024-1024.webp'},
    {id: '3', titulo: 'Monitor 23.8"', preco: 799.99, imagem: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/172843'},
    {id: '4', titulo: 'Teclado Mecânico', preco: 319.99, imagem: 'https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/k/6/k625p-kbs-pt-brown7.jpg'},
    {id: '5', titulo: 'Mousepad', preco: 39.99, imagem: 'https://images.kabum.com.br/produtos/fotos/618824/mousepad-gamer-fallen-pantera-pro-estendido-mp-pa-pr-es_1729159925_gg.jpg'}
]