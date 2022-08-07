import React from 'react';
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

import { 
    faHeart as emptyHeart
} from '@fortawesome/free-regular-svg-icons';

const detailProfile = () => {
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
                        <FontAwesomeIcon icon={emptyHeart}/>
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
                <div>
                    <div className='orderBox'>
                        <div className='orderTitle'>
                            <img
                                src='/assets/img/profile_order.png'
                                className='profileOrder'/>
                            <span> 언어 실력</span>
                        </div>
                        <div className='orderDes'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='orderTitle'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 본인 소개</span>
                        </div>
                        <div className='orderDes'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='orderTitle'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 관련 해시태그</span>
                        </div>
                        <div className='orderDes'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='orderTitle'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 이런 장소가 좋아요.</span>
                        </div>
                        <div className='orderDes'>
                            <span>저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='orderTitle'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 이런 장소는 고민돼요.</span>
                        </div>
                        <div className='orderDes'>
                            <span>저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다저는 토미입니다</span>
                        </div>
                    </div>
                </div>
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
};

export default detailProfile;