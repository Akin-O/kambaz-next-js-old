import Link from "next/link";
import { FormControl } from "react-bootstrap";

const reAlign = {
  marginLeft: 150,
}

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={ reAlign }>
      <h1  >Sign in</h1>
      <FormControl id="wd-username" value="akinsola.o"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password" value="da8dn892er"
             placeholder="password" type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            href="/Dashboard"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div> );}