import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getMycontent } from "../../redux/modules/GetMypage";

function Mypage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getMycontent())
    }, [])

    const My = useSelector((state) => state.getmylist.data.user);
    const MyList = useSelector((state) => state.getmylist.data.posts);

    return (
        <div className="_a3wf system-fonts--body segoe">
            <div id="mount_0_0_sy">
                <span id="ssrb_root_start" style={{ "display": "none" }}>
                </span>
                <div>
                    <div className="">
                        <div className="bdao358l om3e55n1 g4tp4svg">
                            <span id="ssrb_top_nav_start" style={{ "display": "none" }}>
                            </span>
                            <span id="ssrb_top_nav_end" style={{ "display": "none" }}>
                            </span>
                            <div className="bdao358l om3e55n1 g4tp4svg">
                                <div className="g4tp4svg om3e55n1 cqf1kptm alzwoclg">
                                    <div className="alzwoclg cqf1kptm om3e55n1">
                                        <div className="alzwoclg cqf1kptm om3e55n1 kyj84mfa cofpoq2j fxq29kog">
                                            <div className="alzwoclg cqf1kptm p1t2w4gn fawcizw8 om3e55n1 g4tp4svg">
                                                <div>
                                                    <div>
                                                        <form encType="multipart/form-data" method="POST" role="presentation">
                                                            <input accept="image/jpeg" className="_ac69" type="file" />
                                                        </form>
                                                    </div>
                                                    <section className="_a997 _a998">
                                                        <div>
                                                        </div>
                                                        <main className="_a993 _a995" role="main">
                                                            <div className="_aa_y _aa_z _aa_-">
                                                                <header className="_aa_h" style={{ "width": "70%", "display": "flex", "margin": "auto", "padding": "20px" }}>
                                                                    <div className="_aa_j">
                                                                        <div className="_aa_k">
                                                                            <div className="_aadm">

                                                                                <div>
                                                                                    <form encType="multipart/form-data" method="POST" role="presentation">
                                                                                        <input accept="image/jpeg,image/png" className="_ac69" type="file" />
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <section className="_aa_l" style={{ "display": "flex", "margin": "auto" }}>
                                                                        <div className="_aa_m" style={{ "display": "flex", "flexDirection": "row" }}>
                                                                            <img src={My.image} style={{ "width": "150px", "height": "150px", "borderRadius": "100%" }} />
                                                                            <h2 className="_aacl _aacs _aact _aacx _aada" tabIndex="-1" style={{ "fontSize": "23px", "marginLeft": "100px", "marginTop": "20px", "fontWeight": "unset" }}>
                                                                                bel1__94</h2>
                                                                            <div className="_ab8w  _ab94 _ab99 _ab9f _ab9k _ab9q  _abb3 _abcm" >
                                                                                <div className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9o _abcm" style={{ "marginTop": "20px", "marginLeft": "20px", "borderRadius": "5px", "border": "1px solid gray", "height": "30px", "minWidth": "100px" }}>
                                                                                    <a className="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn bdao358l fsf7x5fv rse6dlih s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk srn514ro oxkhqvkx rl78xhln nch0832m cr00lzj9 rn8ck1ys s3jn8y49 icdlwmnq _acan _acap _acat _acaw _a6hd" href="/accounts/edit/" role="link" tabIndex="0">
                                                                                        프로필 편집</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <ul className="_aa_7">
                                                                            <li className="_aa_5">
                                                                                <p className="_aacl _aacp _aacu _aacx _aad6 _aade">
                                                                                    게시물 <span className="_ac2a">
                                                                                        17</span>
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="_aa_c">
                                                                            <span className="_aacl _aacp _aacw _adda _aacx _aad7 _aade" style={{ "fontWeight": "bold" }}>
                                                                                채종원</span>
                                                                            <br />
                                                                        </div> */}
                                                                    </section>
                                                                </header>

                                                                <div className="_aa-g _ac_s" role="tablist" style={{ "display": "flex", "margin": "30px 0px 30px 48%" }}>
                                                                    <a aria-selected="true" className="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn bdao358l fsf7x5fv rse6dlih s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk srn514ro oxkhqvkx rl78xhln nch0832m cr00lzj9 rn8ck1ys s3jn8y49 icdlwmnq _aa-z _aa-- _ac_u _a6hd" href="/bel1__94/" role="link" tabIndex="0">
                                                                        <div className="_ab8w  _ab94 _ab97 _ab9f _ab9k _ab9p _abcm">
                                                                            <svg aria-label="" className="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
                                                                                <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3">
                                                                                </rect>
                                                                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21">
                                                                                </line>
                                                                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21">
                                                                                </line>
                                                                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015">
                                                                                </line>
                                                                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985">
                                                                                </line>
                                                                            </svg>
                                                                            <span className="_ac-g">
                                                                                게시물</span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <hr style={{ "height": "1px", "width": "95%" }} />
                                                                <div className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9o _abcm">
                                                                    <article className="_aayp">
                                                                        <div>
                                                                            <div style={{ "position": "relative", "display": "flex", "paddingBottom": "0px", "paddingTop": "0px" }}>
                                                                                <div className="_ac7v _aang" style={{ "display": "flex", "width": "70%", "margin": "auto", "flexWrap": "wrap", "flexDirection": "row" }}>
                                                                                    {/* //포스팅구역 */}
                                                                                    {MyList?.map((list) => (
                                                                                        <div key={list.id} className="_aabd _aa8k _aanf" style={{ "maxWidth": "30%", "minWidth": "25%", "margin": "10px" }}>
                                                                                        <a className="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn bdao358l fsf7x5fv rse6dlih s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk srn514ro oxkhqvkx rl78xhln nch0832m cr00lzj9 rn8ck1ys s3jn8y49 icdlwmnq _a6hd" href="/p/CeXzwCor-K8/" role="link" tabIndex="0">
                                                                                            <div className="_aagu">
                                                                                                <div className="_aagv">
                                                                                                    <img crossOrigin="anonymous" className="_aagt" src={list.image} style={{ "objectFit": "cover" }} />
                                                                                                </div>
                                                                                                <div className="_aagw">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="_aatp">
                                                                                                <div className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _abak _abb0 _abbi _abb- _abcm">
                                                                                                    <svg aria-label="슬라이드" className="_ab6-" color="#ffffff" fill="#ffffff" height="22" role="img" viewBox="0 0 48 48" width="22">
                                                                                                        <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>

                                                                                    ))}

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </div>
                                                        </main>
                                                        <nav className="_acbh _acbi" >
                                                            <div className=" _acbm">
                                                            </div>
                                                            <div className="_acc1 _acc3" style={{ "display": "flex" }}>
                                                                <div className="_acum" style={{ "backgroundColor": "white", "padding": "10px", "borderBottom": "2px solid whitesmoke" }}>
                                                                    <div className="_acun" >
                                                                        <div className="_acup">
                                                                            <div className="_ab8w  _ab94 _ab99 _ab9f _ab9k _ab9p _abcm">
                                                                                <a className="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn bdao358l fsf7x5fv rse6dlih s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk srn514ro oxkhqvkx rl78xhln nch0832m cr00lzj9 rn8ck1ys s3jn8y49 icdlwmnq _a6hd" href="/" role="link" tabIndex="0">
                                                                                    <div className="_ab8w  _ab94 _ab97 _ab9f _ab9k _ab9p _abcm">
                                                                                        <div className="_aagx">
                                                                                            <svg aria-label="Instagram" className="_ab6-" color="#262626" fill="#262626" height="29" role="img" viewBox="32 4 113 32" width="103">
                                                                                                <path clipRule="evenodd" d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z" fill="currentColor" fillRule="evenodd">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>

                                                                            <div className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p _abcm">
                                                                                <div className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _abbz  _abch _abcm">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_aawf _aawg _aexm">
                                                                            <div className="_abn-">
                                                                                <input placeholder="검색" type="text" style={{ "display": "flex", "marginTop": "3px", "borderRadius": "10px", "width": "260px", "height": "25px", "backgroundColor": "whitesmoke", "border": "0px", "borderLadius": "3px", "padding": "5px", "paddingLeft": "20px" }} />
                                                                            </div>
                                                                        </div>

                                                                        <div className="_acuq _acur">
                                                                            <div className="_acus">
                                                                                <div className="_acut">
                                                                                    <div className="_acrd">
                                                                                        <a className="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn bdao358l fsf7x5fv rse6dlih s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk srn514ro oxkhqvkx rl78xhln nch0832m cr00lzj9 rn8ck1ys s3jn8y49 icdlwmnq _a6hd" href="/" role="link" tabIndex="0">
                                                                                            <svg aria-label="홈" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                                                                <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </a>
                                                                                        <div className="">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_acut">
                                                                                    <div className="_acub">
                                                                                        <button className="_abl- _abm2" type="button">
                                                                                            <div className="_abm0">
                                                                                                <svg aria-label="새로운 게시물" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                                                                    <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                                                    </path>
                                                                                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001">
                                                                                                    </line>
                                                                                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455">
                                                                                                    </line>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </button>
                                                                                        <div className="_aa1s" style={{ "marginLeft": "-140px" }}>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_acut">
                                                                                    <div className="_acui">
                                                                                        <a className="_acuj _aa8k" href="/accounts/activity/">
                                                                                            <svg aria-label="활동 피드" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                                                                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </a>
                                                                                        <div className="">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_aa1s" style={{ "marginLeft": "-423px" }}>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_acut">
                                                                                    <div className="_aaav">
                                                                                        <div className="_aaaw">
                                                                                        </div>
                                                                                        <span className="_aa8h _aa8i" role="link" tabIndex="0" style={{ "width": "24px", "height": "24px" }}>
                                                                                            <img alt="bel1__94님의 프로필 사진" className="_aa8j" crossOrigin="anonymous" draggable="false" src="https://tse1.mm.bing.net/th?id=OIP._ZMxhOqO1O0RuE9lotq0HgHaK9&pid=Api&P=0" />
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="_aa1s" style={{ "marginLeft": "-180px" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </nav>
                                                    </section>
                                                </div>
                                                <div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="ssrb_root_end" style={{ "display": "none" }}>
                </span>
            </div>
            <div data-visualcompletion="ignore" style={{ "position": "fixed", "top": "env(safe-area-inset-top)", "right": "env(safe-area-inset-right)", "bottom": "env(safe-area-inset-bottom)", "left": "env(safe-area-inset-left)", "pointerEvents": "none", "contain": "strict", "zIndex": "-9999" }}>
            </div>
            <div id="fb-root" className=" fb_reset">
                <div style={{ "position": "absolute", "top": "-10000px", "width": "0px", "height": "0px" }}>
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_acb3">
                    <div className="_acb4">
                    </div>
                </div>
                <div className="_acb6">
                    <div className="_acb7">
                    </div>
                </div>
            </div>
            <footer className="Zx5PI  burfB vfoLd " role="contentinfo" style={{ "margin": "50px", "display": "flex", "justifyContent": "center", "alignItems": "center", "fontSize": "12px", "backgroundColor": "white" }}>
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
                            <span style={{ "margin": "auto", "display": "flex", "flexDirection": "row" }} className="_3G4x7   RFk-t bwz9f ">
                                <div className="TQUPK">
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
                        <div style={{ "marginRight": "30%" }} className="_7UhW9  PIoXz       MMzan    _0PwGv          uL8Hv         ">
                            © 2022 Instagram from Meta
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Mypage;
