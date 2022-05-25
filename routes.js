/*!

로그인시 권한별 메뉴 노출 순서

Admin 접속시 메뉴
 - Dashboard
 - Member
 - API Authentication
 - Settlement
 - Statistics
 - Setting
  - Administrator
  - Notice
  - Contact us
 - DOCUMENTATION

User 접속시 메뉴
 - Dashboard
 - API Authentication
 - My Profile
 - Statistics
 - SUPPORT
  - Notice
  - Contact us

*/
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-shop text-primary",
    layout: "",
  },
  {
    path: "/member-list",
    name: "Member",
    icon: "ni ni-circle-08 text-orange",
    layout: "/member",
  },
  {
    path: "/authentication",
    name: "API Authentication",
    icon: "side icon-api",
    layout: "/apis",
  },
  // {
  //   path: "/profile",
  //   name: "My Profile",
  //   icon: "ni ni-circle-08 text-orange",
  //   layout: "/member",
  // },
  {
    path: "/settlement",
    name: "Settlement",
    icon: "ni ni-single-copy-04 text-pink",
    layout: "/settlement",
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: "ni ni-chart-bar-32 text-green",
    layout: "/statistics",
  },
  {
    collapse: true,
    name: "Setting",
    icon: "ni ni-settings-gear-65 text-gray-dark",
    state: "settingCollapse",
    views: [
      {
        path: "/list",
        name: "Administrator",
        miniName: "Adm",
        layout: "/setting",
      },
      {
        path: "/notice",
        name: "Notice",
        miniName: "Noti",
        layout: "/support",
      },
      {
        path: "/qna",
        name: "Contact us",
        miniName: "Cont",
        layout: "/support",
      },
    ],
  },
];

export default routes;
