import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __PostLogin } from "../../redux/modules/PostLogin";
import "./Login.css";

function Login() {
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const onsubmit = (e) => {
    if (nickname?.length >=2 && nickname?.length <=9) {
      if(regPass.test(password) === true) {
        e.preventDefault();
        dispatch(__PostLogin({nickname, password}))
      } else {
        alert("비밀번호를 확인해주세요")
        e.preventDefault();
      }
    } else {
      alert("아이디를 확인해주세요")
      e.preventDefault();
    }
  }

  const regPass = /^[0-9a-zA-Z!@#$%^&*]{8,20}$/;

  return (
    <div id="react-root">
      <section className="_9eogI E3X2T">
        <div></div>
        <main className="wG4fl  UDpcu " role="main">
          <article className="_4_yKc">
            <div style={{ "backgroundImage": "url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)" }} className="UYrFC _80tAB">
              <div className="nLFdg">
                <img
                  alt=""
                  className="aXOnh  _9CDVW"
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                />
                <img
                  alt=""
                  className="aXOnh JtrJi "
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                />
                <img
                  alt=""
                  className="aXOnh  "
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
                />
                <img
                  alt=""
                  className="aXOnh  "
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
                />
              </div>
            </div>
            <div className="rgFsT   ">
              <div className="gr27e  ">
                <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm     _22l1                                                            UU_bp                                             ">
                  <div
                    aria-disabled="false"
                    role="button"
                    tabIndex="0"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      style={{ margin: "34px" }}
                      alt="Instagram"
                      className="s4Iyt"
                      src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                      srcSet="/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png 2x"
                    />
                  </div>
                </div>
                <div className="EPjEi">
                  <form onSubmit={onsubmit} className="HmktE" id="loginForm">
                    <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm                                                              kEKum                                                ">
                      <div className="-MzZI">
                        <div className="_9GP1n   ">
                          <label className="f0n8F ">
                            <input
                              placeholder="닉네임을 입력해주세요"
                              aria-required="true"
                              maxLength="75"
                              name="username"
                              type="text"
                              className="_2hvTZ pexuQ zyHYP"
                              onChange={(e) => setNickname(e.target.value)}
                            />
                          </label>
                          <div className="i24fI"></div>
                        </div>
                      </div>
                      <div className="-MzZI">
                        <div className="_9GP1n   ">
                          <label className="f0n8F ">
                            <input
                              placeholder="비밀번호"
                              aria-required="true"
                              name="password"
                              type="password"
                              className="_2hvTZ pexuQ zyHYP"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </label>
                          <div className="i24fI"></div>
                        </div>
                      </div>
                      <div style={{ margin: "auto" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                        <button
                          style={{ margin: "10px", width: "150px", border: "1px solid white", borderRadius: "7px", height: "30px", backgroundColor: "#00AFFF", color: "white" }}
                          className="sqdOP  L3NKy   y3zKF     "
                          disabled=""
                        >
                          <div className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm                                                                                                              ">
                            로그인
                          </div>
                        </button>
                      </div>
                      <div className="K-1uj Z7p_S">
                        <div className="s311c t7mNY "></div>
                        <div className="_0tv-g">또는</div>
                        <div className="s311c t7mNY "></div>
                      </div>
                      <div style={{ "margin": "auto" }} className="             qF0y9          Igw0E     IwRSH      eGOV_       acqo5   _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
                        <button style={{ margin: "10px", width: "180px", border: "1px solid white", borderRadius: "7px", height: "30px" }} className="sqdOP yWX7d    y3zKF     " type="button">
                          <span className=" coreSpriteFacebookIcon AeB99"></span>
                          <span className="KPnG0">Facebook으로 로그인</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="gr27e">
                <div className="_7UhW9   xLCgt      MMzan    _0PwGv          uL8Hv         ">
                  <p className="izU2O ">
                    계정이 없으신가요?
                    <a
                      data-testid="sign-up-link"
                      href="/signup"
                      tabIndex="0"
                    >
                      <span className="_7UhW9   xLCgt        qyrsm      gtFbE       se6yk        ">
                        가입하기
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="APQi1">
                <p className="b_nGN">앱을 다운로드하세요.</p>
                <div className="iNy2T">
                  <a
                    aria-label="App Store에서 다운로드"
                    className="z1VUo"
                    href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                    tabIndex="0"
                    original_target="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginpage.badge&amp;mt=8&amp;vt=lo"
                    waprocessedid="gve4si"
                    waprocessedanchor="true"
                  >
                    <img
                      alt="App Store에서 다운로드"
                      className="Rt8TI "
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                      style={{ margin: "auto", display: "inline", width: "150px" }}
                    />
                    <div
                      mcafee_wa_ann='{"rep":0,"cat":[112,129],"ufg":2,"url":"https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginpage.badge&amp;mt=8&amp;vt=lo","dossierUrl":"https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginpage.badge&amp;mt=8&amp;vt=lo"}'
                      waprocessedid="gve4si"
                      style={{
                        cursor: "default",
                        display: "inline-block",
                        float: "none",
                        padding: "0px 0px 0px 4px",
                        position: "relative",
                        top: "2px",
                        "zIndex": "1",
                      }}
                    >
                      <div
                        id="0DE9E47C-871A-4F90-8440-B190C216800A_1"
                        className="mcafee_ok"
                        tabIndex="0"
                        style={{ outline: "none" }}
                      ></div>
                    </div>
                  </a>
                  <a
                    aria-label="Google Play에서 다운로드"
                    className="z1VUo"
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA3BBD5C2-82C2-4378-AE0A-60DBFAC1878D%26utm_content%3Dlo%26utm_medium%3Dbadge"
                    tabIndex="0"
                    original_target="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3dinstagramweb%26utm_campaign%3dloginpage%26ig_mid%3da3bbd5c2-82c2-4378-ae0a-60dbfac1878d%26utm_content%3dlo%26utm_medium%3dbadge"
                    waprocessedid="57718a"
                    waprocessedanchor="true"
                    style={{ "width": "100px", "marginRight": "50px" }}
                  >
                    <img
                      alt="Google Play에서 다운로드"
                      className="Rt8TI "
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                      style={{ display: "inline", width: "150px" }}
                    />
                    <div
                      mcafee_wa_ann='{"rep":0,"cat":[148],"ufg":8,"url":"https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3dinstagramweb%26utm_campaign%3dloginpage%26ig_mid%3da3bbd5c2-82c2-4378-ae0a-60dbfac1878d%26utm_content%3dlo%26utm_medium%3dbadge","dossierUrl":"https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3dinstagramweb%26utm_campaign%3dloginpage%26ig_mid%3da3bbd5c2-82c2-4378-ae0a-60dbfac1878d%26utm_content%3dlo%26utm_medium%3dbadge"}'
                      waprocessedid="57718a"
                      style={{
                        cursor: "default",
                        display: "inline-block",
                        float: "none",
                        padding: "0px 0px 0px 4px",
                        position: "relative",
                        top: "2px",
                        "zIndex": "1",
                      }}
                    >
                      <div
                        id="0DE9E47C-871A-4F90-8440-B190C216800A_2"
                        className="mcafee_ok"
                        tabIndex="0"
                        style={{ outline: "none" }}
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>

        <footer className="Zx5PI  burfB vfoLd " role="contentinfo" style={{ "margin": "50px", "display": "flex", "justifyContent": "center", "alignItems": "center", "fontSize": "12px" }}>
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
      </section>
    </div>

  );
}

export default Login;
