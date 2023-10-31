import React from "react";

import { Img, Text } from "../../components";
import DesktopOneNavigationbar from "../../components/DesktopOneNavigationbar";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto p-[86px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue-A400 flex flex-col md:gap-10 gap-[729px] items-center justify-start md:px-5 w-[31%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img className="h-[46px]" src="images/img_iosstatusbarblack.svg" alt="iosstatusbarbla" />
          </div>
          <DesktopOneNavigationbar className="bg-white-A700 sm:flex-col flex-row grid grid-cols-5 justify-start p-2.5 shadow-bs w-[393px] sm:w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
