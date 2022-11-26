import React from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../activities/Main/PersonalFeed";
import GroupFeed from "../activities/Group/GroupFeed";
import MyPage from "../activities/MyPage/MyPage";
import ProfileEdit from "../activities/MyPage/ProfileEdit";
import CommunityFeed from "../activities/Community/CommunityFeed";
import DetailProfile from "../activities/Main/DetailProfile";
import DetailGroup from "../activities/Group/DetailGroup";
import CreateGroup from "../activities/Group/CreateGroup";
import BoardDetail from "../activities/Community/DetailBoard";
import CreateBoard from "../activities/Community/CreateBoard";
import Login from "../activities/Sign/Login";
import Password from "../activities/MyPage/PasswordEdit";
import LikeProfile from "../activities/MyPage/LikeProfile";
import ModifyFavor from "../activities/MyPage/ModifyFavor";
import FindPassword_Email from "../activities/Sign/FindPassword/AuthEmail";
import FindPassword_Password from "../activities/Sign/FindPassword/NewPassword";
import ServiceTerm from "../activities/MyPage/ServiceTerm";
import UserTerm from "../activities/MyPage/UserTerm";

type Navigate_Type =
  | "Main"
  | "Group"
  | "Community"
  | "MyPage"
  | "Profile"
  | "DetailGroup"
  | "CreateGroup"
  | "BoardDetail"
  | "CreateBoard"
  | "Login"
  | "ProfileEdit"
  | "Password"
  | "ModifyFavor"
  | "LikeProfile"
  | "FindPassword_Email"
  | "FindPassword_Password"
  | "ServiceTerm"
  | "UserTerm";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  Community: <CommunityFeed />,
  MyPage: <MyPage />,
  Profile: <DetailProfile />,
  DetailGroup: <DetailGroup />,
  CreateGroup: <CreateGroup />,
  BoardDetail: <BoardDetail />,
  CreateBoard: <CreateBoard />,
  Login: <Login />,
  ProfileEdit: <ProfileEdit />,
  ModifyFavor: <ModifyFavor />,
  Password: <Password />,
  LikeProfile: <LikeProfile />,
  FindPassword_Email: <FindPassword_Email />,
  FindPassword_Password: <FindPassword_Password />,
  ServiceTerm: <ServiceTerm />,
  UserTerm: <UserTerm />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      {navigate === "MyPage" ||
      navigate === "Profile" ||
      navigate === "DetailGroup" ||
      navigate === "CreateGroup" ||
      navigate === "CreateBoard" ||
      navigate === "BoardDetail" ||
      navigate === "ProfileEdit" ||
      navigate === "Password" ||
      navigate === "LikeProfile" ? (
        <TopNav status={true} />
      ) : navigate === "Login" ? (
        <></>
      ) : (
        <TopNav />
      )}
      {NavigateMapper[navigate]}
      {navigate === "Profile" ||
      navigate === "DetailGroup" ||
      navigate === "Login" ||
      navigate === "CreateGroup" ||
      navigate === "Password" ||
      navigate === "LikeProfile" ||
      navigate === "ModifyFavor" ||
      navigate === "ProfileEdit" ||
      navigate === "BoardDetail" ||
      navigate === "FindPassword_Email" ||
      navigate === "FindPassword_Password" ||
      navigate === "ServiceTerm" ||
      navigate === "UserTerm" ? (
        <></>
      ) : (
        <BottomNav />
      )}
    </AppScreen>
  );
};

export default MakeActivity;
