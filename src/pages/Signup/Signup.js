import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __PostSignup } from "../../redux/modules/PostSignup";

function Signup() {
    const [nickname, setNickname] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const dispatch = useDispatch();
    const onsubmit = (e) => {
        if (nickname?.length >= 2 && nickname?.length <= 9) {
            if (name === '') {
                alert("이름을 확인해주세요")
            } else {
                if (regPass.test(password) === true && password === password2) {
                    dispatch(__PostSignup({ nickname, name, password }))
                    e.preventDefault();
                } else {
                    alert("비밀번호를 확인해주세요")
                    e.preventDefault();
                }
            }
        } else {
            alert("닉네임을 확인해주세요")
            e.preventDefault();
        }
    }

    const regPass = /^[0-9a-zA-Z!@#$%^&*]{8,20}$/;

    return (
        <div className="">
            <div id="react-root">
                <section className="_9eogI E3X2T">
                    <div>
                    </div>
                    <main className="wG4fl  UDpcu " role="main">
                        <div className="             qF0y9          Igw0E   rBNOH          YBx95   ybXk5    vwCYk              MGky5                                                              i0EQd                                   " style={{ "minHeight": "100%" }}>
                            <div style={{ "margin": "40px auto auto auto" }} className="rgFsT   ">
                                <div className="gr27e  ">
                                    <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                                                            UU_bp                                             ">
                                        <div aria-disabled="false" role="button" tabIndex="0" style={{ "cursor": "pointer", "margin": "20px" }}>
                                            <img style={{ "marginLeft": "65px" }} alt="Instagram" className="s4Iyt" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" srcSet="/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png 2x" />
                                        </div>
                                    </div>
                                    <div className="P8adC">
                                        <form className="XFYOY" onSubmit={onsubmit}>
                                            <h2 className="vvzhL ">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                                            <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                                                <button style={{ margin: "auto", width: "300px", border: "1px solid white", borderRadius: "7px", height: "30px", backgroundColor: "#00AFFF", color: "white", marginLeft: "25px" }} className="sqdOP  L3NKy   y3zKF     " type="button">
                                                    <span className="coreSpriteFacebookIconInverted cneKx">
                                                    </span>Facebook으로 로그인</button>
                                            </div>
                                            <div className="K-1uj hKTMS">
                                                <div className="_0tv-g" style={{ "marginLeft": "120px" }}>또는</div>
                                                <div className="s311c t7mNY ">
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력해주세요 (2~9자)" aria-required="true" autoCapitalize="off" autoComplete="tel" autoCorrect="off" name="emailOrPhone" type="text" className="_2hvTZ pexuQ zyHYP" />
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setName(e.target.value)} placeholder="성명" aria-required="false" autoCapitalize="sentences" autoCorrect="off" name="fullName" type="text" className="_2hvTZ pexuQ zyHYP" />
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 (8~20자)" aria-required="true" autoCapitalize="off" autoComplete="new-password" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP" />
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setPassword2(e.target.value)} placeholder="비밀번호 재입력" aria-required="true" autoCapitalize="off" autoComplete="new-password" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP" />
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ZGwn1">서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <a href="https://www.facebook.com/help/instagram/261704639352628" tabIndex="0" target="_blank" waprocessedanchor="true">더 알아보기</a>
                                            </p>
                                            <div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                                                    <button style={{ marginLeft: "25px", width: "300px", border: "1px solid white", borderRadius: "7px", height: "30px", backgroundColor: "#00AFFF", color: "white" }} className="sqdOP  L3NKy   y3zKF     ">가입</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="gr27e">
                                    <p className="izU2O ">계정이 있으신가요? <a data-testid="log-in-link" href="/login" tabIndex="0">로그인</a>
                                    </p>
                                </div>
                                <div className="APQi1">
                                    <p className="b_nGN">앱을 다운로드하세요.</p>
                                    <div className="iNy2T" style={{ "marginLeft": "40px" }}>
                                        <a aria-label="App Store에서 다운로드" className="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabIndex="0" original_target="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginpage.badge&amp;mt=8&amp;vt=lo" waprocessedid="pqwpec" waprocessedanchor="true">
                                            <img style={{ display: "inline", width: "120px", margin: "auto 10px auto auto" }} alt="App Store에서 다운로드" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
                                        </a>
                                        <a aria-label="Google Play에서 다운로드" className="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA3BBD5C2-82C2-4378-AE0A-60DBFAC1878D%26utm_content%3Dlo%26utm_medium%3Dbadge" tabIndex="0" original_target="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3dinstagramweb%26utm_campaign%3dloginpage%26ig_mid%3da3bbd5c2-82c2-4378-ae0a-60dbfac1878d%26utm_content%3dlo%26utm_medium%3dbadge" waprocessedid="pmhoia" waprocessedanchor="true">
                                            <img style={{ display: "inline", width: "120px", margin: "auto auto auto 10px" }} alt="Google Play에서 다운로드" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section></div>


        </div>
    );
}

export default Signup;