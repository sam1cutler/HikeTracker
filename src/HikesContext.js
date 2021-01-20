import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    activeHike: {},
    error: null,
    loggedInUser: '',
    setHikes: () => {},
    setActiveHike: () => {},
    //setUser: () => {},
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;