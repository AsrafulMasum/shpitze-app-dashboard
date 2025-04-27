import { useEffect, useRef, useState } from "react";
import { Button, Pagination, Table } from "antd";
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

const SubCategory = () => {
  const [page, setPage] = useState(() => {
    const urlPage = new URLSearchParams(window.location.search).get("page");
    return urlPage ? parseInt(urlPage, 10) : 1;
  });
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
      title: "Sub Category Name",
      dataIndex: "category",
      key: "subCategory",
      align: "left",
      width: "200px",
      render: (text) => <span style={{ color: "#636363" }}>{text}</span>,
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
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  const pageSize = 12;
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="h-[77vh]">
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          height: "100%",
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
              color: "#333333",
              fontSize: 18,
              fontWeight: "500",
              lineHeight: "24px",
            }}
          >
            Add Sub-category
          </h3>

          <div>
            <Button
              style={{
                width: "177px",
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
              <span style={{ margin: 0 }}>Add sub-category</span>
            </Button>
          </div>
        </div>
        <div className="relative h-full">
          <Table
            size="small"
            columns={columns}
            dataSource={paginatedData}
            pagination={false}
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={data.length}
              onChange={handlePageChange}
              showSizeChanger={false}
              size="small"
              itemRender={(pageNum, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <a
                      className="hover:text-[#333333]"
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <LeftOutlined />
                      <span className="mr-2">Previous</span>
                    </a>
                  );
                }
                if (type === "next") {
                  return (
                    <a
                      className="hover:text-[#333333]"
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <span className="ml-2">Next</span>
                      <RightOutlined />
                    </a>
                  );
                }
                return originalElement;
              }}
            />
          </div>
        </div>
      </div>
      <UserDetailsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default SubCategory;
