import React from 'react';

const HikesContext = React.createContext({
    "hikes": [],
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;