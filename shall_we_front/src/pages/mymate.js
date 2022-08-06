import Button from 'react-bootstrap/Button';
function Mymate() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y ">
      <div class="row">
        <div class="container col-sm-12 col-md-12 col-lg-12">
            <h4 class="fw-bold py-1 mb-3">
                <span class="fw-bold py-3 mb-4">언어 메이트</span>
            </h4>
            <div class="col-md-12 col-lg-12 col-sm-12">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="col-md-6 col-lg-6 mb-3">
                                <div class="card h-100" style="align-items: center;">
                                    <div class="col-md-8 mx-5 my-3" >
                                        <div class="text-center mb-3" >
                                            <div class="">
                                                <img src="%PUBLIC_URL%/assets/img/Tommy.png" class="rounded "/>
                                                <a class="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                                    <img
                                                    src="%PUBLIC_URL%/assets/img/이전화살표.png"
                                                    width="20px"
                                                    height="20px"
                                                    />
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                                    <img
                                                    src="%PUBLIC_URL%/assets/img/다음화살표.png"
                                                    width="20px"
                                                    height="20px"
                                                    />
                                                </a>
                                            </div>
                                            <h5 style="color: black;">
                                                Tommy
                                            </h5>
                                            <img
                                            src="%PUBLIC_URL%/assets/img/성별.png"
                                            />
                                            <img
                                            src="%PUBLIC_URL%/assets/img/온도계.png"
                                            />
                                            <span class="card-title text-primary mt-3">30℃
                                            </span>
                                        </div>
                                        <img
                                            src="%PUBLIC_URL%/assets/img/미국 1.png"
                                            width="20px"
                                            height="20px"
                                        />
                                        <span>USA</span>
                                        <img
                                            src="%PUBLIC_URL%/assets/img/말하는사람.png"
                                            width="20px"
                                            height="20px"
                                        />
                                        <span>영어</span>
                                        <img
                                            src="%PUBLIC_URL%/assets/img/위치.png"
                                            width="20px"
                                            height="20px"
                                        />
                                        <span>대명동</span>
                                        <div style="float:right;">
                                            <img
                                            src="%PUBLIC_URL%/assets/img/팔로우.png"
                                        />
                                        </div>
                                        {/* 내용시작 */}

                                        <div style="border-bottom: 3px solid rgb(223, 223, 223)" class="mt-2" >
                                            <img
                                            src="%PUBLIC_URL%/assets/img/주석1.png"
                                            width="20px"
                                            height="20px"
                                            />
                                            <span><strong>언어실력</strong></span>
                                            <p class="mb-1">한국에 온 지 얼마되지 않았어요ㅠㅠ</p>
                                        </div>
                                        <div style="border-bottom: 3px solid rgb(223, 223, 223)" class="mt-1" >
                                            <img
                                            src="%PUBLIC_URL%/assets/img/주석1.png"
                                            width="20px"
                                            height="20px"
                                            />
                                            <span><strong>본인 소개</strong></span>
                                              <p class="mb-1">Hiiii 저는 토미입니다
                                                I teach English in GnB Hangwonbr 
                                                since 2022
                                              </p>
                                        </div>
                                        <div style="border-bottom: 3px solid rgb(223, 223, 223)" class="mt-1">
                                            <img
                                            src="%PUBLIC_URL%/assets/img/주석1.png"
                                            width="20px"
                                            height="20px"
                                            />
                                            <span><strong>관련 해시태그</strong></span>
                                            <p class="mb-1">#여행 #고양이 #tommy_gnb2022</p>
                                        </div>
                                        <div style="border-bottom: 3px solid rgb(223, 223, 223)" class="mt-1">
                                            <img
                                            src="%PUBLIC_URL%/assets/img/주석1.png"
                                            width="20px"
                                            height="20px"
                                            />
                                            <span><strong>이런 장소가 좋아요</strong></span>
                                            <p class="mb-1">I like place where we can talk freely</p>
                                        </div>
                                        <div style="border-bottom: 3px solid rgb(223, 223, 223)" class="mt-1">
                                            <img
                                            src="%PUBLIC_URL%/assets/img/주석1.png"
                                            width="20px"
                                            height="20px"
                                            />
                                            <span><strong>이런 장소는 고민돼요</strong></span>
                                            <p class="mb-1">Anywhere except for karaoke</p>
                                        </div>
                                    </div>
                                    <div class =" text-center">
                                        <div class="btn-group col-md-12 mb-3" role="group" aria-label="Basic outlined example">
                                            <button 
                                                type="button" 
                                                class="btn btn-outline-primary"
                                                style="width: 200px;"
                                                // onclick="location.href='{% url 'chat' %}'"
                                                >
                                                채팅
                                            </button>
                                            <button 
                                                type="button"
                                                class="btn btn-outline-primary"
                                                style="width: 200px;"
                                                // onclick="location.href= '{% url 'thema' %}'"
                                                >
                                                약속 잡기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Mymate;
