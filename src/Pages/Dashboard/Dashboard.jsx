import { Layout } from "antd";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import logoutIcon from "../../assets/logoutIcon.png";
import logoutActiveIcon from "../../assets/logoutActiveIcon.png";
import adminImg from "../../assets/adminImg.png";
import notificationIcon from "../../assets/notificationIcon.png";
import logo from "../../assets/logo.png";
import faqIcon from "../../assets/faqIcon.png";
import faqActiveIcon from "../../assets/faqActiveIcon.png";
import aboutUsIcon from "../../assets/aboutUsIcon.png";
import aboutUsActiveIcon from "../../assets/aboutUsActiveIcon.png";
import addCategoryIcon from "../../assets/addCategoryIcon.png";
import addCategoryActiveIcon from "../../assets/addCategoryActiveIcon.png";
import employeeDetailsIcon from "../../assets/employeeDetailsIcon.png";
import employeeDetailsActiveIcon from "../../assets/employeeDetailsActiveIcon.png";
import serviceListIcon from "../../assets/serviceListIcon.png";
import serviceListActiveIcon from "../../assets/serviceListActiveIcon.png";
import serviceProviderIcon from "../../assets/serviceProviderIcon.png";
import serviceProvidersActiveIcon from "../../assets/serviceProvidersActiveIcon.png";
import transectionDetailsIcon from "../../assets/transectionDetailsIcon.png";
import transectionDetailsActiveIcon from "../../assets/transectionDetailsActiveIcon.png";
import addSubCategoryIcon from "../../assets/addSubCategoryIcon.png";
import addSubCategoryActiveIcon from "../../assets/addSubCategoryActiveIcon.png";
import addAdminIcon from "../../assets/addAdminIcon.png";
import addAdminActiveIcon from "../../assets/addAdminActiveIcon.png";
import privacyPolicyIcon from "../../assets/privacyPolicyIcon.png";
import privacyActiveIcon from "../../assets/privacyActiveIcon.png";
import termsConditionIcon from "../../assets/termsConditionIcon.png";
import termsActiveIcon from "../../assets/termsActiveIcon.png";
import reportsIcon from "../../assets/reportsIcon.png";
import reportsActiveIcon from "../../assets/reportsActiveIcon.png";
import dashboardIcon from "../../assets/dashboardIcon.png";
import dashboardActiveIcon from "../../assets/dashboardActiveIcon.png";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    window.location.reload();
  };

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: (pathname) => (
        <img
          src={pathname === "/" ? dashboardActiveIcon : dashboardIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "Service Providers",
      path: "/service-provider-list",
      icon: (pathname) => (
        <img
          src={
            pathname === "/service-provider-list"
              ? serviceProvidersActiveIcon
              : serviceProviderIcon
          }
          alt="dashboard"
        />
      ),
    },
    {
      title: "Employee Deatils",
      path: "/employee-list",
      icon: (pathname) => (
        <img
          src={
            pathname === "/employee-list"
              ? employeeDetailsActiveIcon
              : employeeDetailsIcon
          }
          alt="dashboard"
        />
      ),
    },
    {
      title: "Service List",
      path: "/service-list",
      icon: (pathname) => (
        <img
          src={
            pathname === "/service-list"
              ? serviceListActiveIcon
              : serviceListIcon
          }
          alt="dashboard"
        />
      ),
    },

    {
      title: "Transection Details",
      path: "/transection-list",
      icon: (pathname) => (
        <img
          src={
            pathname === "/transection-list"
              ? transectionDetailsActiveIcon
              : transectionDetailsIcon
          }
          alt="dashboard"
        />
      ),
    },
    {
      title: "Add Category",
      path: "/add-category",
      icon: (pathname) => (
        <img
          src={
            pathname === "/add-category"
              ? addCategoryActiveIcon
              : addCategoryIcon
          }
          alt="dashboard"
        />
      ),
    },
    {
      title: "Add Sub-category",
      path: "/add-sub-category",
      icon: (pathname) => (
        <img
          src={
            pathname === "/add-sub-category"
              ? addSubCategoryActiveIcon
              : addSubCategoryIcon
          }
          alt="dashboard"
        />
      ),
    },
    {
      title: "About Us",
      path: "/aboutUs",
      icon: (pathname) => (
        <img
          src={pathname === "/aboutUs" ? aboutUsActiveIcon : aboutUsIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "FAQ",
      path: "/faq",
      icon: (pathname) => (
        <img
          src={pathname === "/faq" ? faqActiveIcon : faqIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "Privacy Policy",
      path: "/privacy",
      icon: (pathname) => (
        <img
          src={pathname === "/privacy" ? privacyActiveIcon : privacyPolicyIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "Terms & Condition",
      path: "/terms",
      icon: (pathname) => (
        <img
          src={pathname === "/terms" ? termsActiveIcon : termsConditionIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "Reports",
      path: "/feedback",
      icon: (pathname) => (
        <img
          src={pathname === "/feedback" ? reportsActiveIcon : reportsIcon}
          alt="dashboard"
        />
      ),
    },

    {
      title: "Add admin",
      path: "/make-admin",
      icon: (pathname) => (
        <img
          src={pathname === "/make-admin" ? addAdminActiveIcon : addAdminIcon}
          alt="dashboard"
        />
      ),
    },
    {
      title: "Log out",
      path: "/login",
      icon: (pathname) => (
        <img
          src={pathname === "/login" ? logoutActiveIcon : logoutIcon}
          alt="dashboard"
        />
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="225"
        style={{
          overflow: "auto",
          position: "fixed",
          top: "80px",
          bottom: "16px",
          height: "auto",
          paddingBottom: "60px",
          overflowX: "hidden",
          zIndex: 2,
          margin: "24px 26px 0 25px",
          borderRadius: "24px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "8px",
            height: "90%",
            marginTop: 40,
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "25px",
              }}
            >
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  color: item.path === pathname ? "#333333" : "#767676",
                  alignItems: "center",
                  margin: "auto  0 auto 0",
                  gap: "14px",
                  background: item.path === pathname ? "#EBEBEB" : "none",
                  width: "100%",
                  padding: "12px 8px 12px 12px",
                  borderTopLeftRadius: "24px",
                  borderBottomLeftRadius: "24px",
                }}
              >
                <div style={{ height: "24px" }}>{item.icon(pathname)}</div>
                <div
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                    height: "fit-content",
                  }}
                >
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            height: "80px",
            zIndex: 1,
            padding: 0,
            backgroundColor: "#FDFDFD",
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
            paddingRight: "100px",
            paddingLeft: "69px",
          }}
        >
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "147px",
                paddingTop: "12px",
              }}
            />
          </div>
          <div
            style={{
              width: "220px",
              display: "flex",
              alignItems: "center",
              gap: "40px",
              justifyContent: "space-between",
            }}
          >
            <Link to="/notification">
              <div
                style={{
                  background: "#F2F2F2",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <img src={notificationIcon} alt="" />

                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#FEA500",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#F2F2F2",
                    position: "absolute",
                    top: 8,
                    right: 10,
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  1
                </div>
              </div>
            </Link>
            <Link
              to={"/admin-profile"}
              style={{
                height: "42px",
                cursor: "pointer",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px",
              }}
            >
              <img
                src={adminImg}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                }}
                alt=""
              />
              <h2
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: 200,
                  lineHeight: "24px",
                }}
              >
                Admin Niloofar
              </h2>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "104px",
            marginBottom: "16px",
            marginLeft: "276px",
            marginRight: "50px",
            borderRadius: "24px",
            overflow: "auto",
            backgroundColor: "white",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
