import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  InfoTitleDiv,
  Img,
  TinyTitle,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import worshipImg from "../../img/worship.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ContentTag = styled.div`
  max-width: 80vw;
  img {
    max-width: 50%;
  }
  
`;
const DivTag = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;
`;
const DeleteTag = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 0.3ch solid red;
  padding: 10px;
  color: red;
  cursor: pointer;
`;

const UpdataTag = styled.button`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  border: 0.3ch solid green;
  color: green;
  cursor: pointer;
`;
export default function ShowPost() {
  const { id } = useParams();
  const [contents,setContents]=useState('');
  const content: any = useRef();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    AOS.init();
    axios({
      url: "http://localhost:8080/post/takecontent",
      method: "get",
      params: { id: id },
      withCredentials: true,
    }).then((result) => {
      setTitle(result.data.title);
      setContents(result.data.content);
      content.current.innerHTML = result.data.content;
    });
    setToken(window.sessionStorage.getItem("token"));
  }, []);

  const handleDelete = () => {
    const params = {
      id: id,
    };
    axios.delete(`http://localhost:8080/post/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    navigate("/news");
  };
  const handleUpdate = () => {
    navigate(`/updatepost/${id}`);
  };
  return (
    <Wrap>
      <ImgBox>
        <Img src={Rainbow250} alt="" width="100%" height="100%" margin="auto" />
      </ImgBox>
      <DivideBox>
        <Sidebar title="소식" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">소식</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              {token ? (
                <DivTag>
                  <UpdataTag onClick={handleUpdate}>수정</UpdataTag>
                  <DeleteTag onClick={handleDelete}>삭제</DeleteTag>
                </DivTag>
              ) : (
                <></>
              )}
              <TinyTitle fontsize="18px">{title}</TinyTitle>
              <ContentTag className="ql-editor" dangerouslySetInnerHTML={{__html:contents}}></ContentTag>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
