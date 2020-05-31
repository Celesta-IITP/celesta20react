import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR
  } from "../actions/types";
  const initialState={
    isAuthenticated: false,
    isLoading: false,
    token: '',
    user: null,
    openloginModal: false,
    openregisterModal: false
}
export default function(state=initialState,action){
    switch(action.type){
      case USER_LOADING:
          return{
              ...state,
              isLoading:true
          };
      case USER_LOADED:
          return{
              ...state,
              isLoading:false,
              isAuthenticated:true,
              user:action.payload
          };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isAuthenticated:true,
            user:action.payload
        };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
                localStorage.removeItem("JWT_TOKEN");
                localStorage.removeItem("USER");
                return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null
                }; 
        default:
            return state;
    }
}