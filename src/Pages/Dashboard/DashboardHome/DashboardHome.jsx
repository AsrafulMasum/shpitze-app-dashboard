import { Col, Row } from "antd";
import React from "react";

import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import TotalEarningGoth from "./TotalEarningGrowth";
import doner from "../../../assets/doner.png";
import donation from "../../../assets/donation.png";
import earningsIcon from "../../../assets/dashboardHome/earningsIcon.png";
import totalEmployee from "../../../assets/dashboardHome/totalEmployee.png";
import totalUserIcon from "../../../assets/dashboardHome/totalUserIcon.png";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total Service Providers",
      total: "20.10K",
      title1: "Daily progress",
      daily: "100",
      icon: <img src={totalUserIcon} />,
      textColor: "#BB6D42",
      barColor: "#EAD2C4",
    },
    {
      name: "Total Employer",
      total: "10.10k",
      title1: " Daily progress",
      daily: "50",
      icon: <img src={totalEmployee} />,
      textColor: "#68817F",
      barColor: "#CAEEEC",
    },
    {
      name: "Total Earning",
      total: "150.10K",
      title1: " Daily Earning",
      daily: "$10,000",
      icon: <img src={earningsIcon} />,
      textColor: "#00AA46",
      barColor: "#87DF50",
    },
  ];

  return (
    <div className="rounded-2xl flex flex-col p-4">
      <div>
        {data?.map((item, index) => (
          <div key={index} className="bg-white">
            {item?.name === "Total Earning" && (
              <div className="flex justify-center bg-[#F7F7F7] rounded-2xl shadow">
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
      </div>

      <div className="grid grid-cols-2 gap-x-4 mt-4">
        {data?.map((item, index) => (
          <div key={index} className="bg-[#F7F7F7] rounded-2xl shadow">
            {item?.name !== "Total Earning" && (
              <>
                <div className="bg-[#FDFDFD] m-2 rounded-lg p-2 w-[285px] h-[126px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#EFEFEF] flex justify-center items-center">
                      {item?.icon}
                    </div>
                    <h4 className="text-lg font-medium leading-6">
                      {item?.name}
                    </h4>
                  </div>
                  <h2
                    className="text-xl font-semibold mt-2"
                    style={{
                      color: `${item?.textColor}`,
                    }}
                  >
                    ${item?.total}
                  </h2>
                  <div className="flex items-center gap-4 mt-1 text-base">
                    <p className="text-[#333333]">{item?.title1}</p>
                    <p className="text-[#767676]">{item?.daily}</p>
                  </div>
                </div>
                <div className="p-4 -mt-12">
                  <TotalSellerChart barColor={item?.barColor} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default DashboardHome;
