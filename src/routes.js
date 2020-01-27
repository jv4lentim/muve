import ListaFilmes from './components/ListaFilmes';
import FilmeDetalhes from './components/FilmeDetalhes';
export const routes = [
    { path: '', component: ListaFilmes},
    { path: '/lista-filmes', component: ListaFilmes },
    { path: '/movie', component: FilmeDetalhes }
];