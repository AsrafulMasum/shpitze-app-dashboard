import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import { LeftOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";

const { Option } = Select;

import Swal from "sweetalert2";

const data = [
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "2",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "3",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "4",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "5",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "6",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "7",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "8",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "9",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "10",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "11",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "12",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "13",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "14",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "15",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "16",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "17",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
];

const SalonCategoryList = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [page, setPage] = useState(() => {
    const urlPage = new URLSearchParams(window.location.search).get("page");
    return urlPage ? parseInt(urlPage, 10) : 1;
  });

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      width: 150,
    },
    {
      title: "Admin Name",
      dataIndex: "admin_name",
      key: "admin_name",
    },

    {
      title: "Admin Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Admin Type",
      dataIndex: "admin_type",
      key: "admin_type",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      textAlign: "center",
      render: (_, record) => (
        <button
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "white",
            color: "#D93D04",
          }}
        >
          <FaRegTrashAlt size={20} />
        </button>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  const pageSize = 14;
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="h-[82vh]">
      <div
        style={{
          background: "white",
          padding: "20px 0",
          borderRadius: "12px",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 16px 20px 16px",
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
              Add Admin
            </h3>
          </div>
          <div>
            <Button
              style={{
                width: "170px",
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
              <span style={{ margin: 0 }}>Add an Admin</span>
            </Button>
          </div>
        </div>
        <div className="relative h-full">
          <Table
            columns={columns}
            style={{}}
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
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;
          setImgFile(null);
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-black text-xl"
            style={{ marginBottom: "12px" }}
          >
            {`Add new Admin`}
          </h1>
          <Form>
            <div>
              <p className="text-[#6D6D6D] py-1">Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-[#6D6D6D] py-1">Email </p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>
            <div style={{ width: "100%" }}>
              <p className="text-[#6D6D6D] py-1">type </p>
              <Select
                placeholder="Select admin type"
                style={{
                  width: "100%",
                  height: 40,
                }}
              >
                <Option value="super-admin">Super Admin</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </div>

            <div className="mt-5">
              <p className="text-[#6D6D6D] py-1">Password </p>
              <Form
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input.Password
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form>
            </div>

            <div className="text-center mt-6">
              <button className="bg-[#DBB162] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                create Profile
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SalonCategoryList;
