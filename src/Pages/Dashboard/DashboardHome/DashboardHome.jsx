import { Col, Row } from "antd";
import React from "react";

import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import TotalEarningGoth from "./TotalEarningGrowth";
import doner from "../../../assets/doner.png";
import donation from "../../../assets/donation.png";
import earningsIcon from "../../../assets/dashboardHome/earningsIcon.png";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    // {
    //   name: "Total User",
    //   count: "20.10K",
    //   title1: " Daily user",
    //   total: "1025",
    //   icon: <HiMiniUserGroup color="#DBB162" size={24} />,
    //   bgColor: "#EFEFEF",
    //   textColor: "#DBB162",
    // },
    // {
    //   name: "Total Salon",
    //   count: "920",
    //   title1: " Daily user",
    //   total: "125",
    //   icon: <img src={doner} />,
    //   textColor: "#8E3C50",
    //   bgColor: "#EFEFEF",
    // },
    {
      name: "Total Earning",
      total: "150.10K",
      title1: " Daily Earning",
      daily: "$10,000",
      icon: <img src={earningsIcon} />,
      textColor: "#00AA46",
    },
  ];

  return (
    <div className="bg-[#F7F7F7] rounded-2xl">
      <>
        {data.map((item, index) => (
          <div key={index} className="bg-white">
            {item?.name === "Total Earning" && (
              <div className="flex justify-center bg-[#F7F7F7] rounded-2xl">
                <div className="bg-[#FDFDFD] m-2 rounded-lg p-4">
                  <div className="flex items-center gap-3 w-[248px]">
                    <div className="w-11 h-11 rounded-full bg-[#EFEFEF] flex justify-center items-center">
                      {item?.icon}
                    </div>
                    <h4 className="text-lg font-medium leading-6">
                      {item?.name}
                    </h4>
                  </div>
                  <h2
                    className="text-[32px] font-semibold mt-4"
                    style={{
                      color: `${item?.textColor}`,
                    }}
                  >
                    ${item?.total}
                  </h2>
                  <div className="flex items-center gap-4 mt-4 text-base">
                    <p className="text-[#333333]">{item?.title1}</p>
                    <p className="text-[#767676]">{item?.daily}</p>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "428px",
                    padding: "16px",
                  }}
                >
                  <TotalEarningGoth />
                </div>
              </div>
            )}
          </div>
        ))}
      </>

      {/* <div
        style={{
          marginTop: "20px",
          marginBottom: "15px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <div
          className="bg-black"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <DailyOverviewChart />
        </div>
        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <TotalSellerChart />
        </div>
      </div> */}
    </div>
  );
}

export default DashboardHome;
