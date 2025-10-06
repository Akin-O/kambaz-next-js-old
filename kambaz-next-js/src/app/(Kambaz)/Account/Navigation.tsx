{/* 
  import Link from "next/link";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation">
     <Link href="Signin"> Signin </Link> <br />
     <Link href="Signup"> Signup </Link> <br />
     <Link href="Profile"> Profile </Link> <br />
   </div>
);}
*/}

import { AiOutlineDashboard, AiOutlineInbox } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaBook, FaInbox, FaRegCircleUser, FaRegNewspaper } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const default_design = {

  background: "black",
  color: "red",
  width: 100,


}

export default function KambazNavigation() {
  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 100 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">


      <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={default_design}
        id="wd-kambaz-navigation">
        <ListGroupItem className="bg-danger border-0 text-center text-danger" as="a" style={default_design}
          target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
          <img src="https://brand.northeastern.edu/wp-content/uploads/2025/01/MONOGRAM-black-2.svg" width="70px" alt="Northeastern University" />
        </ListGroupItem>

        <ListGroupItem className="border-0 bg-black text-center">
          <Link href="/Account" id="wd-account-link" className="text-danger text-decoration-none" >
            <FaRegCircleUser className="fs-1 text-danger nav-base" />
            Account
          </Link>
        </ListGroupItem>

        <ListGroupItem className="border-0 bg-black text-center" style={default_design}>
          <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
            <AiOutlineDashboard className="fs-1 text-danger" />
            Dashboard
          </Link>
        </ListGroupItem>
        {/* complete styling the rest of the links */}

        <ListGroupItem className="border-0 bg-black text-center" >
          <Link href="./not-found" id="wd-courses-link" className="text-danger text-decoration-none">
            <FaBook className="fs-1 text-danger nav-base" />
            Courses
          </Link>
        </ListGroupItem>

        <ListGroupItem className="border-0 bg-black text-center">
          <Link href="./not-found" id="wd-calendar-link" className="text-danger text-decoration-none">
            <FaCalendarAlt className="fs-1 text-danger nav-base" />
            Calendar
          </Link>
        </ListGroupItem>

        <ListGroupItem className="border-0 bg-black text-center">
          <Link href="/NotFound" id="wd-inbox-link" className="text-danger text-decoration-none">
            <AiOutlineInbox className="fs-1 text-danger nav-base" />
            Inbox
          </Link>
        </ListGroupItem>

        <ListGroupItem className="border-0 bg-black text-center">
          <Link href="/Labs" id="wd-labs-link" className="text-danger text-decoration-none">
            <FaRegNewspaper  className="fs-1 text-danger nav-base" />
            Labs
          </Link>
        </ListGroupItem>

      </ListGroup>
    </ListGroup>

  );
}



