import React, { useState } from 'react';
import './detailProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { 
    faAngleLeft,
    faMars,
    faVenus,
    faTemperatureHalf,
    faHeart as fullHeart,
    faLocationCrosshairs
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';


function OrderBox(props) {
    return (
        <>
        {props.orders.map((order, index)=> (
            <div className='orderBox'>
                <div className='orderTitle'>
                    <img
                        src='/assets/img/profile_order.png'
                        className='profileOrder'/>
                    <span> {order.title}</span>
                </div>
                <div className='orderDes'>
                    <span> {order.body}</span>
                </div>
            </div>
        ))}
        </>
    );
}

function detailProfile() {
    // const [like, setLike] = useState(false);
    const like = false;
    const orders = [
        {id:1, title:'언어 실력', body:'한국에 온 지 얼마되지 않았어요ㅠㅠ'},
        {id:2, title:'본인 소개', body:'Hiiii 저는 토미입니다 I teach English in GnB Hangwonbr since 2022'},
        {id:3, title:'관련 해시태그', body:'#여행 #고양이 #tommy_gnb2022'},
        {id:4, title:'이런 장소가 좋아요.', body:'I like place where we can talk freely'},
        {id:5, title:'이런 장소는 고민돼요.', body:'Anywhere except for karaoke'},
    ]
    document.body.style = 'background: #1C3BD5;';
    return (
        <>
            {/* header */}
            <div className='header'>
                <FontAwesomeIcon icon={faAngleLeft} className='angleLeft'/>
                <span>교류 메이트</span>
            </div>

            {/* profile img + description */}
            <div className='profile'>
                <img 
                    src='/assets/img/Tommy.png'
                    className='profileImg'/>
                <div className='name'>Tommy</div>
                <div className='iconWrapper'>
                    <div className='iconWrapper-left'>
                        <FontAwesomeIcon icon={faMars}/><span></span>
                        {/* <FontAwesomeIcon icon={faVenus}/><span></span> */}
                        <FontAwesomeIcon icon={faTemperatureHalf}/><span>30°C</span>
                    </div>
                    <div className='iconWrapper-right'>
                        <FontAwesomeIcon icon={ like ? fullHeart : emptyHeart }/>
                        {/* <FontAwesomeIcon icon={fullHeart}/> */}
                    </div>
                </div>
                <div className='iconWrapper-inform'>
                    <img 
                        src='/assets/img/USA.jpg'
                        className='infromIcon'/>
                    <span>USA</span>
                    <img 
                        src='/assets/img/말하는사람.png'
                        className='infromIcon'/>
                    <span>영어</span>
                    <FontAwesomeIcon icon={faLocationCrosshairs}/>
                    <span>침산동</span>
                </div>
                <OrderBox orders={orders}></OrderBox>
            </div>

            {/* button to chat, make promise*/}
            <div className='buttonBox'>
                <button 
                    type='button'
                    className='chatButton'>
                    채팅
                </button>
                <button 
                    type='button'
                    className='promiseButton'>
                    약속 잡기
                </button>
            </div>
        </>
    );
}

export default detailProfile;