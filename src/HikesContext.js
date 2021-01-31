import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    activeHike: {},
    error: null,
    setHikes: () => {},
    clearHikes: () => {},
    setActiveHike: () => {},
    clearActiveHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;