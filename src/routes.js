import MoviesList from './components/MoviesList';
import MovieInfo from './components/MovieInfo';
import Home from './components/Home';
export const routes = [
    { path: '/', component: Home,},
    { path: '/movies/:search', component: MoviesList },
    { path: '/movie/:id', component: MovieInfo }
];