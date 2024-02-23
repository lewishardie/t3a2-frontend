
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Button,  Image } from 'react-bootstrap'

// Icon Imports
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquareDots } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";


const TopNav = () => {
  return (
    <Navbar className="bg-secondary">
      <Container fluid>
        <Link to="/" className="d-flex gap-3 align-items-center">
          <img
            src="/assets/icons/gamestart-logo.svg"
            alt="logo"
            width={50}
            height={50}
            />
        </Link>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex gap-2 align-items-center">
            <Link to="/friends" className="btn">
              <LiaUserFriendsSolid size={25}/>
            </Link>
           
            {/* Need to change link to open the side menu with notifcations panel*/}
            <Link to="/notifications" className="btn">

              <IoNotificationsOutline size={25}/>

            </Link>
            <Link to="/chats" className="btn">
              <BiMessageSquareDots size={25}/>
            </Link>

            {/* link to user profile */}
              {/* {`/profile/${user.id}` */}
            <Link to="/settings">
              <Image
                // {user.imageUrl ||}
                src='/assets/icons/gamestart-logo.svg'
                alt="profile"
                width={40}
                height={40}
                roundedCircle
                className=""
                />
            </Link>
              <Button 
                variant="" 
                className="" 
                // onClick={signOut}
                >
                <FiLogOut 
                //logout button
                />

              </Button>
        </div>
        </Navbar.Collapse>


      </Container>
      </Navbar>

  );
};

export default TopNav