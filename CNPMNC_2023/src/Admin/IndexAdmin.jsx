import NavbarAdmin from "./Components/NavbarAdmin";
import UserManage from "./CRUD_User/UserManage";
import "./Admin.scss";
import { HeaderAdmin } from "./Components/HeaderAdmin";
import { Link } from "react-router-dom";
import { SideBarAdmin } from "./Components/SideBarAdmin";
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
      <div className="index-admin">
        <HeaderAdmin />
        <div className="main--content d_flex">
          <div>
            <SideBarAdmin />
          </div>
          <div className="row main-wrapper">
            <div className="col-md-12">
              <div className="f-index">
                <div className="tabular--wrapper">
                  <div className="d_flex title-admin">
                    <Link to={`/create/CreateProduct`}>
                      <button className="btn-createnew">
                        <i class="fa-regular fa-solid fa-plus"></i>
                      </button>
                    </Link>
                    <h2>Title</h2>
                  </div>
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
