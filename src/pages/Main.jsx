import Router from "../shared/Router";
import { useState, useEffect, React } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageUpload from "../components/ImageUpload";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaRegComment } from 'react-icons/fa';
import { BsSuitHeart } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';


function Main() {

  const { postId } = useParams();

  const navigate = useNavigate();

  //삭제 및 수정 모달
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  //모든 게시물 조회
  const getAxiosData = async () => {
    const axiosData = await axios.get('http://localhost:3001/posts')

    setList(axiosData.data)
    console.log(axiosData.data)

  }
  useEffect(() => {
    getAxiosData();
  }, [])

  //게시물 삭제
  const deleteListhandeler = async (ev) => {
    ev.preventDefault();
    await axios.delete('http://localhost:3001/posts/${postId}')
  }

  // const getModal = (id)=> {

  // }


  // const getCommentData = async () => {
  //   const commentData = await axios.get('')
  // }
  return (
    <>
    <Header/>
      <div>
        {
          list.map((a) => {
            return (
              <Section>
                <div key={a.postId}>
                  <Outbox>
                    <Title>
                      <Setting>
                        <Pro src={a.userimage} />
                        <h4 style={{ marginLeft: "10px" }}>{a.nickname}</h4>
                      </Setting>
                      <Icon><BiDotsHorizontalRounded style={{ marginTop: "15px", float: "right" }} onClick={() => { setModal(!modal) }} /></Icon>
                      {
                        modal === true ? (<>
                          <ModalBackground onClick={() => {
                            setModal(!modal)

                          }}>
                            <ModalBox onClick={(event) => { event.stopPropagation() }}  >
                              <p onClick={deleteListhandeler}>삭제</p>
                              <p>수정</p>
                              <p onClick={() => { setModal(!modal) }}>취소</p>
                            </ModalBox>
                          </ModalBackground>
                        </>) : null
                      }
                    </Title>
                    <div>
                      <MainImg src={a.img} />
                    </div>
                    <div>
                      <Icon style={{ marginTop: "10px" }}><BsSuitHeart style={{ marginRight: "15px" }} /><FaRegComment /></Icon>
                      <p style={{ margin: "5px 0px", paddingLeft: "5px" }}>좋아요 {a.postlikes}</p>
                      <Setting> <h4 style={{ margin: "5px 0px", paddingLeft: "5px" }}>{a.nickname}</h4> <p style={{ margin: "5px 0px", paddingLeft: "5px" }}>{a.content}</p></Setting>
                      <p onClick={() => { navigate(`/detail/${a.postId}`) }} style={{ margin: "5px 0px", paddingLeft: "5px" }}>댓글 {a.cntcomments}개 모두 보기</p>
                      <Setting><h4 style={{ margin: "5px 0px", paddingLeft: "5px" }}>닉네임</h4> <p style={{ margin: "5px 0px", paddingLeft: "5px" }}>댓글임</p></Setting>
                    </div>
                  </Outbox>
                </div>
              </Section>
            )
          })
        }
      </div>
    </>
  );
}

export default Main;


const Section = styled.div`
display: flex;
flex-direction: row;
  
`

const Outbox = styled.div`
  border-radius: 12px;
  border: 1px solid red;
  width: 500px;
  height: 700px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: 80%;
`

// 수정 삭제 모달
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;


const ModalBox = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40%;
    height: 20%;
    max-width: 500px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

/// 

const Title = styled.div`
  display: flex;
  justify-content: space-between;
 `

const Pro = styled.img`
  margin-top: 2px;
  margin-left: 4px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
 `

const MainImg = styled.img`
  
  width: 100%;
  height: 400px;
  margin-top: 15px;
`

const Setting = styled.div`
  display: flex;
  flex-direction: row;
`
const Icon = styled.div`
  font-size: 30px;
`