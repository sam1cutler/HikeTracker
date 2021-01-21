import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    activeHike: {},
    error: null,
    setHikes: () => {},
    clearHikes: () => {},
    setActiveHike: () => {},
    clearActiveHike: () => {},
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;