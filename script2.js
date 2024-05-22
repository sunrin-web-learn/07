let users = {
    //users 배열을 객체로 변경
    kim: ["eat food"],
};

let currentUser;

function login() {
    // 함수로 정리 (지금은 로그인 한번만 하지만, 나중에 로그아웃 후 재 로그인해야하니까)
    currentUser = prompt("Username을 입력해 주세요!");
    let isnew = true;
    for (existing in users) {
        if (existing === currentUser) isnew = false;
    }
    if (isnew) {
        alert(`${currentUser}님 처음 오신 것을 환영합니다.`);
    } else {
        alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
    }
}
function showList() {
    console.log(user[currentUser]); //객체 내부의 배열 접근
}
login(); //함수 호출

while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "list") {
        showList(); //함수 호출
    } else if (command === "Q" || command == "q") break;
}
