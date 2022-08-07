import React from 'react';
import './detailProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { 
    faAngleLeft,
    faMars,
    faVenus,
    faTemperatureHalf,
    faHeart as fullHeart
} from '@fortawesome/free-solid-svg-icons';

import { 
    faHeart as emptyHeart
} from '@fortawesome/free-regular-svg-icons';

const detailProfile = () => {
    document.body.style = 'background: #1C3BD5;';
    return (
        <>
            <div className='header'>
                <FontAwesomeIcon icon={faAngleLeft}/>
                <span>교류 메이트</span>
            </div>
            <div className='card'>
                <img 
                    src='/assets/img/Tommy.png'
                    className='profileImg'/>
                <div className='name'>Tommy</div>
                <div className='iconWrapper'>
                    <div className='iconWrapper-left'>
                        <FontAwesomeIcon icon={faMars}/><span> </span>
                        {/* <FontAwesomeIcon icon={faVenus}/><span> </span> */}
                        <FontAwesomeIcon icon={faTemperatureHalf}/><span> 30°C</span>
                    </div>
                    <div className='iconWrapper-right'>
                        <FontAwesomeIcon icon={emptyHeart}/>
                        {/* <FontAwesomeIcon icon={fullHeart}/> */}
                    </div>
                </div>
                <div className='profile'>
                    <div className='orderBox'>
                        <div className='title'>
                            <img
                                src='/assets/img/profile_order.png'
                                className='profileOrder'/>
                            <span> 언어 실력</span>
                        </div>
                        <div className='description'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='title'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 본인 소개</span>
                        </div>
                        <div className='description'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='title'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 관련 해시태그</span>
                        </div>
                        <div className='description'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='title'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 이런 장소가 좋아요.</span>
                        </div>
                        <div className='description'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                    <div className='orderBox'>
                        <div className='title'>
                        <img
                            src='/assets/img/profile_order.png'
                            className='profileOrder'/>
                            <span> 이런 장소는 고민돼요.</span>
                        </div>
                        <div className='description'>
                            <span>저는 토미입니다</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default detailProfile;