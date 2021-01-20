import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    error: null,
    loggedInUser: '',
    setHikes: () => {},
    setUser: () => {},
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
})

export default HikesContext;