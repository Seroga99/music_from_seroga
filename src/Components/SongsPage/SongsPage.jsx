import React from 'react';
import SongsCard from '../SongsCard/SongsCard';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import './SongsPage.css';

const SongsPage = ({songsData, addFavourite, handlerYoutube}) => {
    return (
        <FlipMove>
        <div className='content'>
        {songsData.map((el, index) => <SongsCard url={el.image[1]['#text']} name={el.name} artist={el.artist} key={el.url} addFavourite={addFavourite} 
        index={index} type='favoriteSongs' interesting='interestingSongs' checkArr='songsData' handlerYoutube={handlerYoutube}/>)}
        </div>
        </FlipMove>
    );
};

SongsPage.propTypes = {
    
};

export default SongsPage;
