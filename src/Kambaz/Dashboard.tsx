import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (6)</h2> <hr />
            <div id="wd-dashboard-courses">
                {/* React JS */}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
                        <img src="/images/nodejs.jpg" width={200} />
                        <div>
                            <h5>CS2345 Node.js</h5>
                            <p className="wd-dashboard-course-title">Backend Development with Node</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
                        <img src="/images/python.jpg" width={200} />
                        <div>
                            <h5>CS3456 Python</h5>
                            <p className="wd-dashboard-course-title">Programming Fundamentals in Python</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
                        <img src="/images/databases.jpg" width={200} />
                        <div>
                            <h5>CS4567 Database Systems</h5>
                            <p className="wd-dashboard-course-title">SQL & NoSQL Databases</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
                        <img src="/images/machine-learning.jpg" width={200} />
                        <div>
                            <h5>CS5678 Machine Learning</h5>
                            <p className="wd-dashboard-course-title">Intro to ML and AI Concepts</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
                        <img src="/images/web-design.jpg" width={200} />
                        <div>
                            <h5>CS6789 Web Design</h5>
                            <p className="wd-dashboard-course-title">HTML, CSS, UX/UI Basics</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
