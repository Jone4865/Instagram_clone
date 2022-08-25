import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { __getMycontent } from "../redux/modules/GetMypage";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";


function Main() {

  const dispatch = useDispatch();


  const myprofile = useSelector((state) => state.getmylist.data.user);

  useEffect(() => {
    dispatch(__getMycontent())

  }, [])

  const navigate = useNavigate();

  //각각의 포스트 아이디값 넣어놓기
  const [postIds, setPostIds] = useState(0);

  //좋아요 값 저장하기
  const [likeNum, setLikeNum] = useState();

  //삭제 및 수정 모달
  const [modal, setModal] = useState(false);

  //데이터들 저장
  const [list, setList] = useState([]);


  //모든 게시물 조회
  const getAxiosData = async () => {
    const token = localStorage.getItem("token");
    const axiosData = await axios.get(process.env.REACT_APP_SURVER + `/api/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setList(axiosData.data.data)
  }
  useEffect(() => {
    getAxiosData();
  }, [])


  //좋아요 추가 하기
  const likeButtonClickHandler = (postIds) => {
    console.log(postIds)
    const token = localStorage.getItem("token");
    const postAxiosData = async () => {
      try {
        await axios.post(process.env.REACT_APP_SURVER + `/api/post/like/${postIds}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
            }
          )
          .then((res) => {
            console.log(res.data.sucess == true)
            if (res.data.sucess === true) {
              alert(res.data.message);
              console.log(res)
            }else if (res.data.sucess !== true) {
              alert(res.data.message);
              console.log(res);
            }
          });
      } catch (err) {
        console.log(err);
      }
    };
    postAxiosData();
  };


  //좋아요 취소하기

  const UnlikeButtonClickHandler = (postIds) => {
    console.log(postIds)
    const token = localStorage.getItem("token");
    const postAxiosData = async () => {
      try {
        await axios.post(process.env.REACT_APP_SURVER + `/api/post/unlike/${postIds}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
            }
          )
          .then((res) => {
            if (res.msg === "좋아요 완료.") {
              alert(res.msg);
              console.log(res)
            }
             else {
              alert("좋아요를 취소했습니다.");
              console.log(res);
            }
          });
      } catch (err) {
        console.log(err);
      }
    };
    postAxiosData();
  };




  //게시물 삭제
  const deleteListhandeler = async (postId) => {
    console.log(postId)
    const token = localStorage.getItem("token");
    await axios.delete(process.env.REACT_APP_SURVER + `/api/post/delete/${postId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        const data = res.data.sucess === true
        const msg = res.data.message
        if (data) {
          alert(msg)
          navigate(`/`)
          console.log(res)
          setModal(!modal)
        } else {
          alert(msg)
          console.log(res)
        }
      }).catch(err => {
        console.log(err)
      })
      getAxiosData();
  }

  return (
    <All_box>
      <Header />
      <Bigbox>
        <Section>
          {
            list?.map((a) => {
              return (
                <div key={a.postId}>
                  <Outbox className="test">
                    <Title>
                      <Setting>
                        <Pro src={a.User.userimage} />
                        <h4>{a.User.nickname}</h4>
                      </Setting>

                      <Icon><BiDotsHorizontalRounded style={{ marginTop: "15px", float: "right" }} onClick={() => { setModal(!modal); setPostIds(a.postId)}} /></Icon>

                    </Title>
                    <div>
                      <MainImg src={a.postimg} />
                    </div>
                    <div style={{ padding: "10px" }}>
                      <Icon style={{ marginTop: "10px" }}><BsSuitHeart style={{ marginRight: "15px" }}  onClick={() => { likeButtonClickHandler(a.postId)}} /><FaRegComment /></Icon>
                      <button onClick={()=>{UnlikeButtonClickHandler(a.postId)}}>좋아요 취소하기임</button>
                      <p style={{ margin: "5px 0px", paddingLeft: "5px" }}>좋아요 {a.cntlike}개</p>
                      <Jungror>
                        <h4>{a.User.nickname}</h4><p >{a.content}</p>
                      </Jungror>
                      <p onClick={() => { navigate(`/detail/${a.postId}`) }} style={{ margin: "5px 0px", paddingLeft: "5px", cursor: "pointer",opacity: "0.7", zIndex:"0" }}>댓글 {a.cntcomment}개 모두 보기</p>
                      <Setting><h4 style={{ margin: "5px 0px", paddingLeft: "5px" }}>{a.createAt}</h4></Setting>
                    </div>
                  </Outbox>
                </div>

              )
            })
          }

          {
            modal === true ? (<>
              <ModalBackground onClick={() => {
                setModal(!modal)
              }}>
                <ModalBox onClick={(event) => { event.stopPropagation() }}>
                  <p style={{ cursor: "pointer" }} onClick={() => { deleteListhandeler(postIds) }}>삭제</p>
                  <p style={{ cursor: "pointer" }} onClick={() => { navigate(`/detail/${postIds}/edit`) }}>수정</p>
                  <p style={{ cursor: "pointer" }} onClick={() => { setModal(!modal) }}>취소</p>
                </ModalBox>
              </ModalBackground>
            </>) : null
          }

        </Section>
        <Twobox>
          <TwoboxHead>
            <TwoboxImg src={myprofile?.image} />
            <TwoboxText>
              <h2>{myprofile?.nickname}</h2>
              <h2>{myprofile?.name}</h2>
            </TwoboxText>
          </TwoboxHead>
          <TextBox>
            <p>회원님을 위한 추천</p>
            <p>모두보기</p>
          </TextBox>

          <TwoboxLast>
            <TwoboxLastImg />
            <TwoboxLastText>
              <h2>추천 닉네임</h2>
            </TwoboxLastText>
          </TwoboxLast>
          <TwoboxLast>
            <TwoboxLastImg/>
            <TwoboxLastText>
              <h2>추천 닉네임</h2>
            </TwoboxLastText>
          </TwoboxLast>
          <TwoboxLast>
            <TwoboxLastImg />
            <TwoboxLastText>
              <h2>추천 닉네임</h2>
            </TwoboxLastText>
          </TwoboxLast>
        </Twobox>
      </Bigbox>



    </All_box>
  );
}

export default Main;


const Jungror = styled.div`
  display: flex;
  flex-direction: row;

  h4{
    margin:5px 0px; 
    padding-left: 5px;
    font-size: 15px;
  }

  p{
    margin: 5px 0px;
     padding-left: 5px;
  }
`

const All_box = styled.div`
  max-width: 2000px;
  min-width: 100px;
  background-color: #eeeeee65;
`

const Bigbox = styled.div`
  display: flex;
  justify-content: center;
`
const Twobox = styled.div`
  height: 325px;
  width: 400px;
  margin-top: 40px;
  margin-left: 20px;
`

const TwoboxHead = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const TwoboxImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: aliceblue;
`
const TwoboxText = styled.div`
    height: 100%;
    width: 335px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      
      padding-left: 8px;
    }
`
const TextBox = styled.div`
  height: 30px;
  width: 100%;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;

  p {
      margin: 3px;
      padding-left: 3px;
      opacity: 0.7;
      
    }
`

const TwoboxLast = styled.div`
  margin-top: 10px;
  height: 60px;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const TwoboxLastImg = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: skyblue;
margin-left: 5px;
`

const TwoboxLastText = styled.div`
height: 100%;
width: 335px;
display: flex;
flex-direction: column;
justify-content: center;
h2 {
  margin: 5px;
  padding-left: 10px;
}
`

const Section = styled.div`
display: flex;
flex-direction: column;
`

const Outbox = styled.div`
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background-color: white;
`

// 수정 삭제 모달
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
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
  padding: 10px;
 `

const Pro = styled.img`
  margin-top: 2px;
  margin-left: 4px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
 `

const MainImg = styled.img`
  
  width:100%;
  height: 400px;
  margin-top: auto;
`

const Setting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`

