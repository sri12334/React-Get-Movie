import SearchContext from './context/SearchContext';
import MovieContainer from './components/MovieContainer';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

function App() {
    const [searchText, setSearchText] = useState('man');

    return (
        <SearchContext.Provider
            value={{ searchText: searchText, setSearchText: setSearchText }}
        >
            <div>
                <Header title="Get Movie" />
                <Search />
                <MovieContainer />
            </div>
        </SearchContext.Provider>
    );
}

export default App;
