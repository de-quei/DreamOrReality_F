// cList 배열 정의
// 2차원 배열로 cList와 각 문장의 저자를 연결
let cListWithAuthors = [
    ["크게 칭찬하고 작은 소리로 비난하라.", "러시아 격인"],
    ["내 스스로 확신한다면 나는 남의 확신을 구하지 않는다.", "에드거 앨런 포"],
    ["다른 이의 삶에 한눈팔며 살기엔 내 인생이 너무 소중하다.", "<흔들리는 나에게 필요한 한마디> 中"],
    ["우리는 다른 사람과 같아지기 위해 삶의 3/4을 빼앗기고 있다.", "쇼펜하우어"],
    ["생각하는 대로 살지 않으면 사는 대로 생각하게 된다.", "폴 발레리"],
    ["고개를 들어라. 각도가 곧 태도다.", "프랭크 시나트라"]
];


// 랜덤으로 인용구와 저자 선택
let randomIndex = Math.floor(Math.random() * cListWithAuthors.length);
let randomCompliment = cListWithAuthors[randomIndex][0]; // 인용구
let randomAuthor = cListWithAuthors[randomIndex][1]; // 저자

// compliment-div에 인용구 추가
let complimentDiv = document.querySelector(".compliment-div");
complimentDiv.textContent = randomCompliment;

// author-div에 저자 추가
let authorDiv = document.querySelector(".author-div");
authorDiv.textContent = "- " + randomAuthor + " -";
