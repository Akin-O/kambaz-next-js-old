import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModulesControls />
            <ListGroup className="wd-lessons rounded-0">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
              <ListGroupItem className="wd-lesson p-3 ps-1">
                Learn what is Web Development </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                LESSON 1 </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                LESSON 2 </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

