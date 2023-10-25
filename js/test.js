// 질문 리스트
let qList = [
    "가장 흥미있는 수업은?",
    "에러 발생! 해결하고 싶은 에러는?",
    "웹사이트를 완성했다! 가장 듣기 좋은 칭찬은?",
    "영양제를 구입하려고 합니다. 가장 먼저 고려할 것은?",
    "망해가는 빵집을 인수했다! 당신이 가장 먼저 할 일은?"
];

// 선택지 리스트
let aList = [
    [
        "Unity, Unreal Engine",
        "Spring, Node.js, SQL",
        "Swift, Android",
        "Html, Css, React",
        "Machine Learning, Python"
    ],
    [
        "화면 로딩 딜레이",
        "맞춤형 광고 서비스 오류",
        "뒤틀린 폰트와 깨진 이미지",
        "오류 발생 시 실행되는 게임",
        "업데이트 오류"
    ],
    [
        "진짜 이쁘다! 너가 만들었어??",
        "동시접속이 천 명인데 이렇게 빠르다고??",
        "와 내가 많이 보던 광고가 나오네?",
        "이 미니게임 때문에 2박 3일이 훌쩍 지나갔어!",
        "아이디어도 참신하고 이용하기 편리한거 같아!"
    ],
    [
        "효과 좋은게 짱! 고농축 영양제로 가자!",
        "화려하고 아름다운 상세 페이지? 이건 못참지!",
        "믿을 수 있는게 맞나..? 성분을 꼼꼼히 따져봐야겠어.",
        "맛 없으면 안먹어! 젤리 영양제 어딨지?",
        "동일한 영양제 함량을 제조사별로 나누어서 봐야겠어!"
    ],
    [
        "어떤 빵이 제일 잘 팔릴까? 수요조사를 해야겠어.",
        "뭐든 장비빨이지! 최고급 오븐 바로 구매!",
        "빵이란 자고로 맛이지! 내가 김탁구다!",
        "감생감죽! 감성적인 인테리어와 플레이팅으로 사로잡겠어!",
        "가장 편하고 빠른 레시피를 찾아서 개꿀빨기!"
    ]
];

//게임 : 1
//백엔드 : 2
//앱 : 3
//프론트 : 4
//인공지능 : 5
let scores = [
    [1, 2, 3, 4, 5],
    [2, 5, 4, 1, 3],
    [4, 2, 5, 1, 3],
    [3, 4, 2, 1, 5],
    [5, 1, 2, 4, 3]
];

// 현재 질문의 인덱스
let currentQuestionIndex = 0;

// HTML 요소 참조
const questionNumberElement = document.getElementById("questionNumber");
const questionTextElement = document.getElementById("questionText");
const choiceElements = [
    document.getElementById("choice1"),
    document.getElementById("choice2"),
    document.getElementById("choice3"),
    document.getElementById("choice4"),
    document.getElementById("choice5")
];

// 질문과 선택지를 화면에 표시하는 함수
function displayQuestion() {
    const currentQuestion = qList[currentQuestionIndex];
    const currentChoices = aList[currentQuestionIndex];

    // 질문 번호와 텍스트 업데이트
    questionNumberElement.textContent = `${currentQuestionIndex + 1}/${qList.length}`;
    questionTextElement.textContent = currentQuestion;

    // 선택지 업데이트
    for (let i = 0; i < currentChoices.length; i++) {
        choiceElements[i].textContent = currentChoices[i];
    }
}

// 초기 질문 표시
displayQuestion();

// 현재 선택된 스코어를 저장할 변수
let currentScore = 0;

// 선택지 클릭 이벤트 처리
for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].addEventListener("click", function () {
        // 현재 선택된 스코어를 더해줌
        currentScore += scores[currentQuestionIndex][i];

        // 선택지 클릭 이벤트 비활성화 (1초 동안 중복 클릭 방지)
        for (let j = 0; j < choiceElements.length; j++) {
            choiceElements[j].style.pointerEvents = "none";
        }

        // 1초 후 다음 질문으로 이동
        setTimeout(function () {
            currentQuestionIndex++;

            // 모든 질문을 다 봤을 경우 결과 표시 또는 리디렉션
            if (currentQuestionIndex >= qList.length) {
                // 리디렉션
                window.location.href = "testResult.html";
            } else {
                displayQuestion();

                // 선택지 클릭 이벤트 활성화
                for (let j = 0; j < choiceElements.length; j++) {
                    choiceElements[j].style.pointerEvents = "auto";
                }
            }
        }, 1000); // 1초(1000밀리초) 후에 실행
    });
}


// 결과 표시 함수
function displayResult(score) {
    // 여기에서 결과를 표시하는 코드를 추가하세요.
    // 예를 들어, 스코어에 따라 어떤 성격 유형을 나타내는 텍스트를 표시하거나 다른 동작을 수행할 수 있습니다.
}
