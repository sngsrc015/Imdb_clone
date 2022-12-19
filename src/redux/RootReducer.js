import { State } from "react-native-gesture-handler";

const initialState = {
    user: {},
    isLoggedIn: false,
    isDarkTheme: false,
    record:[]
 
  };
  
  export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DARK_THEME':
        state.isDarkTheme = action.payload;
        return {
          ...state,
          theme: state.isDarkTheme,
        };
      case 'SET_USER':
        state.user = action.payload;
        return {
          ...state,
          user: state.user,
        };



case 'LOGIN':
  state.isLoggedIn = true;
  // state.record = {};

return{
  ...state,
  isLoggedIn:state.isLoggedIn,

}

case 'RECORD':
 return{
    ...state,
  record:[...state.record,...action.payload]
  }
     case 'LOGOUT':
        state.user = {};
  
        state.isLoggedIn = false;
        // state.record = {};
        return {
          ...state,
    };

  
        
      default:
        return state;
    }
  };
  