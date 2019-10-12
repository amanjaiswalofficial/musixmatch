import React from 'react';


//On creating object of Artist, we will provide value for artist
const Artist =({artist}) => {

    //if no value is provided for artist, return null, hence no error
    if (!artist) return null;

    //pull values out from artist
    const { images, name, followers, genres} = artist;

    //apply styles on any element, here on image, note 2 times {{}}
    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img src={images[0].url} alt='artist-profile' style=
            {
                {
                    width: 300,
                    height: 300,
                    borderRadius: 200,
                    objectFit: 'cover'
                }
            }
            />
        </div>
    )
}

export default Artist;