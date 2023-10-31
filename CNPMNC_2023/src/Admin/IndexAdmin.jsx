
import UserManage from "./CRUD_User/UserManage";
import "./Admin.css";
import { DashBoard } from "./Components/DashBoard";
import { Header } from "./Components/Header";
export const IndexAdmin = () => {
  return (
    <>
    
      <div className="d_flex">
        <DashBoard />
        <div className="main--content">
          <Header />
          <UserManage/>
          
        </div>
        
      </div>
     
    </>
  );
};

export default IndexAdmin;
