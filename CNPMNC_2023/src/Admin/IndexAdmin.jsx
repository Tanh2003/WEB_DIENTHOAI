import NavbarAdmin from "./Components/NavbarAdmin";
import SidebarAdmin from "./Components/SidebarAdmin";
import UserManage from "./CRUD_User/UserManage";

export const IndexAdmin = () => {
  return (
    <>
      <NavbarAdmin />

      <div className="row container-fluid">
        <SidebarAdmin />

        <div className="col row-offcanvas row-offcanvas-left">
          {/* <UserManage /> */}
        </div>
      </div>
    </>
  );
};

export default IndexAdmin;
