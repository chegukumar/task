import { LOCAL_STORAGE_KEY } from './config';

export const isUserLoggedIn = () => {
    let user = localStorage.getItem(LOCAL_STORAGE_KEY);
    // return true
    if(!user || user === undefined){
        return false;
    }
    else {
        // user = JSON.parse(user);
        return user;
    }
    return user;
};

export const saveUser = (user) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    return localStorage.getItem(LOCAL_STORAGE_KEY);
};

export const logOutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
};
