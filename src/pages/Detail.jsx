import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function Detail() {

    const navigate = useNavigate();
    const { postId } = useParams();
    const [detailList, setDetailList] = useState({});
    const [comments, setComments] = useState({})

    //상세보기 모달
    const [detailModal, setDetailModal] = useState(true);

    //상세게시물 가져오기
    // const getAxiosDetailData = async () => {
    //     const axiosData = await axios.get(`http://localhost:3001/posts/${postId}`)

    //     setDetailList(axiosData.data)
    // }
    // useEffect(() => {
    //     getAxiosDetailData();
    // }, [])


    //삭제 핸들러
    const deleteHandler = async (ev) => {
        ev.preventDefault();
        await axios.delete(`http://localhost:3001/posts/${postId}`)
    }

    // 댓글리스트 가제요기
    const getCommentList = async () => {
        const axiosComment = await axios.get(`http://localhost:3001/comments`)
        setComments(axios.data)
        console.log(axiosComment.data)
    }
    useEffect(() => {
        getCommentList();
    }, [])

    return (
        <div>
            <Header />
            {
                detailModal === true ? (<>
                    <DatailModalBackground onClick={() => {navigate('/')}}>
                        <DatailModalBox onClick={(event) => { event.stopPropagation()}}>
                            <div>
                                <Left src="https://clone-img-upload.s3.ap-northeast-2.amazonaws.com/아이유 메인 이밎.jpg">
                                </Left>
                                <Right>
                                    <Onebox>
                                        <Onebox_img src="https://clone-img-upload.s3.ap-northeast-2.amazonaws.com/아이유3.jpg"/>
                                        <h5 style={{marginTop:"15px"}}>닉네임임</h5>
                                    </Onebox>
                                    <Twobox>
                                        <Twobox_img src="https://clone-img-upload.s3.ap-northeast-2.amazonaws.com/아이유3.jpg"/>
                                        <h5 style={{marginTop:"15px"}}>닉네임임</h5>
                                        <p style={{margin:"12px"}}>asdadad </p>
                                    </Twobox>
                                    <Comment_box>
                                        <Comment_img src="https://clone-img-upload.s3.ap-northeast-2.amazonaws.com/댓글 이미지.png"/>
                                        <h5 style={{marginTop:"15px"}}>댓글작성자 닉네임</h5>
                                        <p>댓글 내용</p>
                                    </Comment_box>
                                    <Lastbox>

                                    </Lastbox>
                                </Right>
                            </div>

                        </DatailModalBox>
                    </DatailModalBackground>
                </>) : null
            }
        </div>
    )
}

export default Detail

///상세 보기 모달
const DatailModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`


const DatailModalBox = styled.div`
    background-color: white;
    width: 1500px;
    height: 880px;
    max-width: 2000px;
    min-width: 200px;
`;
/////

const Left = styled.img`
    width: 65%;
    float: left;
    padding-top: 10px;
    padding-left: 10px;
    height: 860px;
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
    float: left;
    margin-left: 10px;
    gap: 10px;
`

const Onebox_img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
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
const Comment_img =styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Lastbox = styled.div`
    border: 1px solid red;
    height: 200px;
    margin-left: 10px;
    display: flex;
`