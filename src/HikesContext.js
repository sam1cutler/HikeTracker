import React from 'react';

const HikesContext = React.createContext({
    hikes: [],
    error: null,
    setHikes: () => {},
    //editHike: () => {},
    //addHike: () => {},
    deleteHike: () => {},
    // define all the above (fxns esp) in App.js, 
    // include in value prop fed to context provider
})

export default HikesContext;