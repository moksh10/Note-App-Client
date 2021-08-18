import validator from 'validator'

const isEmail = (value) => {
    return validator.isEmail(value) 

}
const isNameValid = (value) => {
    if(value.length===0)
    {
        return false;
    }
    if(value.length>=3&&value.length<=20)
    {
        return true;
    }
    return false;
}
const isPasswordValid = (value) => {
    
    if(value.length>7)
    {
        return true;
    }
    return false;
}
const confirmPassword = (value1,value2) => {
    return ((value1===value2)&&(value1!==""&&value2!==""))
}
const isInputValid = (value) =>{
    return value!==""
}
const isHeadingValid = (value) =>{
    if(value==="")
    {
        return false
    }
    if(value.length>100)
    {
        return false;
    }
    return true
}
const isContentValid = (value)=>{
    if(value==="")
    {
        return false
    }
    if(value.length>2000)
    {
        return false;
    }
    return true


}
export {isEmail, isNameValid,isPasswordValid,confirmPassword,isInputValid,isHeadingValid,isContentValid}