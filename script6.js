const toDoList = {
    users: {
        kim: [1234, "eat food"], //0번 인덱스에 비밀번호 추가 (숫자로 저장 하기로 함)
        sang: [5678, "study hard"],
    },
    currentUser: "",
    login: function () {
        // 함수로 정리 (지금은 로그인 한번만 하지만, 나중에 로그아웃 후 재 로그인해야하니까)
        this.currentUser = prompt("Username을 입력해 주세요!");
        let isnew = true;
        for (existing in this.users) {
            // for in
            if (existing === this.currentUser) isnew = false;
        }
        if (isnew) {
            alert(`${this.currentUser}님 처음 오신 것을 환영합니다.`);
            this.users[this.currentUser] = [
                parseInt(prompt("비밀번호를 등록해 주세요!")),
            ]; // 비밀번호 추가
        } else {
            alert(`${this.currentUser}님 다시 접속 하신 것을 환영합니다.`);
            const checkPassword = () => {
                //비밀번호 확인 함수
                let password = parseInt(prompt("Password를 입력해 주세요!"));
                if (password !== this.users[this.currentUser][0]) {
                    alert("비밀번호가 틀렸습니다.");
                    return true;
                }
                return false;
            };
            while (checkPassword()) {}
        }
    },
    logout() {
        this.currentUser = "";
        this.login();
    },
};

function showList() {
    let i = 0;
    console.log("**************");
    toDoList.users[toDoList.currentUser].forEach((user) => {
        if (i !== 0) console.log(`#${i}. ${user}`);
        i++;
    });
    console.log("**************");
}

function addList() {
    let newTask = prompt("할 일을 추가해 주세요!");
    toDoList.users[toDoList.currentUser].push(newTask);
}

function deleteList() {
    showList();
    let index = parseInt(prompt("몇 번째 일을 삭제할까요?"));
    toDoList.users[toDoList.currentUser].splice(index, 1);
}

function printCaps() {
    console.log(
        toDoList.users[toDoList.currentUser]
            .filter((user) => typeof user === "string")
            .map((user) => user.toUpperCase())
    );
}

toDoList.login(); //함수 호출

while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "list") {
        showList();
    } else if (command === "add") {
        addList();
    } else if (command === "del") {
        deleteList();
    } else if (command === "cap") {
        printCaps();
    } else if (command === "logout") {
        toDoList.logout();
    } else if (command === "Q" || command == "q") break;
}
