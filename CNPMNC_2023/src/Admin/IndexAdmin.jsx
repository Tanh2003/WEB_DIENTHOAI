import NavbarAdmin from "./Components/NavbarAdmin";
import SidebarAdmin from "./Components/SidebarAdmin";
import UserManage from "./CRUD_User/UserManage";
import "./Admin.css";
import { DashBoard } from "./Components/DashBoard";
import { Header } from "./Components/Header";
export const IndexAdmin = () => {
  return (
    <>
      {/* <NavbarAdmin />

      <div className="row container-fluid">
        <SidebarAdmin />

        <div className="col row-offcanvas row-offcanvas-left">
          <UserManage />
        </div>
      </div> */}
      <div className="d_flex">
        <DashBoard />
        <div className="main--content">
          <Header />
          <div className="row">
            <div className="col-md-12">
              <div className="f-index">
                <div className="tabular--wrapper">
                  <a href="#">
                    <h2 className="h2--title">Title</h2>
                  </a>
                  <div className="table-container">
                    <table>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Thao tác Sửa - Xóa </th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>a</td>
                        <td>123</td>
                        <td>
                          <a href="">
                            <button className="btn-edit">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                          </a>
                          <span> </span>
                          <a href="">
                            <button className="btn-del">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexAdmin;
