export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" >
The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignment's Link to the Kanbas application repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <br /><br />
                        <div>
                            <label><strong>Online Entry Options</strong></label><br/><br/>

                            <input type="checkbox" name="wd-submission-type" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry"> Text Entry</label><br/>

                            <input type="checkbox" name="wd-submission-type" id="wd-website-url"/>
                            <label htmlFor="wd-website-url"> Website URL</label><br/>

                            <input type="checkbox" name="wd-submission-type" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings"> Media Recordings</label><br/>

                            <input type="checkbox" name="wd-submission-type" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation"> Student Annotation</label><br/>

                            <input type="checkbox" name="wd-submission-type" id="wd-file-uploads"/>
                            <label htmlFor="wd-file-uploads"> File Uploads</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td>
                        <div>
                            <label htmlFor="wd-assign-to"><strong>Assign to</strong></label><br/>
                            <input id="wd-assign-to" value={'Everyone'}/>
                            <br/><br/>

                            <label htmlFor="wd-due-date"><strong>Due</strong></label><br/>
                            <input type="date" value="2024-05-13" id="wd-due-date"/>
                            <br/><br/>

                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="wd-available-from"><strong>Available from</strong></label><br/>
                                        <input type="date" value="2024-05-06" id="wd-available-from"/>
                                    </td>
                                    <td width="20"></td>
                                    <td>
                                        <label htmlFor="wd-available-until"><strong>Until</strong></label><br/>
                                        <input type="date" value="2024-05-20" id="wd-available-until"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
            <table width="100%">
                <tbody>
                <tr>
                    <td></td>
                    <td align="right">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}