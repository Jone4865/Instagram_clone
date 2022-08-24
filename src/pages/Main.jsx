import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import {BsSuitHeart} from 'react-icons/bs';
import {FaRegComment} from 'react-icons/fa';
import { __getMycontent } from "../redux/modules/GetMypage";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";


function Main() {

  const dispatch = useDispatch();


  const myprofile = useSelector((state) => state.getmylist.data.user);

  useEffect(() => {
    dispatch(__getMycontent())
}, [])

  console.log(myprofile)


  const navigate = useNavigate();

  //삭제 및 수정 모달
  const [modal, setModal] = useState(false);

  //데이터들 저장
  const [list, setList] = useState([]);
  const [user, setUser] =useState({});

  //모든 게시물 조회
  const getAxiosData = async () => {
    const token = localStorage.getItem("token");
    const axiosData = await axios.get(process.env.REACT_APP_SURVER +`/api/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setUser(axiosData.data.data.User)
    setList(axiosData.data.data)
    console.log(axiosData.data.data)

  }
  useEffect(() => {
    getAxiosData();
  }, [])


  //게시물 삭제
  const deleteListhandeler = async (ev, postId) => {
    ev.preventDefault();
    const token = localStorage.getItem("token");
    await axios.delete(process.env.REACT_APP_SURVER + `/api/post/delete/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

//게시물 수정가기 핸들러
// const Ceload = (postId)=> {
//   console.log(postId)
//   navigate(`/detail/${postId}/edit`)
// }

  return (
    <All_box>
      <Header/>
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
                      <Icon><BiDotsHorizontalRounded style={{ marginTop: "15px", float: "right" }} onClick={() => { setModal(!modal)}} /></Icon>
                      { 
                      //   modal === true ? (<>
                      //     <ModalBackground onClick={() => {
                      //       setModal(!modal)
                      
                      //     }}>
                      //       <ModalBox onClick={(event) => { event.stopPropagation() }}>
                      //         <p style={{cursor: "pointer"}} onClick={(ev)=>{deleteListhandeler(ev,a.postId); alert('삭제 되었습니다!'); setModal(!modal)}}>삭제</p>
                      //         <p style={{cursor: "pointer"}} onClick={()=> {navigate(`/detail/${a.postId}/edit`)}}>수정</p>
                      //         <p style={{cursor: "pointer"}} onClick={() => { setModal(!modal)}}>취소</p>
                      //       </ModalBox>
                      //     </ModalBackground>
                      //   </>) : null

                        console.log(a.postId)
                       }
                    </Title>
                    <div>
                      <MainImg src={a.postimg}/>
                    </div>
                    <div style={{ padding:"10px"}}>
                      <Icon style={{ marginTop: "10px" }}><BsSuitHeart style={{ marginRight: "15px" }} /><FaRegComment /></Icon>
                      <p style={{ margin: "5px 0px", paddingLeft: "5px" }}>좋아요 {a.likepost}개</p>
                      <Jungror>
                        <h4>{a.User.nickname}</h4><p >{a.content}</p>
                      </Jungror>
                      <p onClick={() => { navigate(`/detail/${a.postId}`) }} style={{ margin: "5px 0px", paddingLeft: "5px", cursor:"pointer" }}>댓글 {a.cntcomment}개 모두 보기</p>
                      <Setting><h4 style={{ margin: "5px 0px", paddingLeft: "5px" }}>{a.createAt}</h4></Setting>
                    </div>
                  </Outbox>
                </div>
        
            )
          })
        }
        </Section>
        <Twobox>
          <TwoboxHead>
            <TwoboxImg src={myprofile?.image}/>
            <TwoboxText>
              <h2>{myprofile?.nickname}</h2>
            </TwoboxText>
          </TwoboxHead>
          <TextBox>
            <p>회원님을 위한 추천</p>
            <p>모두보기</p>
          </TextBox>

          {/* /*여기 맵돌릴거임 */}
          <TwoboxLast>
            <TwoboxLastImg/>
            <TwoboxLastText>
              <h2>추천 닉네임</h2>
            </TwoboxLastText>
          </TwoboxLast>
          {/* /*여기까지 맵돌릴거임 */}


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
  border: 1px solid red;
`
const Twobox = styled.div`
  height: 300px;
  width: 400px;
  border: 1px solid red;
  margin-top: 40px;
  margin-left: 20px;
`

const TwoboxHead = styled.div`
  height: 80px;
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const TwoboxImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid red;
`
const TwoboxText =styled.div`
    border: 1px solid red;
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
const TextBox =styled.div`
  height: 30px;
  width: 100%;
  align-items: center;
  display: flex;
  border: 1px solid red;
  justify-content: space-between;

  h2 {
      margin: 3px;
      padding-left: 3px;
    }
`

const TwoboxLast =styled.div`
margin-top: 10px;
height: 60px;
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const TwoboxLastImg = styled.img`
height: 60px;
width: 60px;
border-radius: 50%;
border: 1px solid red;
background-color: black;
` 

const TwoboxLastText =styled.div`
border: 1px solid red;
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
  border: 2px solid #eee;
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
    background: rgba(0, 0, 0, 0.1);
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

