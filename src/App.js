import React from "react";
import Router from "./shared/Router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//컴포넌트

function App() {

  const [modal, setModal] = useState(false);
  const [test, setTest] = useState([]);


  //모든 게시물 조회
  const getAxiosData = async () => {
    const axiosData = await axios.get('http://localhost:3001/posts')

    setTest(axiosData.data)
    console.log(axiosData.data)

  }
  useEffect(() => {
    getAxiosData();
  }, [])


  const getCommentData = async () => {
    const commentData = await axios.get('')
  }

  return (
    <div className="App">
      <Header>
        <h4>instagram</h4>
      </Header>
      <Big>
        {
          test.map((a) => {
            return (
              <div key={a.id}>

                <Outbox>
                  <Title>
                    <Pro />
                    <h4>{a.nickname}</h4>
                    <button onClick={() => { setModal(!modal) }}>
                      ◼
                    </button>
                    {
                      modal === true ? (<>
                        <ModalBackground onClick={() => {
                          setModal(!modal)
                        }}>
                          <ModalBox  >
                            <p>삭제</p>
                            <p>수정</p>
                            <p onClick={() => { setModal(!modal) }}>취소</p>
                          </ModalBox>
                        </ModalBackground>
                      </>) : null
                    }
                  </Title>
                  <MainImg/>
                    <p style={{margin:"5px 0px", paddingLeft:"10px"}}>❤✔🚫</p>
                  <Conten>
                    <p>{a.nickname}</p>
                    <p>{a.content}</p>
                  </Conten>
                  <p style={{margin:"5px 0px", paddingLeft:"10px"}}>댓글더보기</p>
                  <CommentBox>
                  <h4>닉네임</h4>
                  <h4>댓글임</h4>
                </CommentBox>
                </Outbox>
              </div>
            )
          })
        }

      </Big>
    </div>
  );
}

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: #eee;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  `

const Outbox = styled.div`
  border-radius: 12px;
  border: 1px solid red;
  width: 500px;
  height: 700px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 220%;
  `


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
    height: 60%;
    max-width: 500px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;


const Title = styled.div`
  display: flex;
  float: left;
  gap: 10px;
  `

const Pro = styled.div`
  display: flex;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  `


const Big = styled.div`
  width: 300px;
  `

const MainImg = styled.div`
  background-color: black;
  width: 100%;
  height: 400px;
  margin-top: 15px;
  `

const Conten = styled.div`
  display: flex;
  float: left;
  gap: 10px;
`
const CommentBox = styled.div`
display: flex;
gap: 8px;
`

export default App;
