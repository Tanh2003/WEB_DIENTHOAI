import React from "react";

export const SideBarAdmin = () => {
  return (
    <>
      <div className="sidebar">
          <div className="logo"></div>
          <ul className="menu">
            <li className="active">
              <a href="#">
                <i class="fa-solid fa-house"></i>
                <span>Trang chủ </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>
                <span>Thông tin cá nhân </span>
              </a>
            </li>
            </ul>
          </div>
    </>
  );
};
