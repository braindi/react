import { useNavigate } from 'react-router-dom';


export const Protected = ({ user, children }) => {

    let navigate = useNavigate();
    if(!user){
        return <p style={{textAlign:"center",fontWeight:"bold",fontSize:"100px",marginTop:"200px"}}>אין לך הרשאה</p>;
    }
    if ( user.data.role === "USER"){
        return navigate('/');
    }
    return children;
}



// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ user, children }) => {
//     if (user.role!='ADMIN') {
//       return <Navigate to="/error" replace />;
//     }
  
//     return children;
//   };

