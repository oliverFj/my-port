import React from 'react';

export const AppContext = React.createContext();

export function appReducer(state, action) {
    switch (action.type) {
      case 'SET_PAGE':
        return {
          ...state,
          headline: action.payload.headline,
          sidebar: action.payload.sidebar,
          main: action.payload.main,
        };
      default:
        return state;
    }
  }