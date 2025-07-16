import {Route, Routes} from "react-router";
import CourseNavigation from "./Navigation.tsx";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";
import {FaAlignJustify} from "react-icons/fa";
import PeopleTable from "./People/Table.tsx";
import { courses } from "../Database";
import {useLocation, useParams} from "react-router-dom";

export default function Courses() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
                <div className="d-flex">
                    <div className="d-none d-md-block">
                        <CourseNavigation />
                    </div>
                    <div className="flex-fill">
                        <Routes>
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="Zoom" element={<h1>Zoom</h1>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    </div>
                </div>
        </div>
    );
}
