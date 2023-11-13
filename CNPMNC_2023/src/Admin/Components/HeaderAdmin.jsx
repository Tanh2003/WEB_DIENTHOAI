import React from "react";

export const HeaderAdmin = () => {
  return (
    <>
      <div className="head d_flex">
        <div className="page_admin">
          <h1>Admin Page</h1>
        </div>
        <div className="d_flex username_logout">
          <h3>Username</h3>
          <a href="#">
            <i class="fas fa-sign-out-alt"></i>
            <span>Đăng xuất</span>
          </a>
        </div>
      </div>
    </>
  );
};
