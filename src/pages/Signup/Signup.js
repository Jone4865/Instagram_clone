import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __PostSignup } from "../../redux/modules/PostSignup";
import "./Signup.css";

function Signup() {
    const [nickname, setNickname] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    const dispatch = useDispatch();
    const onsubmit = (e) => {
        if (regNick.test(nickname) === true || regNick2.test(nickname) === true) {
            if (name?.length >=2 && name?.length <=9 ) {
                if (regPass.test(password) === true && password === password2) {
                    dispatch(__PostSignup({nickname, name, password}))
                    e.preventDefault();
                } else {
                    alert("비밀번호를 확인해주세요")
                    e.preventDefault();
                }
            } else {
                alert("이름을 확인해주세요")
                e.preventDefault();
            }
        } else {
            alert("휴대폰 번호 또는 이메일 주소를 확인해주세요")
            e.preventDefault();
        }
    }

    const regNick = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regNick2 = /^\d{10,11}$/;
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
                                            <img alt="Instagram" className="s4Iyt" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" srcSet="/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png 2x" />
                                        </div>
                                    </div>
                                    <div className="P8adC">
                                        <form className="XFYOY" onSubmit={onsubmit}>
                                            <h2 className="vvzhL ">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                                            <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                                                <button style={{ margin: "auto", width: "300px", border: "1px solid white", borderRadius: "7px", height: "30px", backgroundColor: "#00AFFF", color: "white" }} className="sqdOP  L3NKy   y3zKF     " type="button">
                                                    <span className="coreSpriteFacebookIconInverted cneKx">
                                                    </span>Facebook으로 로그인</button>
                                            </div>
                                            <div className="K-1uj hKTMS">
                                                <div className="s311c t7mNY ">
                                                </div>
                                                <div className="_0tv-g">또는</div>
                                                <div className="s311c t7mNY ">
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setNickname(e.target.value)} placeholder="휴대폰 번호 또는 이메일 주소" aria-required="true" autoCapitalize="off" autoComplete="tel" autoCorrect="off" name="emailOrPhone" type="text" className="_2hvTZ pexuQ zyHYP" />
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setName(e.target.value)} placeholder="성명 (2~9자)" aria-required="false" autoCapitalize="sentences" autoCorrect="off" name="fullName" type="text" className="_2hvTZ pexuQ zyHYP"/>
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 (8~20자)" aria-required="true" autoCapitalize="off" autoComplete="new-password" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP"/>
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="WZdjL">
                                                <div className="_9GP1n   ">
                                                    <label className="f0n8F ">
                                                        <input onChange={(e) => setPassword2(e.target.value)} placeholder="비밀번호 재입력" aria-required="true" autoCapitalize="off" autoComplete="new-password" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP"/>
                                                    </label>
                                                    <div className="i24fI">
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ZGwn1">서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <a href="https://www.facebook.com/help/instagram/261704639352628" tabIndex="0" target="_blank" waprocessedanchor="true">더 알아보기</a>
                                            </p>
                                            <div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                                                    <button style={{ margin: "auto", width: "300px", border: "1px solid white", borderRadius: "7px", height: "30px", backgroundColor: "#00AFFF", color: "white" }} className="sqdOP  L3NKy   y3zKF     ">가입</button>
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
                                    <div className="iNy2T" style={{ "margin": "5px" }}>
                                        <a aria-label="App Store에서 다운로드" className="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabIndex="0" original_target="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginpage.badge&amp;mt=8&amp;vt=lo" waprocessedid="pqwpec" waprocessedanchor="true">
                                            <img style={{ display: "inline", width: "120px", margin: "auto 10px auto auto" }} alt="App Store에서 다운로드" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
                                        </a>
                                        <a aria-label="Google Play에서 다운로드" className="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA3BBD5C2-82C2-4378-AE0A-60DBFAC1878D%26utm_content%3Dlo%26utm_medium%3Dbadge" tabIndex="0" original_target="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3dinstagramweb%26utm_campaign%3dloginpage%26ig_mid%3da3bbd5c2-82c2-4378-ae0a-60dbfac1878d%26utm_content%3dlo%26utm_medium%3dbadge" waprocessedid="pmhoia" waprocessedanchor="true">
                                            <img style={{ display: "inline", width: "120px", margin: "auto auto auto 10px" }} alt="Google Play에서 다운로드" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
                                        </a>
                                    </div>
                                </div>
                                <footer className="Zx5PI  burfB vfoLd " role="contentinfo" style={{ "margin": "auto", "display": "flex", "justifyContent": "center", "alignItems": "center", "fontSize": "12px" }}>
                                    <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm               KokQV                                                                                               ">
                                        <div style={{ "margin": "auto", "color": "gray", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm                                                              kEKum                                                ">
                                            <div style={{ "margin": "auto", "color": "gray", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="             qF0y9          Igw0E     IwRSH        YBx95   ybXk5     _4EzTm  YlhBV                                                                                                            ">
                                                <div style={{ "margin": "10px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://about.facebook.com/meta"
                                                        rel="nofollow noopener noreferrer"
                                                        target="_blank"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            Meta
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://about.instagram.com/"
                                                        rel="nofollow noopener noreferrer"
                                                        target="_blank"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            소개
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://about.instagram.com/blog/"
                                                        rel="nofollow noopener noreferrer"
                                                        target="_blank"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            블로그
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/about/jobs/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            채용 정보
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://help.instagram.com/"
                                                        rel="nofollow noopener noreferrer"
                                                        target="_blank"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            도움말
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://developers.facebook.com/docs/instagram"
                                                        rel="nofollow noopener noreferrer"
                                                        target="_blank"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            API
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/legal/privacy/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            개인정보처리방침
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/legal/terms/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            약관
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/directory/profiles/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            인기 계정
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/directory/hashtags/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            해시태그
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/explore/locations/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            위치
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/web/lite/">
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            Instagram Lite
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style={{ "margin": "5px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a
                                                        href="https://www.facebook.com/help/instagram/261704639352628"
                                                        waprocessedanchor="true"
                                                    >
                                                        <div className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            연락처 업로드 &amp; 비사용자
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div style={{ "margin": "auto", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="             qF0y9          Igw0E     IwRSH        YBx95   ybXk5     _4EzTm  YlhBV                                                                                                            ">
                                                <div style={{ "margin": "10px" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/topics/dance-and-performance/">
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            댄스
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/topics/food-and-drink/">
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            식음료
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/topics/home-and-garden/">
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            집 및 정원
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/topics/music/">
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            음악
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                 soMvl                  JI_ht                                                                      ">
                                                    <a href="/topics/visual-arts/">
                                                        <div style={{ "margin": "5px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                            시각 예술
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ "margin": "auto", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="             qF0y9          Igw0E     IwRSH        YBx95   ybXk5     _4EzTm     _22l1                                                      _49XvD                                                   ">
                                            <div style={{ "margin": "auto", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="_7UhW9  PIoXz       MMzan   KV-D4           uL8Hv         ">
                                                <span style={{ "margin": "auto", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }} className="_3G4x7   RFk-t bwz9f ">
                                                    <div className="TQUPK">
                                                        <span style={{ "marginRight": "20px" }}>한국어</span>
                                                        <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm                     WKY0a                                                                                         ">
                                                            <span
                                                                style={{
                                                                    display: "inline-block",
                                                                    transform: "rotate(180deg)",
                                                                }}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <select aria-label="표시 언어 변경" className="hztqj">
                                                        <option value="ko">한국어</option>
                                                        <option value="af">Afrikaans</option>
                                                        <option value="cs">Čeština</option>
                                                        <option value="da">Dansk</option>
                                                        <option value="de">Deutsch</option>
                                                        <option value="el">Ελληνικά</option>
                                                        <option value="en">English</option>
                                                        <option value="en-gb">English (UK)</option>
                                                        <option value="es">Español (España)</option>
                                                        <option value="es-la">Español</option>
                                                        <option value="fi">Suomi</option>
                                                        <option value="fr">Français</option>
                                                        <option value="id">Bahasa Indonesia</option>
                                                        <option value="it">Italiano</option>
                                                        <option value="ja">日本語</option>
                                                        <option value="ms">Bahasa Melayu</option>
                                                        <option value="nb">Norsk</option>
                                                        <option value="nl">Nederlands</option>
                                                        <option value="pl">Polski</option>
                                                        <option value="pt-br">Português (Brasil)</option>
                                                        <option value="pt">Português (Portugal)</option>
                                                        <option value="ru">Русский</option>
                                                        <option value="sv">Svenska</option>
                                                        <option value="th">ภาษาไทย</option>
                                                        <option value="tl">Filipino</option>
                                                        <option value="tr">Türkçe</option>
                                                        <option value="zh-cn">中文(简体)</option>
                                                        <option value="zh-tw">中文(台灣)</option>
                                                        <option value="bn">বাংলা</option>
                                                        <option value="gu">ગુજરાતી</option>
                                                        <option value="hi">हिन्दी</option>
                                                        <option value="hr">Hrvatski</option>
                                                        <option value="hu">Magyar</option>
                                                        <option value="kn">ಕನ್ನಡ</option>
                                                        <option value="ml">മലയാളം</option>
                                                        <option value="mr">मराठी</option>
                                                        <option value="ne">नेपाली</option>
                                                        <option value="pa">ਪੰਜਾਬੀ</option>
                                                        <option value="si">සිංහල</option>
                                                        <option value="sk">Slovenčina</option>
                                                        <option value="ta">தமிழ்</option>
                                                        <option value="te">తెలుగు</option>
                                                        <option value="vi">Tiếng Việt</option>
                                                        <option value="zh-hk">中文(香港)</option>
                                                        <option value="bg">Български</option>
                                                        <option value="fr-ca">Français (Canada)</option>
                                                        <option value="ro">Română</option>
                                                        <option value="sr">Српски</option>
                                                        <option value="uk">Українська</option>
                                                    </select>
                                                </span>
                                            </div>
                                            <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm                        _5VUwz                                                                                      ">
                                                <div style={{ "marginLeft": "10px" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                                                    © 2022 Instagram from Meta
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </main>
                </section></div>


        </div>
    );
}

export default Signup;