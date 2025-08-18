/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({children, requireEnrollment = false}: { children: any; requireEnrollment?: boolean;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const { courses } = useSelector((state: any) => state.coursesReducer);

    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/Signin" />;
    }

    if (requireEnrollment && cid) {
        const isEnrolled = courses.some(
            (course: any) =>
                course._id === cid
        );

        if (!isEnrolled) {
            return <Navigate to="/Kambaz/Dashboard" />;
        }
    }

    return children;
}