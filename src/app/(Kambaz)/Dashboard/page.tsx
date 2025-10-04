import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> ... Another course ... </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> ... Another course ... </Col>
        </Row>
      </div>



      {/* Course 2 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> HIST220 </h5>
            <p className="wd-dashboard-course-title">
              History of Technology
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>


      {/* Course 3 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> CS4550 </h5>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>

      {/* Course 4 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> ARTG 1001 </h5>
            <p className="wd-dashboard-course-title">
              Design Perspectives: An Introduction to Design in the World
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>

      {/* Course 5 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> ARTG1290 </h5>
            <p className="wd-dashboard-course-title">
              Typographic Systems
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>

      {/* Course 6 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> CS4550 </h5>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>

      {/* Course 7 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> PSYCH1904 </h5>
            <p className="wd-dashboard-course-title">
              A Look Into The Mind
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>

      {/* Course 8 */}
      <div className="wd-dashboard-course">
        <Link href="/Courses/1234" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
          <div>
            <h5> ARTD3200 </h5>
            <p className="wd-dashboard-course-title">
              Designing In Collaboration
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
    </div >
);
}

