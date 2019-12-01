import React from 'react';

const PostList = () => {
    return(
        <>
            <div className="Post_top">
                <div className="array_tab">
                    <button type="button" className="tab_button on">전체글</button>
                    <button type="button" className="tab_button">인기글</button>
                </div>
            </div>
            <div className="Post_bottom">
                    <table className="tip_list">
                        <colgroup>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col/>
                            <col style={{width:"18%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">챔피언</th>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">글쓴이</th>
                                <th scope="col">작성일</th>
                                <th scope="col">조회</th>
                                <th scope="col">추천</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize: "13px"}}>
                            <tr className="post"> 
                                <td className="post_champ post_item"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Kassadin.png"/></td>
                                <td className="post_num post_item">0000001</td>
                                <td className="post_title">챌린저 1등이 알려주는 카사딘</td>
                                <td className="post_writer post_item">아싸 호랑나비</td>
                                <td className="post_date post_item">09-23</td>
                                <td className="post_count post_item">2321</td>
                                <td className="post_recommend post_item">123</td>
                            </tr>
                            <tr className="post"> 
                                <td className="post_champ post_item"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Kassadin.png"/></td>
                                <td className="post_num post_item">0000002</td>
                                <td className="post_title">챌린저 1등이 알려주는 카사딘</td>
                                <td className="post_writer post_item">아싸 호랑나비</td>
                                <td className="post_date post_item">09-23</td>
                                <td className="post_count post_item">512312</td>
                                <td className="post_recommend post_item">122</td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>
            <div className="Post_fotter">
                <button type="button" className="tab_button">글쓰기</button>
            </div>
            <style jsx global>
                {`
                    .Post_top {
                        width: 1000px;
                        margin: 0 auto;
                    }
                    .Post_fotter {
                        width: 1000px;
                        margin: 0 auto;
                        margin-top: 20px;
                    }
                    .Post_fotter button {
                        background-color: #69db7c;
                        float: right;
                    }
                    .array_tab {
                        margin-top: 30px;
                        width: 250px;
                        height: 32px;
                    }
                    .tab_button {
                        cursor: pointer;
                        width: 82px;
                        height: 32px;
                        border: 1px solid #ccc;
                        border-radius: 2px;
                        font-size: 14px;
                        font-weight: bold;
                        color: #333;
                        margin-right: 5px;
                    }
                    .tab_button.on{
                        background:#74b816;
                        color: #fff;
                    }
                    .Post_bottom {
                        width: 1000px;
                        margin: 0 auto;
                        margin-top: 10px;
                    }
                    .tip_list {
                        width: 1000px;
                        font-family: '굴림',Gulim;  
                        border-bottom: 1px solid #69db7c;
                    }
                    .tip_list thead tr th {
                        height: 37px;
                        border-width: 2px 0 1px;
                        border-style: solid;
                        border-color: #69db7c;
                        vertical-align: middle;
                        text-align: center;
                        color: #333;
                        font-family: Dotum,'돋움';
                    }
                    
                    .post {
                        height: 37px;
                    }
                    .post_item {
                        text-align: center;
                    }
                    .post_champ img {
                        display: block;
                        margin: 0 auto;
                        width: 30px;
                        height: 30px;
                    }
                `}
            </style>
        </>
    )
}

export default PostList;