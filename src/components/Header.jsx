import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from 'react-icons/md';
import ImageUpload from "./ImageUpload";


function Header() {
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);

    //게시물 작성
    const [addlist, setAddlist] = useState({
        postimg: "",
        contents: ""
    });

    return (
        <Acum>
            <Box>
                <p onClick={() => { setModal(!modal) }}>
                    <Icon>
                        <FaRegHeart />
                    </Icon>
                </p>
                {
                    modal === true ? (<>
                        <ModalBackground onClick={() => { setModal(!modal) }}>
                            <ModalBox onClick={(event) => { event.stopPropagation() }}>
                                <Head>
                                    <Icon ><MdOutlineArrowBack onClick={() => { setModal(!modal) }} /></Icon>
                                    <h4>새 게시물 생성하기</h4>
                                    <h4 style={{ color: "blue" }}>공유하기</h4>
                                </Head>
                                <div style={{ display: "flex" }}>
                                    <Left>
                                        <ImageUpload />
                                    </Left>
                                    <Right>
                                        <Right_first>
                                            <Right_firstImg src={null} />
                                            <p>asd</p>
                                        </Right_first>
                                        <Right_two>
                                            <input/>
                                        </Right_two>
                                    </Right>
                                </div>
                            </ModalBox>
                        </ModalBackground>
                    </>) : null
                }
            </Box>
        </Acum>
    )
}

const Acum = styled.div`
    align-items: center;
    background-color: #eee;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
`
const Box = styled.div`
    align-items: center;
    border-bottom: 1px solid rgb(var(--ig-elevated-separator));
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: var(--desktop-nav-height);
    position: fixed;
    top: 0;
    transition: height var(--desktop-nav-anim-duration) ease-in-out;
    width: 100%;
    background-color: aliceblue;
    height: 100px;
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
    width: 60%;
    height: 80%;
    max-width: 1500px;
    min-width: 800px;
`;

const Icon = styled.div`
    font-size: 40px;
`

const Head = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border-radius: 8px;
        
    }
`

const Left = styled.div`
    width: 60%;
    height: 774px;
    border: 1px solid red;
`

const Right = styled.div`
    width: 40%;
    height: 100%;
    border: 1px solid red;
`

const Right_first = styled.div`
height: 55px;
display: flex;
flex-direction: row;
align-items: center;
gap:10px;
padding-left:10px;
border:1px solid red;
`

const Right_firstImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: black;
`
const Right_two =styled.div`
    border: 1px solid red;
    height: 100px;
    padding: 10px 15px 15px 10px;

    input {
        height: 600px;
        width: 100%;
        border-radius: 12px;
    
    }
`

export default Header