let users = {
    kim: [1234, "eat food"], //0번 인덱스에 비밀번호 추가 (숫자로 저장 하기로 함)
    sang: [5678, "study hard"],
};

let currentUser;

function login() {
    // 함수로 정리 (지금은 로그인 한번만 하지만, 나중에 로그아웃 후 재 로그인해야하니까)
    currentUser = prompt("Username을 입력해 주세요!");
    let isnew = true;
    for (existing in users) {
        // for in
        if (existing === currentUser) isnew = false;
    }
    if (isnew) {
        alert(`${currentUser}님 처음 오신 것을 환영합니다.`);
        users[currentUser] = [parseInt(prompt("비밀번호를 등록해 주세요!"))]; // 비밀번호 추가
    } else {
        alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
        const checkPassword = function () {
            //비밀번호 확인 함수
            let password = parseInt(prompt("Password를 입력해 주세요!"));
            if (password !== users[currentUser][0]) {
                alert("비밀번호가 틀렸습니다.");
                return true;
            }
            return false;
        };
        while (checkPassword()) {}
    }
}
function showList() {
    console.log(users[currentUser]);
}

function printCaps() {
    console.log(
        users[currentUser]
            .filter((user) => typeof user === "string")
            .map((user) => user.toUpperCase()) //대문자로 변경
    );
}

login(); //함수 호출

while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "list") {
        showList();
    } else if (command === "cap") {
        printCaps();
    } else if (command === "Q" || command == "q") break;
}
