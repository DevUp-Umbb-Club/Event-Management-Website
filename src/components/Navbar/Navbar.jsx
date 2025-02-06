import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav>
      <div className={`navb ${isActive ? 'open' : ''}`}>
        <div className="devuplogo">
          <img className="devulogo" src="/devup-logo.svg" />
        </div>

        <div className={`itemstack ${isActive ? 'open' : ''}`}>
          <Stack spacing={10} direction="row">
            <div className="items">
              <a href="./dashboard">Dashboard</a>
            </div>
            <div className="items">
              <a href="./members">Members</a>
            </div>
            <div className="items">
              <a href="./events">Events</a>
            </div>
            <div className="items">
              <a href="./settings">Settings</a>
            </div>
            <div></div>
            <div></div>
          </Stack>
        </div>
        <div className="button">
          <Button
            color="error"
            sx={{ textTransform: 'none' }}
            variant="contained"
            startIcon={<FiLogOut />}
          >
            Logout
          </Button>
        </div>

        {/* phone part */}

        <div className="navmenu" onClick={() => setIsActive(!isActive)}>
          {isActive ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <div className={`sidebar ${isActive ? 'open' : ''}`}>
          <ul className={`menu ${isActive ? 'open' : ''}`}>
            <li className="items">
              <a href="./dashboard">Dashboard</a>
            </li>
            <li className="items">
              <a href="./members">Members</a>
            </li>
            <li className="items">
              <a href="./events">Events</a>
            </li>
            <li className="items">
              <a href="./settings">Settings</a>
            </li>

            <li className="sidebutton">
              <Button
                color="error"
                sx={{ textTransform: 'none' }}
                variant="contained"
                startIcon={<FiLogOut />}
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
