import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
    </tbody>

        <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">001234837S</td>
      <td className="wd-section">V403</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2024-12-09</td>
      <td className="wd-total-activity">11:03:14</td></tr>
    </tbody>

        <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">0012301923</td>
      <td className="wd-section">ABC1</td>
      <td className="wd-role">PROFESSOR</td>
      <td className="wd-last-activity">2004-11-21</td>
      <td className="wd-total-activity">10:21:32</td></tr>

    </tbody>

        <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bingabanga</span>{" "}
          <span className="wd-last-name">BongehBengah</span></td>
      <td className="wd-login-id">[REDACTED]</td>
      <td className="wd-section">????</td>
      <td className="wd-role">UNKNOWN</td>
      <td className="wd-last-activity">????-??-??</td>
      <td className="wd-total-activity">??:??:??</td></tr>
    </tbody>
   </Table>
  </div> );}