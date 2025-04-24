import { useEffect, useRef, useState } from "react";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Rate,
  Select,
  Space,
  Table,
} from "antd";
import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { RiLoader3Fill } from "react-icons/ri";
import Logo from "../../assets/logo.png";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdPersonOff } from "react-icons/md";
import UserDetailsModal from "../../Components/Dashboard/UserDetailsModal";
import provider from "../../assets/serviceProvider.png";
import providerIcon from "../../assets/providerIcon.png";

const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "mr101@mail.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Corona, Michigan",
  },
  {
    key: "#1238",

    user: {
      name: "Lily",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "xterris@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Great Falls, Maryland ",
  },
  {
    key: "#1237",

    user: {
      name: "Kathry",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "irnabela@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Syracuse, Connecticut ",
  },
  {
    key: "#1236",

    user: {
      name: "Priscilla",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "codence@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Lafayette, California",
  },
  {
    key: "#1235",

    user: {
      name: "Claire",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "quasiah@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Pasadena, Oklahoma",
  },
  {
    key: "#1234",

    user: {
      name: "Irmar",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "xeno@yandex.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Lansing, Illinois",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={provider} height={46} width={46} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },

  {
    key: "#4",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#5",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "asad@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#6",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "fahim@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#7",
    name: "Nadir",
    user: {
      name: "Ashutosh",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#8",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#9",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "rahman@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#10",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} />,
    },
    email: "rafsan@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#11",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={46} width={46} className="rounded-full" />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
];

const EmployeeDetailsList = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();
  const items = [
    {
      label: "Car",
      key: "Car",
    },
    {
      label: "Bike",
      key: "Bike",
    },
    {
      label: "Cycle",
      key: "Cycle",
    },
  ];

  const userTypeItems = [
    {
      label: "Block",
      key: "Block",
    },
    {
      label: "UnBlock",
      key: "UnBlock",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false);
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Employer Name",
      dataIndex: "user",
      key: "user",
      render: (user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p>{user?.img} </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {user?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            paddingRight: 10,
          }}
        >
          <button className="flex justify-center items-center rounded-md"
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              backgroundColor: "#F9F9F9",
              width: "40px",
              height: "32px",
            }}
          >
            <FiArrowUpRight size={26} className="text-[#A1A1A1]" />
          </button>

          <div>
            <button className="bg-[#F9F9F9] w-10 h-8 flex justify-center items-center rounded-md pl-2">
              <img src={providerIcon} alt="" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div
        style={{
          background: "white",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "24px 16px",
          }}
        >
          <div>
            <h3
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              All Employer Details
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "353px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                  backgroundColor: "#FAFAFA",
                }}
                size="middle"
              />
            </div>

            <div>
              <Select
                defaultValue="Location"
                style={{
                  width: 115,
                  height: 40,
                }}
                options={items}
              />
            </div>
          </div>
        </div>
        <div>
          <Table
            size="small"
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 97,
              defaultPageSize: 20,
              showSizeChanger: false,
              // defaultCurrent: 1,
              itemRender: (current, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        paddingRight: "8px",
                      }}
                    >
                      <LeftOutlined />
                      Previous
                    </a>
                  );
                }
                if (type === "next") {
                  return (
                    <a
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      Next
                      <RightOutlined />
                    </a>
                  );
                }
                return originalElement;
              },
              style: {
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          />
        </div>
      </div>
      <UserDetailsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default EmployeeDetailsList;
