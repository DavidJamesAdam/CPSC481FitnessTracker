import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ScrollFrame from "../components/ScrollFrame";
import Bottombar1 from "../components/Bottombar1";

const IosstatusBarblackIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 392px;
  height: 43.3px;
  overflow: hidden;
`;
const Community = styled.b`
  position: absolute;
  top: 63px;
  left: 18px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 16px;
`;
const BackCom3Icon = styled.img`
  position: absolute;
  top: 106px;
  left: 37px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const TestworkoutChild = styled.div`
  position: absolute;
  top: 106px;
  left: 259px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 109px;
  height: 33px;
  cursor: pointer;
`;
const ToFeed = styled.div`
  position: absolute;
  top: 109px;
  left: 274px;
  font-size: var(--font-size-3xl);
  color: var(--black);
  text-align: left;
`;
const Testworkout2 = styled.div`
  position: absolute;
  top: 85px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 394px;
  height: 854px;
  overflow: hidden;
  mix-blend-mode: normal;
`;
const CommunityScreenPostRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--community);
`;

const CommunityScreenPost = () => {
  const navigate = useNavigate();

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onBackCom3IconClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onToFeedClick = useCallback(() => {
    navigate("/community-screen-main"); // Navigate to the desired route
  }, [navigate]);

  return (
    <CommunityScreenPostRoot>
      <Testworkout2>
        <IosstatusBarblackIcon1 alt="" src="/iosstatus-barblack1.svg" />
        <Community>Community</Community>
        <BackCom3Icon alt="" src="/back-com2.svg" onClick={onBackCom3IconClick} />
        <ScrollFrame />
        <Bottombar1 />
      </Testworkout2>
    </CommunityScreenPostRoot>
  );
};

export default CommunityScreenPost;
