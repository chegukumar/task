function getUrl(){
    let URL = 'http://localhost:3000/dataDashboard.json';
    return URL;
}

export default function getAllDashboard(){
    const URL = getUrl();
    return function(dispatch){
        dispatch(
            getAllDashboardPending()
        );
        fetch(URL,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then((resp)=>resp.json())
        .then((json)=>{
            dispatch(
                getAllDashboardResponse(json)
            )
        }).catch(error => {
            dispatch(getAllDashboardFailed(error));
        });
    }
}

function getAllDashboardPending(){
    return {
        type: 'GET_ALL_DASHBOARD_USERS_PENDING'
    }
}

function getAllDashboardResponse(response){
    return{
        type: 'GET_ALL_DASHBOARD_INFO',
        payload: {
            response
        }
    }
}

function getAllDashboardFailed(error){
    return{
        type: 'GET_ALL_DASHBOARD_USERS_FAILED',
        error
    }
}