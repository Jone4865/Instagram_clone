import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { __PostContent } from "../redux/modules/PostContent";
import { __DeleteContent } from "../redux/modules/DeleteContent";
import { __PutContent } from "../redux/modules/PutContent"

function Detail() {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("")
    const [view, setView] = useState(true)
    const [newcomment, setnewComment] = useState("")

    const navigate = useNavigate();
    const { postId } = useParams();

    //게시물 내용
    const [detailList, setDetailList] = useState({});

    //유저 정보
    const [user, setUser] = useState({});

    //상세보기 모달
    const [detailModal, setDetailModal] = useState(true);

    //상세보기 삭제,수정 모달
    const [detailDeleteModal, setDetailDeleteModal] = useState(false);

    // 상세게시물 가져오기
    const getAxiosDetailData = async () => {
        const token = localStorage.getItem("token");
        const axiosData = await axios.get(process.env.REACT_APP_SURVER + `/api/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setDetailList(axiosData.data.data)
        setUser(axiosData.data.data.PostingUser)
    }
    useEffect(() => {
        getAxiosDetailData();
    }, [])

    const onsubmit = (e) => {
        e.preventDefault();
        dispatch(__PostContent({ comment, postId }));
        setComment("");
        setTimeout(() => { }, "1000");
        getAxiosDetailData();
        navigate(`/detail/${detailList.id}`, { replace: true })
    }

    //게시물 삭제 성공함
    const deleteListhandeler = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem("token");
        await axios.delete(process.env.REACT_APP_SURVER + `/api/post/delete/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    const editHandle = (e) => {
        setView(false)
    }

    const cancleHandle = (e) => {
        setView(true)
    }

    const newonsubmit = (e) => {
        e.preventDefault();
        dispatch(__PutContent({ newcomment, commentId: e.target.value }));
        setnewComment("");
        setView(true)
        setTimeout(() => { }, "1000");
        getAxiosDetailData();
        navigate(`/detail/${detailList.id}`, { replace: true })
    }

    return (
        <All_box>
            <Header />
            {
                detailModal === true ? (<>
                    <DatailModalBackground onClick={() => { navigate('/'); setDetailModal(!detailList) }}>
                        <DatailModalBox onClick={(event) => { event.stopPropagation() }}>
                            <All_box>
                                <Left src={detailList.postimage}>
                                </Left>
                                <Right>
                                    <Onebox>
                                        <HeadBox>
                                            <Onebox_img src={user.userimage} />
                                            <h5 style={{ marginLeft: "10px" }}>{user.nickname}</h5>
                                        </HeadBox>
                                        <div>
                                            <Icon><BiDotsHorizontalRounded onClick={() => { setDetailDeleteModal(!detailDeleteModal) }} /></Icon>
                                        </div>

                                    </Onebox>
                                    <Twobox>
                                        <Twobox_img src={user.userimage} />
                                        <h5 style={{ marginTop: "8px" }}>{user.nickname}</h5>
                                        <p style={{ marginTop: "10px", marginLeft: "5px" }}>ㅁㄴㅇ</p>
                                    </Twobox>
                                    <Lastbox>
                                        {
                                            detailList.comments?.map((a) => {
                                                return (
                                                    <div key={a.commentid}>
                                                        <Comment_box>
                                                            <Comment_img src={detailList.postimage} />
                                                            <h5>{a.nickname}</h5>
                                                            <p>{a.comment}</p><button onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(__DeleteContent(+a.commentid));
                                                                setTimeout(() => { }, "1000");
                                                                getAxiosDetailData();
                                                                navigate(`/detail/${detailList.id}`, { replace: true });
                                                            }}>삭제</button><button onClick={editHandle}>수정</button>
                                                        </Comment_box>
                                                        
                                                        <Comment_box>
                                                            <Comment_img src={detailList.postimage} />
                                                            <h5>{a.nickname}</h5>
                                                            <div><input onChange={(e) => setnewComment(e.target.value)}></input><button value={a.commentid} onClick={newonsubmit}>수정완료</button><button onClick={cancleHandle}>취소</button></div>
                                                        </Comment_box>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Lastbox>
                                    <div style={{ "margin": "170px auto auto 20px" }} >
                                        <input onChange={(e) => setComment(e.target.value)} placeholder="댓글 달기..." style={{ "border": "2px solid #f3ebeb", "width": "400px", "padding": "5px", "borderRadius": "5px" }}></input><span><button onClick={onsubmit} style={{ "marginLeft": "10px", "color": "#4891ff", "fontWeight": "bold", "backgroundColor": "white", "border": "0px" }} >작성</button></span>
                                    </div>
                                </Right>
                            </All_box>

                        </DatailModalBox>
                    </DatailModalBackground>
                </>) : null
            }

            {/* 모달창임 */}
            {
                detailDeleteModal === true ? (<>
                    <ModalBackground onClick={() => {
                        setDetailDeleteModal(!detailDeleteModal)

                    }}>
                        <ModalBox onClick={(event) => { event.stopPropagation() }}  >
                            <p style={{ cursor: "pointer" }} onClick={(ev) => { deleteListhandeler(ev) }}>삭제</p>
                            <p style={{ cursor: "pointer" }} onClick={() => { navigate(`/detail/${postId}/edit`) }}>수정</p>
                            <p style={{ cursor: "pointer" }} onClick={() => { setDetailDeleteModal(!detailDeleteModal) }}>취소</p>
                        </ModalBox>
                    </ModalBackground>
                </>) : null
            }
        </All_box>
    )
}

export default Detail

const HeadBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


const All_box = styled.div`
  max-width: 2000px;
  min-width: 100px;
  display: flex;
  flex-direction: row;
`

///상세 보기 모달
const DatailModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`


const DatailModalBox = styled.div`
    background-color: white;
    width: 1500px;
    height: 800px;
    max-width: 2000px;
    min-width: 200px;
    margin-top: 50px;
`;
/////


// 수정 삭제 모달
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
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

const Left = styled.img`
    width: 65%;
    float: left;
    padding-top: 10px;
    padding-left: 10px;
    height: 780px;
`
const Right = styled.div`
    width: 505px;
    margin-left: 10px;
    float: left;
    box-sizing: border-box;
    height: 880px;
    display: flex;
    flex-direction: column;
`
const Onebox = styled.div`
    border: 1px solid red;
    height: 75px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 10px;
    justify-content: space-between;
`

const Onebox_img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid red;
`
const Twobox = styled.div`
    border: 1px solid red;
    height: 250px;
    margin-left: 10px;
    flex-direction: row;
    display: flex;
    gap: 8px;
`
const Twobox_img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Comment_box = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    margin-left: 10px;
    height: 60px;
    align-items: center;
    gap: 10px;

`
const Comment_img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Lastbox = styled.div`
    border: 1px solid red;
    height: 200px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`
const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-right: 8px;
`