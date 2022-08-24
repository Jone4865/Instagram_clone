import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import { useRef } from "react";

function DetailEdit() {

    const { postId } = useParams();

    const [editList, setEditList] = useState({});

    const fileInput = useRef();
    const contents_ref = useRef(null);

    const [attachment, setAttachment] = useState("");

    //해당 게시물 가져오기
    const getAxiosDetaileditData = async () => {
        const token = localStorage.getItem("token");
        const axiosData = await axios.get(process.env.REACT_APP_SURVER + `/api/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setEditList(axiosData.data.data)
        console.log(axiosData.data.data)
    }
    useEffect(() => {
        getAxiosDetaileditData();
    }, [])



    //사진 미리보기 기능
    const selectImg = (e) => {
        const reader = new FileReader();
        const theFile = fileInput.current.files[0];
        reader.readAsDataURL(theFile);
        reader.onloadend = (finishiedEvent) => {
          const {
            currentTarget: { result },
          } = finishiedEvent;
          setAttachment(result);
        };
      };



    //게시물 수정 핸들러
    const EditListHandler = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem("token");

        console.log(fileInput.current.files[0])

        const formData = new FormData();
        formData.append('postImg', fileInput.current.files[0])
        formData.append('content', contents_ref.current.value)

        console.log(contents_ref.current.value)

        await axios.put(process.env.REACT_APP_SURVER + `/api/post/update/${postId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": `multipart/form-data`,
            },
        })
            .then(res => {
                const data = res.data.success;
                if (data) {
                    alert('이미지가 등록되었습니다.')
                    console.log(data)

                } else{
                    alert('이미지에 실패했습니다')
                }
            }).catch(err => {
                console.log(err)
            }
            )
    }

    return (
        <>
            <Header />
            <Allbox>
                <Bigbox>
                    <Left>
                        <LeftImg src={editList.postimage} />
                        <form encType="multipart/form-data">
                            <input
                                type="file"
                                placeholder="게시물 이미지"
                                name="postImg"
                                ref={fileInput}
                                onChange={selectImg}
                            />
                        </form>
                        
                    </Left>
                    <Right>
                        <form>
                            <textarea
                                name="content"
                                maxLength={2200}
                                placeholder={editList.content}
                                ref={contents_ref}
                            />
                        </form>
                        <div>asd</div>
                    </Right>
                    <button onClick={(ev)=>{EditListHandler(ev)}}>수정하기</button>
                </Bigbox>
            </Allbox>
        </>

    )
}

const Allbox = styled.div`
    max-width: 2000px;
    min-width: 100px;
    width : 100%;
    height: 882px;
    background-color: #f5eeeed5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bigbox = styled.div`
    display: flex;
    border: 2px solid #eee;
    justify-content: space-between;
    width: 75%;
    height: 700px;
    margin-bottom: 50px;
    background-color: white;
    border-radius: 20px;
`
const Left = styled.div`
    height: 100%;
    border: 2px solid #eeeeee97;
    width: 75%;
    padding: 30px;

    button {
        height: 30px;
    }
`

const LeftImg = styled.img`
    background-color: black;
    height: 600px;
    width: 100%;
    border-radius: 30px;
`

const Right = styled.div`
   border: 2px solid #eee;
   width: 35%;
`

export default DetailEdit;