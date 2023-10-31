import React from "react";

import { Img, List, Text } from "../../components";

const DesktopOneNavigationbar = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="bg-black-900 flex flex-col h-14 md:h-auto items-center justify-center w-full">
          <Img className="h-[30px] w-[30px]" src="images/img_home.svg" alt="home" />
          <Text className="font-inter text-white-A700 text-xs w-auto">{props?.homeOne}</Text>
        </div>
        <div className="flex flex-col h-14 md:h-auto items-center justify-center w-full">
          <Img className="h-[30px] w-[30px]" src="images/img_trophy.svg" alt="trophy" />
          <Text className="font-inter text-black-900 text-xs w-auto">{props?.workout}</Text>
        </div>
        <div className="flex flex-col h-14 md:h-auto items-center justify-center w-full">
          <Img className="h-[30px] w-[30px]" src="images/img_progress.svg" alt="progress" />
          <Text className="font-inter text-black-900 text-xs w-[50px]">{props?.progressOne}</Text>
        </div>
        <div className="flex flex-col h-14 md:h-auto items-center justify-center w-full">
          <Img className="h-[30px] w-[30px]" src="images/img_user.svg" alt="user" />
          <Text className="font-inter text-black-900 text-xs w-auto">{props?.community}</Text>
        </div>
        <div className="flex flex-col h-14 md:h-auto items-center justify-center w-full">
          <Img className="h-[37px] w-[35px]" src="images/img_settings.svg" alt="settings" />
          <Text className="font-inter text-black-900 text-xs w-[46px]">{props?.settingsOne}</Text>
        </div>
      </List>
    </>
  );
};

DesktopOneNavigationbar.defaultProps = {
  homeOne: "Home",
  workout: "Workout",
  progressOne: "Progress",
  community: "Community",
  settingsOne: "Settings",
};

export default DesktopOneNavigationbar;
