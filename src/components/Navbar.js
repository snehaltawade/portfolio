//import { Link } from "react-router-dom";

// const Navbar=()=>{
//    return(
//     <div className="header">     
//     <Link to="/"><h1>Portfolio</h1></Link>
//     <ul>
//         <li><Link to="/"><h3>Home</h3></Link></li>
//         <li><Link to="/about"><h3>About</h3></Link></li>
//         <li><Link to="/about"><h3>Contact</h3></Link></li>
//         <li><Link to="/about"><h3>Project</h3></Link></li>
//     </ul>
//     </div>
//    )
// }
// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/SnehalTawade.png'
import { Button } from "@mui/material";

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [color,setColor] = React.useState('#00000099');
  const [overlay,setOverlay] = React.useState(false);
  const changeColor=()=>{
    if(window.scrollY>100){
        setColor('black')
    }
    else{
      setColor('black')
    }
  }
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); 
    console.log("inside handleoopen",event);
    
  };
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (!(typeof page.altKey == "undefined")) {
      console.log("it's an Event");
      return;
    }
    // href('#'+page);
    
  };
  window.addEventListener('scroll',changeColor)
  return (
   
    <AppBar position="static" sx={{backgroundColor:color}} className="header" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display: { xs: 'block', md: 'block'}, }} className="portfolio">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              fontFamily: 'cursive',
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',

            }}
          >
            <img src={logo} width="200px" height="64px"/>
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1,display: { xs: 'block', md: 'none'}, }}>
         <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
             
             {anchorElNav ? <CloseIcon className='closeIcon'></CloseIcon>:<MenuIcon />}
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',top:'56px' },
              }}
            >
            <ThemeProvider theme={Theme}>
              <Button href="#home"> 
              <MenuItem href='#home' onClick={() => { handleCloseNavMenu('home') }} >

                <Typography textAlign="center">Home</Typography>

              </MenuItem></Button>
              <Button href="#about"> 
              <MenuItem onClick={() => { handleCloseNavMenu('about') }}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              </Button>
              <Button href="#work"> 
                <MenuItem onClick={()=>{handleCloseNavMenu('work')}}>
                  <Typography textAlign="center">Work</Typography>
                </MenuItem>
                </Button>
              <Button href="#project"> 
                <MenuItem onClick={()=>{handleCloseNavMenu('project')}}>
                  <Typography textAlign="center">Project</Typography>
                </MenuItem>
                </Button>
              <Button href="#contact"> 
              <MenuItem onClick={() => { handleCloseNavMenu('contact')}}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                </Button>
                
                </ThemeProvider>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }} className="desktopDisplay">
          <ThemeProvider theme={Theme}>
              <Button href="#home"> 
              <MenuItem onClick={() => { handleCloseNavMenu('home') }} >

                <Typography textAlign="center"><h2>Home</h2></Typography>

              </MenuItem></Button>
              <Button href="#about"> 
              <MenuItem onClick={() => { handleCloseNavMenu('about') }}>
                <Typography textAlign="center"><h2>About</h2></Typography>
              </MenuItem>
              </Button>
              <Button href="#work"> 
                <MenuItem onClick={()=>{handleCloseNavMenu('work')}}>
                  <Typography textAlign="center"><h2>Work</h2></Typography>
                </MenuItem>
                </Button>
              
              <Button href="#project"> 
                <MenuItem onClick={()=>{handleCloseNavMenu('project')}}>
                  <Typography textAlign="center"><h2>Project</h2></Typography>
                </MenuItem>
                </Button>
              <Button href="#contact"> 
              <MenuItem onClick={() => { handleCloseNavMenu('contact')}}>
                  <Typography textAlign="center"><h2>Contact</h2></Typography>
                </MenuItem>
                </Button>
                
                </ThemeProvider>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default Navbar;