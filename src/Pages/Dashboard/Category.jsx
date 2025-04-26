import { useEffect, useRef, useState } from "react";
import { Button, Table } from "antd";
import { LeftOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import UserDetailsModal from "../../Components/Dashboard/UserDetailsModal";
import edit from "../../assets/edit.png";
import deleteicon from "../../assets/delete.png";

const data = [
  {
    key: "1",
    serial: 1,
    category: "Dental care",
  },
  {
    key: "2",
    serial: 2,
    category: "Dental care",
  },
  {
    key: "3",
    serial: 3,
    category: "Dental care",
  },
  {
    key: "4",
    serial: 4,
    category: "Dental care",
  },
  {
    key: "5",
    serial: 5,
    category: "Dental care",
  },
  {
    key: "6",
    serial: 6,
    category: "Dental care",
  },
  {
    key: "7",
    serial: 7,
    category: "Dental care",
  },
  {
    key: "8",
    serial: 8,
    category: "Dental care",
  },
  {
    key: "9",
    serial: 9,
    category: "Dental care",
  },
  {
    key: "10",
    serial: 10,
    category: "Dental care",
  },
  {
    key: "11",
    serial: 11,
    category: "Dental care",
  },
  {
    key: "12",
    serial: 12,
    category: "Dental care",
  },
  {
    key: "13",
    serial: 13,
    category: "Dental care",
  },
  {
    key: "14",
    serial: 14,
    category: "Dental care",
  },
  {
    key: "15",
    serial: 1,
    category: "Dental care",
  },
];

const Category = () => {
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
      title: "Sl. No",
      dataIndex: "serial",
      key: "serial",
      align: "left",
      width: "100px",
      render: (text) => <span style={{ color: "#636363" }}>#{text}</span>,
    },
    {
      title: "Category Name",
      dataIndex: "category",
      key: "category",
      align: "left",
      render: (text) => <span style={{ color: "#636363" }}>{text}</span>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "right",
      className: "action-column",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            paddingRight: "46px",
          }}
        >
          <button className="bg-[#F9F9F9] w-10 h-8 flex justify-center items-center rounded-md">
            <img src={edit} alt="" />
          </button>

          <button className="bg-[#F9F9F9] w-10 h-8 flex justify-center items-center rounded-md">
            <img src={deleteicon} alt="" />
          </button>
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
          <h3
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Add Category
          </h3>

          <div>
            <Button
              style={{
                width: "151px",
                height: "40px",
                boxShadow: "0px 2px 4px 0px #0000001A",
                backgroundColor: "#C1EEBD",
                border: "none",
                transition: "none",
                color: "#767676",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C1EEBD";
                e.currentTarget.style.color = "#767676";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C1EEBD";
                e.currentTarget.style.color = "#767676";
              }}
            >
              <PlusOutlined />
              <span style={{ margin: 0 }}>Add Category</span>
            </Button>
          </div>
        </div>
        <div>
          <Table
            size="small"
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 12,
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

export default Category;
