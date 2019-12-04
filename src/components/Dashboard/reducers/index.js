const INITIAL_STATE ={
    dashboard:{
        data:[],
        pending:null,
        failed:null
    }
}

export default function dashboardReducer(state=INITIAL_STATE,action={}){
    switch(action.type){
        case 'GET_ALL_DASHBOARD_USERS_PENDING':
        return {
            ...state,
            dashboard:{
                ...state.dashboard,
                failed: false,
                pending: true,
            }

        };
        case 'GET_ALL_DASHBOARD_USERS_FAILED':
        return {
            ...state,
            dashboard:{
                ...state.dashboard,
                failed:true,
                pending:false,
                
            }
        };
        case 'GET_ALL_DASHBOARD_INFO':
        return {
            ...state,
            dashboard:{
                ...state.dashboard,
                data:action.payload.response,
                failed: false,
                pending: false,
            }

        };
        default :
        return state;
    }

}