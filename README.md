# 원티드_Navbar_Slide

## :raised_hands: 프로젝트 소개
* 원티드의 navbar 슬라이드 클론 코딩 하였습니다
* navbar는 정적으로 마크업과 스타일링만 했습니다
* slide는 무한 슬라이드로 구현 하였고, 라이브러리 없이 Swiper 기능구현, hover시 슬라이드 정지, 자동 슬라이드 기능, 버튼 클릭시 슬라이드 기능을 구현 하였습니다
* 반응형 웹 구현

## :clipboard: 기술스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## :paperclip: 배포 주소
https://stupefied-varahamihira-fe2d21.netlify.app

## :pencil2: 구현
  * 반응형 웹 구현(1199px, 991px, 768px)
  * 무한 슬라이드
    * 구현 방법
      * 가짜 더미 데이터를 맨 처음 두개, 맨 마지막 두개를 두었다.
      * 처음과 마지막 데이터로 슬라이드가 되면 setTimeout을 이용하여, "transition: 0s"으로 두고, nextIndex state 값을 바꾸어 렌더링이 일어나도록 하여, 브라우저 상에서는 무한슬라이드가 되도록 구현 하였습니다.
  * 라이브러리 없이 Swiper 기능
    * 구현 방법
      * onMouseDown 이벤트를 이용하여 현제 이벤트가 시작된 x좌표를 구하고, onMouseUp 이벤트를 이용해 이벤트가 끝난 x좌표를 구했습니다.
      * onMouseDown 이벤트에 onmousemove 이벤트를 걸어, 마우스가 이동될때마다 이미지가 transform되게 하여, 리플로우가 아닌 리페인트 단계까지만 일어나도록 하였습니다.
      * onMouseDown 이벤트 x좌표를 onMouseUp x좌표를 비교해 이전 또는 다음으로 슬라이드 되도록 구현 하였습니다.
  * hover시 slide 중지
    * 구현 방법
      * onMouseOver 이벤트시 clearInterval을 이용하여 슬라이드가 넘어가지 못하도록 하였습니다.
  * 자동 슬라이드
    * 구현 방법
      * useEffect와 setInterval메소드를 이용하여 자동으로 슬라이드가 되도록 구현 하였습니다.
  * 버튼 클릭시 슬라이드
    * 구현 방법
      * onClick 이벤트시 이전버튼, 다음버튼에 따라 nextIndex state값에 변화를 주어 슬라이드 되도록 구현 하였습니다.
  * 구현 영상
    * ![wanted](https://user-images.githubusercontent.com/87363129/159670689-dddcd9c6-bbf8-4a84-a3fb-55f2bbbaa3d4.gif)
