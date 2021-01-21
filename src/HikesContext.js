import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    activeHike: {},
    error: null,
    setHikes: () => {},
    setActiveHike: () => {},
    clearActiveHike: () => {},
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;