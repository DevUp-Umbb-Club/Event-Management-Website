import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
  return <nav>
    <div class="navb">
      <div class='devuplogo'> 
      <img class="devulogo" src="../public/devup-logo.svg" />
      </div>
      <div class='itemstack'>
      <Stack spacing={10} direction="row">
      <div class='items'><a href='./dashboard'>Dashboard</a></div>
      <div class='items'><a href='./members'>Members</a></div>
      <div class='items'><a href='./events'>Events</a></div>
      <div class='items'><a href='./settings'>Settings</a></div>
      <div></div>
      <div></div>
      </Stack>
      </div>
      <div class='button'>
        <Button 
          color="error"
          sx={{ textTransform: 'none' }} 
          variant="contained" 
          startIcon={<FiLogOut />}>
          Logout
        </Button>
      </div>
      
    </div>
  </nav>;
};

export default Navbar;
