const checkValidData=(email,password)=>{
    // Basic validation for email and password
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return "Invalid email format";
    }
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/; // Minimum 4 characters, at least one letter and one number
    if(!passwordRegex.test(password)){
        return "Invalid password format";
    }
    return null; // No errors
}

export default checkValidData;