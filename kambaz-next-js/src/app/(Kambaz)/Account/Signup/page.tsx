import Link from "next/link";

const reAlign = {
  marginLeft: 150,
}

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={ reAlign }>
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" value="alice.w"/><br/>
      <input placeholder="password" type="password" className="wd-password" value="wonderDunderland"/><br/>
      <input placeholder="verify password" value="wonderDunderland"
             type="password" className="wd-password-verify" /><br/>
      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}

