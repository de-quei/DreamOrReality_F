// cList 배열 정의
let cList = [
    "크게 칭찬하고 작은 소리로 비난하라.",
    "내 스스로 확신한다면 나는 남의 확신을 구하지 않는다.",
    "다른 이의 삶에 한눈팔며 살기엔 내 인생이 너무 소중하다.",
    "우리는 다른 사람과 같아지기 위해 삶의 3/4을 빼앗기고 있다.",
    "생각하는 대로 살지 않으면 사는 대로 생각하게 된다.",
    "고개를 들어라. 각도가 곧 태도다."
];

// 랜덤으로 인용구 선택
let randomIndex = Math.floor(Math.random() * cList.length);
let randomCompliment = cList[randomIndex];

// compliment-div에 텍스트 추가
let complimentDiv = document.querySelector(".compliment-div");
complimentDiv.textContent = randomCompliment;