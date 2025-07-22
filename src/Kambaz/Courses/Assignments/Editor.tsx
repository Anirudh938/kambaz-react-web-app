/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    const assignment : any = assignments.find((assignment) => assignment.course === cid && assignment._id === aid);
    return (
        <div id="wd-assignments-editor" className="p-3">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                        <Form.Control
                            id="wd-name"
                            type="text"
                            defaultValue={assignment?._id}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                            as="textarea"
                            rows={8}
                            id="wd-description"
                            defaultValue={assignment.description}/>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3} htmlFor="wd-points" className="text-end">Points</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            id="wd-points"
                            type="number"
                            defaultValue={assignment.points}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3} htmlFor="wd-group" className="text-end">Assignment Group</Form.Label>
                    <Col sm={9}>
                        <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3} htmlFor="wd-display-grade-as" className="text-end">Display Grade as</Form.Label>
                    <Col sm={9}>
                        <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                            <option value="Letter">Letter Grade</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm={3} htmlFor="wd-submission-type" className="text-end">Submission Type</Form.Label>
                    <Col sm={9}>
                        <Card className="border">
                            <Card.Body>
                                <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3" >
                                    <option value="Online">Online</option>
                                    <option value="On Paper">On Paper</option>
                                    <option value="No Submission">No Submission</option>
                                </Form.Select>

                                <div>
                                    <Form.Label><strong>Online Entry Options</strong></Form.Label>
                                    <div className="mt-2">
                                        <Form.Check
                                            type="checkbox"
                                            id="wd-text-entry"
                                            name="wd-submission-type"
                                            label="Text Entry"
                                            className="mb-2"/>
                                        <Form.Check
                                            type="checkbox"
                                            id="wd-website-url"
                                            name="wd-submission-type"
                                            label="Website URL"
                                            defaultChecked
                                            className="mb-2"/>
                                        <Form.Check
                                            type="checkbox"
                                            id="wd-media-recordings"
                                            name="wd-submission-type"
                                            label="Media Recordings"
                                            className="mb-2"/>
                                        <Form.Check
                                            type="checkbox"
                                            id="wd-student-annotation"
                                            name="wd-submission-type"
                                            label="Student Annotation"
                                            className="mb-2"/>
                                        <Form.Check
                                            type="checkbox"
                                            id="wd-file-uploads"
                                            name="wd-submission-type"
                                            label="File Uploads"/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm={3} className="text-end">Assign</Form.Label>
                    <Col sm={9}>
                        <Card className="border">
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="wd-assign-to"><strong>Assign to</strong></Form.Label>
                                    <Form.Control
                                        id="wd-assign-to"
                                        type="text"
                                        defaultValue="Everyone"
                                        className="border border-dark"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="wd-due-date"><strong>Due</strong></Form.Label>
                                    <Form.Control
                                        id="wd-due-date"
                                        type="datetime-local"
                                        defaultValue={assignment.dueDate}/>
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="wd-available-from"><strong>Available from</strong></Form.Label>
                                            <Form.Control
                                                id="wd-available-from"
                                                type="datetime-local"
                                                defaultValue={assignment.availableDate}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="wd-available-until"><strong>Until</strong></Form.Label>
                                            <Form.Control
                                                id="wd-available-until"
                                                type="datetime-local"
                                                defaultValue="2024-05-20T23:59"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Form.Group>

                <hr />
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="me-2"
                            as={Link as any}
                            to={`/Kambaz/Courses/${cid}/Assignments`}>
                        Cancel
                    </Button>
                    <Button variant="danger"
                            as={Link as any}
                            to={`/Kambaz/Courses/${cid}/Assignments`}>
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
}