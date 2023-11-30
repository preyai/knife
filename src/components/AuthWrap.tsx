import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import bgr from "../assets/bgr.jpg"

function AuthWrap({ children }: PropsWithChildren) {
    return (
        <Box sx={{
            backgroundImage:`url(${bgr})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display:'flex',
            alignItems:'center',
            padding:4
        }}>
            {children}
        </Box>
    )
}

export default AuthWrap;