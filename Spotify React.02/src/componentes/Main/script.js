import React, { useState } from 'react';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [artist, setArtist] = useState(null);
    const [showArtist, setShowArtist] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(true);

    const requestApi = (term) => {
        const url = `http://localhost:3000/artists?name_like=${term}`;
        
        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result));
    };

    const displayResults = (result) => {
        if (result.length > 0) {
            setArtist(result[0]); // Exibe o primeiro artista encontrado
            setShowArtist(true);
            setShowPlaylist(false);
        } else {
            setShowArtist(false);
            setShowPlaylist(true);
        }
    };

    const handleInputChange = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term === '') {
            setShowPlaylist(true);
            setShowArtist(false);
            return;
        }

        requestApi(term);
    };

    return (
        <div>
            <input
                type="text"
                id="search-input"
                placeholder="Pesquisar artista..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {showArtist && (
                <div id="result-artist">
                    <h2 id="artist-name">{artist.name}</h2>
                    <img id="artist-img" src={artist.urlImg} alt="Imagem do artista" />
                </div>
            )}
            {showPlaylist && (
                <div id="result-playlists">
                    {/* Resultados das playlists */}
                </div>
            )}
        </div>
    );
};

export default Main;