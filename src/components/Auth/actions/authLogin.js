import {
    saveUser,
    logOutUser
} from '../../../utils';

function getUrl(){
    let URL = 'http://localhost:3000/dataLogin.json';
    return URL;
}
/**
*
* @returns {Function}
*/
export default function login(body) {
    
    const URL = getUrl();
    console.log(body,"body")
    return function (dispatch) {
        dispatch(
            request()
        );
        fetch(URL, body)
        .then((resp)=>resp.json())
        .then((data)=> 
        {
            if((body.email === data.username) && (body.password === data.password)){
                if(saveUser(data.data)) {
                            dispatch(
                                received(data)
                            )
                        }
                        else {
                            dispatch(failed({error: true, statusCode: "400", message: "Something went wrong"}));
                        }
            }else {
                console.log("false")
            }
        })
        .catch(error => {
            dispatch(failed(error));
        });
    };
}

/**
*
* @returns {{type}}
*/
function request() {
    return {
        type: 'LOGIN_PENDING',
    };
}

/**
*
* @param response
* @returns {{type, payload: {json: *}}}
*/
function received(response) {
    return {
        type: 'LOGIN',
        payload: {
            response
        }
    };
}

/**
*
* @param error
* @returns {{type, error: *}}
*/
function failed(error) {
    return {
        type: 'LOGIN_FAILED',
        error
    };
}


export const logOut = () => {
    logOutUser();
    return {
        type: 'LOGOUT'
    };
};