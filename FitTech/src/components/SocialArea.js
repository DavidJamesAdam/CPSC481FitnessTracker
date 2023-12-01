import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SocialAreaChild = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-darkslategray);
  width: 393px;
  height: 244px;
`;
const SocialAreaItem = styled.div`
  position: absolute;
  top: 63px;
  left: 16px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slategray-100);
  width: 360px;
  height: 193px;
  cursor: pointer;
`;
const ProfilePicIcon = styled.img`
  position: absolute;
  height: 15.99%;
  width: 12.98%;
  top: 22.79%;
  right: 81.68%;
  bottom: 61.22%;
  left: 5.34%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Latest1 = styled.div`
  position: relative;
`;
const Latest = styled.div`
  position: absolute;
  top: 25px;
  left: 8px;
  width: 76px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
`;
const SocialAreaInner = styled.div`
  position: absolute;
  top: 109px;
  left: 52px;
  height: 34px;
`;
const Hit225lbsOn = styled.div`
  position: absolute;
  top: 132px;
  left: 21px;
  font-size: var(--community-size);
  font-weight: 300;
  display: inline-block;
  width: 174px;
  height: 16px;
`;
const MinAgo = styled.div`
  position: relative;
  font-weight: 300;
`;
const MinAgoWrapper = styled.div`
  position: absolute;
  top: 91px;
  left: 83px;
  width: 60px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  font-size: var(--community-size);
`;
const User1234Wrapper = styled.div`
  position: absolute;
  top: 71px;
  left: 72px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const LikeeIcon = styled.img`
  position: absolute;
  height: 6.46%;
  width: 5.34%;
  top: 78.57%;
  right: 47.33%;
  bottom: 14.97%;
  left: 47.33%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LineIcon = styled.img`
  position: absolute;
  top: 223.1px;
  left: 16px;
  width: 360px;
  height: 1.9px;
`;
const Like = styled.div`
  position: absolute;
  top: 202px;
  left: 21px;
  font-size: var(--body-1-size);
  font-weight: 300;
  color: var(--color-lightgray);
  display: inline-block;
  width: 111px;
  height: 15px;
`;
const SocialAreaRoot = styled.div`
  position: absolute;
  top: 198px;
  left: 1px;
  width: 393px;
  height: 294px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--community);
`;

const SocialArea = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  return (
    <SocialAreaRoot>
      <SocialAreaChild />
      <SocialAreaItem onClick={onRectangle3Click} />
      <ProfilePicIcon alt="" src="/profilepic1.svg" />
      <Latest>
        <Latest1>Latest</Latest1>
      </Latest>
      <SocialAreaInner />
      <Hit225lbsOn>hit 225lbs on bench press!</Hit225lbsOn>
      <MinAgoWrapper>
        <MinAgo>5min ago</MinAgo>
      </MinAgoWrapper>
      <User1234Wrapper>
        <MinAgo>user1234</MinAgo>
      </User1234Wrapper>
      <LikeeIcon alt="" src="/likee1.svg" />
      <LineIcon alt="" src="/line-2.svg" />
      <Like>1 like</Like>
    </SocialAreaRoot>
  );
};

export default SocialArea;
