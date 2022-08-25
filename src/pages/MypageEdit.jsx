import React, { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { __getMycontent } from "../redux/modules/GetMypage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function MypageEdit() {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const myprofile = useSelector((state) => state.getmylist.data.user);
    console.log(myprofile)

    useEffect(() => {
        dispatch(__getMycontent())
    }, [])

    //셀렉트 값 받아오기
    const [selected, setSelected] = useState("");

    const [attachment, setAttachment] = useState("");

    const fileInput = useRef(null);
    const name_Ref = useRef();
    const nickname_Ref = useRef();
    const introduce_Ref = useRef();
    const email_Ref = useRef();
    const phone_Ref = useRef();
    const gender_Ref = useRef(selected);


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



    const handleSelect = (e) => {
        setSelected(e.target.value);
      };

    //내 정보 수정 핸들러
    const editMyprofieHadler = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append('profile', fileInput.current.files[0])
        formData.append('name', name_Ref.current.value)
        formData.append('nickname', nickname_Ref.current.value)
        formData.append('introduce', introduce_Ref.current.value)
        formData.append('email', email_Ref.current.value)
        formData.append('phone', phone_Ref.current.value)
        formData.append('gender', selected)
        
        
        console.log(name_Ref.current.value)
        console.log(nickname_Ref.current.value)
        console.log(introduce_Ref.current.value)
        console.log(email_Ref.current.value)
        console.log(phone_Ref.current.value)
        console.log(selected) 

        await axios.put(process.env.REACT_APP_SURVER + `/api/auth/profile`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": `multipart/form-data`,
            },
        })
        .then(res => {
            const data = res.data.massge == true  
            const msg = res.data.message

            if (data) {
                alert('정보 수정 완료했습니다')
                navigate(`/`)
                console.log(res)
            } else {
                alert('수정 실패했습니다')
                navigate(`/mypage`)
                console.log(res)
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
                    <FirstBox>
                        <FirstBoxImg src={
                            attachment
                                ? attachment
                                : "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
                        }
                            alt="업로드할 이미지" />
                        <div>
                            <p>{myprofile.nickname}</p>
                            <form encType="multipart/form-data">
                                <input
                                    type="file"
                                    placeholder="게시물 이미지"
                                    name="profile"
                                    ref={fileInput}
                                    onChange={selectImg}
                                />
                            </form>
                        </div>
                    </FirstBox>

                    <Qwe>
                        <form>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>이름</p>
                                <input
                                    name="name"
                                    maxLength={2220}
                                    placeholder="문구 입력"
                                    ref={name_Ref}
                                />
                            </TwoBox>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>nickname</p>
                                <input
                                    name="nickname"
                                    maxLength={2220}
                                    placeholder="닉네임"
                                    ref={nickname_Ref}
                                />
                            </TwoBox>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>자기소개</p>
                                <input
                                    name="introduce"
                                    maxLength={2220}
                                    placeholder="자기 소개"
                                    ref={introduce_Ref}
                                />
                            </TwoBox>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>이메일</p>
                                <input
                                    name="email"
                                    maxLength={2220}
                                    placeholder="이메일"
                                    ref={email_Ref}
                                />
                            </TwoBox>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>전화번호</p>
                                <input
                                    name="phone"
                                    maxLength={2220}
                                    placeholder="전화번호"
                                    ref={phone_Ref}
                                />
                            </TwoBox>
                            <TwoBox>
                                <p style={{ marginRight: "15px" }}>성별</p>
                                <select
                                    ref={gender_Ref}
                                    onChange={handleSelect}
                                     value={selected}
                                     name="gender"
                                     >
                                    <option>남자</option>
                                    <option>여자</option>
                                    
                                </select>
                            </TwoBox>
                        </form>

                        <TwoBox>
                            <button onClick={(ev) => { editMyprofieHadler(ev) }}>제출하기</button>
                        </TwoBox>
                    </Qwe>

                </Bigbox>
            </Allbox>
        </>

    )
}

const Qwe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Allbox = styled.div`
    max-width: 2000px;
    min-width: 100px;
    width : 100%;
    height: 882px;
    background-color: #eeeeee65;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bigbox = styled.div`
    display: flex;
    border: 2px solid #eee;
    width: 45%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
    flex-direction: column;
`

const FirstBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;

    p {
        margin-left: 30px;
        margin-top: 10px;
        font-size: 20px;
    }
`
const FirstBoxImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: black;
    margin-right: 20px;
`
const TwoBox = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items:center;
    justify-content: center;
    
`


export default MypageEdit;


