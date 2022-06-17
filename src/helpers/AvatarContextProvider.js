import React, {createContext, useEffect, useState} from "react";
import loginperson from "../assets/loginperson.jpeg";
import {isBase64Image} from "./isBase64Image";


export const AvatarContext = createContext(null);

const {Provider} = AvatarContext;

const AvatarContextProvider = ({children}) => {

    let currentAvatar = localStorage.getItem('image');
    let currentAvatarData = loginperson;
    if (currentAvatar) {
        if (isBase64Image(currentAvatar)) {
            currentAvatarData = currentAvatar;
        } else {
            currentAvatarData = loginperson;
            localStorage.removeItem('image');
        }
    }

    const [avatarValue, setAvatarValue] = useState(currentAvatarData);

    useEffect(() => {
        setAvatarValue(currentAvatarData);
    }, [currentAvatar, currentAvatarData]);

    return <Provider value={[avatarValue, setAvatarValue]}>{children}</Provider>;
};

AvatarContextProvider.context = AvatarContext;

export default AvatarContextProvider;