const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const checkNameFormat = (value: string) : any => {
    // if(value.length > 30)
    //     return "Name must not exceed 30 characters";
    // return (value.length < 2 ? "Name must have at least 2 letters" : null)
    if(value.length > 30)
        return "Name must not exceed 30 characters";
    return (value.length < 2 || value.length > 30 ? "Name must have at least 2 letters" : null)
}

const checkPhoneFormat = (value: string) : any => {
    // if(value.length > 11)
    //     return "Phone must not exceed 11 characters";
    // if(value.length < 8)
    //     return "Phone must have at least 8 letters"
    // if(!phoneRegex.test(value))
    //     return "Invalid phone"


    if(value.length > 11 || value.length < 8 || !phoneRegex.test(value))
        return "Invalid phone"    
    return null;
}

const checkEmailFormat = (value: string) : any => {
    // if(value.length < 6)
    //     return "Email must have at least 6 letters"
    // // if(value.length > 320)
    // //     return "Email must not exceed 320 characters";
    // if(!emailRegex.test(value))
    //     return "Invalid email"


    if(!emailRegex.test(value) || value.length < 6 || value.length > 100)
        return "Invalid email"    
    return null;
}

const checkPasswordFormat = (value: string) : any => {
    // if(value.length > 30)
    //     return "Password must not exceed 30 characters";
    // if(value.length < 8)
    //     return "Password must have at least 8 characters";
    // if(!/(?=.*[A-Z])/.test(value))
    //     return "Password must contain uppercase letters";
    // if(!/(?=.*[!@#$&*])/.test(value))
    //     return "Password must contain special characters";
    // if(!/(?=.*[0-9])/.test(value))
    //     return "Password must contain numeric characters";
    // if(!/(?=.*[a-z].*[a-z].*[a-z])/.test(value))
    //     return "Password must contain lowercase letters"

    if(value.length > 30)
        return "Password must not exceed 30 characters";
    // if(value.length < 8)
    //     return "Password must have at least 8 characters";
    
    return null;
}

const checkAddressFormat = (value: string) : any => {
    // if(value.length > 30)
    //     return "Password must not exceed 30 characters";
    // if(value.length < 8)
    //     return "Password must have at least 8 characters";
    // if(!/(?=.*[A-Z])/.test(value))
    //     return "Password must contain uppercase letters";
    // if(!/(?=.*[!@#$&*])/.test(value))
    //     return "Password must contain special characters";
    // if(!/(?=.*[0-9])/.test(value))
    //     return "Password must contain numeric characters";
    // if(!/(?=.*[a-z].*[a-z].*[a-z])/.test(value))
    //     return "Password must contain lowercase letters"

    if(value.length > 200)
        return "Address must not exceed 200 characters";
    // if(value.length < 8)
    //     return "Password must have at least 8 characters";
    
    return null;
}

export {checkNameFormat, checkPhoneFormat, checkEmailFormat, checkPasswordFormat, checkAddressFormat};


