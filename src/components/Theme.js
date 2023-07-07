import { createTheme } from "@mui/material";

const Theme = createTheme({
    MuiPaper:
    {
        root:{
            MuiPopoverPaper:{
                backgroundColor:'red',
            }
            }
    },
   
})

export default Theme;