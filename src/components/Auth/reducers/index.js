const INITIAL_STATE = {
    login: {
        failed: null,
        pending: null,
        
    },
};

export default function loginReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                login:{
                    ...state.login,
                    failed: null,
                    pending: true,
                    
                }
            };
        case 'LOGIN':
            return {
                ...state,
                login:{
                    ...state.login,
                    failed: false,
                    pending: false,
                }
            };
        case 'LOGIN_FAILED':
            console.log(action);
            return {
                ...state,
                login:{
                    ...state.login,
                    failed: true,
                    pending: false,
                    
                }
            };
        case 'LOGOUT':
            return Object.assign({}, state, INITIAL_STATE);
        default:
            return state;
    }
}
