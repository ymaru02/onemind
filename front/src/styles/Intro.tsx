import styled from "styled-components";
import { theme } from "./Theme";

const Flex = styled.div`
  display: flex;
`;
// Introduction & Location 공통
export const Wrap = styled(Flex)`
  width: 100%;
  padding: 0 0 25px 0;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const ImgBox = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
export const Img = styled.img<{ width: any; height: any; margin: any }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
export const FloatImg = styled.img<{ width: any; height: any; float: any }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  float: ${(props) => props.float};
  margin: 5px 20px 20px 0;

  @media ${(props) => props.theme.mobile} {
    margin: auto;
  }
`;
export const DivideBox = styled(Flex)`
  width: 100%;
  max-width: 1280px;
  flex-flow: row wrap;
  gap: 25px;
`;
export const SidebarBox = styled(Flex)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 500px;
  flex-flow: column wrap;
  gap: 30px;
  flex: 2;
  padding: 16px 0 30px 30px;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 5px;
  gap: 30px;
  padding-left: 10px;
`;
export const Li = styled.li`
  list-style: none;
`;

export const ContentsBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 20px 30px 30px;
`;
export const ContentsDiv = styled.div``;
export const InfoDiv = styled.div`
  text-align: left;
  padding-left: 20px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
  }
`;
export const InfoTitleDiv = styled(InfoDiv)<{ fontsize: any }>`
  height: 40px;
  text-align: left;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  border-bottom: 1px solid lightgrey;
`;
export const TinyTitle = styled.p<{ fontsize: any }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
`;
// Location 적용
export const MapBox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid ${theme.mainColor};
`;
// Sidebar 적용
export const H2 = styled.h2`
  height: 45px;
  border-bottom: 1px solid lightgrey;
`;
export const Lihover = styled(Li)`
  height: 32px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${theme.mainColor};
  border-radius: 8px;
  text-align: center;
  padding: 10px 0 6px 0;
  &:hover {
    font-size: 18px;
    background-color: ${theme.mainColor};
    color: ${theme.subColor};
  }
`;
// Worship 적용
export const WorshipItem = styled(Flex)`
  border-left: 2px solid ${theme.mainColor};
  border-right: 2px solid ${theme.mainColor};
  border-radius: 20px;
  width: 100%;
  height: 300px;
  margin: 20px 0 0 0;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;
export const WorshipInnerItem = styled(Flex)`
  width: 33%;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;
export const P = styled.p`
  // border-bottom: 1px double ${theme.mainColor};
  border-bottom: 1px double lightgrey;
`;
