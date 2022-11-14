import React from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/basic-ui";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import PersonalFeed from "../components/PersonalFeed";
import GroupFeed from "../components/GroupFeed";
import MyPage from "../components/MyPage";
import CommunityFeed from "../components/CommunityFeed";
import DetailProfile from "../components/DetailProfile";
import DetailGroup from "../components/DetailGroup";
import CreateGroup from "../components/CreateGroup";
import BoardDetail from "../components/DetailBoard";
import CreateBoard from "../components/CreateBoard";
import Login from "../activities/Login";

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
  | "Login";

const NavigateMapper: Record<Navigate_Type, React.ReactNode> = {
  Main: <PersonalFeed />,
  Group: <GroupFeed />,
  MyPage: <MyPage />,
  Community: <CommunityFeed />,
  Profile: <DetailProfile />,
  DetailGroup: <DetailGroup />,
  CreateGroup: <CreateGroup />,
  BoardDetail: <BoardDetail />,
  CreateBoard: <CreateBoard />,
  Login: <Login />,
};

type MakeActivityType = (navigate: Navigate_Type) => ActivityComponentType;
const MakeActivity: MakeActivityType = (navigate: Navigate_Type) => () => {
  return (
    <AppScreen theme="cupertino">
      {navigate === "Login" ? <></> : <TopNav />}
      {NavigateMapper[navigate]}
      {navigate === "Profile" ||
      navigate === "DetailGroup" ||
      navigate === "Login" ? (
        <></>
      ) : (
        <BottomNav />
      )}
    </AppScreen>
  );
};

export default MakeActivity;
