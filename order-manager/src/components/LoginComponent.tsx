import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        console.log("Form submitted", event);
    };      

    return (
        <>
        <Box component="section" sx={{ p: 10, border: '1px solid grey' }}>
             <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="USERNAME" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <br/>
                <TextField id="outlined-basic" label="PASSWORD" variant="outlined"  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <Button variant="contained" sx={{mt: 2}}>LOGIN</Button>
                <Button variant="outlined" sx={{mt: 2 , ml: 2}}>SIGN-UP</Button>
             </form>
        </Box>
        </>
    )
}

export default LoginComponent;