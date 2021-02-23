// getElementsBy... => 요소들을 모두 가져온다. 즉, 객체 형태로 가져오기 때문에 가져온 것을 쓰려면 [0]을 붙여야 한다.
// querySelector => 첫 번째 엘리먼트를 가져온다.
// innerHTML => 함수가 아니다! 근데 setAttribute(바꿀 atrribute, 바꿀 내용)은 함수다.
//

const start = document.querySelector(".start"),
      question = document.querySelector(".questions"),
      result = document.querySelector(".result"),
      btn = document.querySelector(".start__button");

const answerA = document.querySelector(".A"),
      answerB = document.querySelector(".B");

var num = 1;


function stHideQuesShow(){
    start.style.display = "none";
    question.style.display = "block";
}

function quesHideResShow(){
    question.style.display = "none";
    result.style.display = "block";
}

function startClick(){
    stHideQuesShow();
    next();
}


function next(){
    if(num==13){
        quesHideResShow();
        var mbti="";
        document.querySelector(".IE").value < 2 ? mbti += "E" : mbti += "I";
        document.querySelector(".SN").value < 2 ? mbti += "N" : mbti += "S";
        document.querySelector(".TF").value < 2 ? mbti += "F" : mbti += "T";
        document.querySelector(".JP").value < 2 ? mbti += "P" : mbti += "J";
        console.log(mbti);

        document.querySelector(".result__img").setAttribute('src', results[mbti]["img"]);
        document.querySelector(".result__name").innerHTML = results[mbti]["name"];
        document.querySelector(".result__explain").innerHTML = results[mbti]["explain"];
        document.querySelector(".relate__img").setAttribute('src', results[mbti]["relate-img"]);
        document.querySelector(".relate__name").innerHTML = results[mbti]["relate"];
        document.querySelector(".diff__img").setAttribute('src', results[mbti]["diff-img"]);
        document.querySelector(".diff__name").innerHTML = results[mbti]["different"];
        //계산한 결과로 mbti 결과 만들고
        //그 결과에 따른 값들(이름, 설명, 어울리는/안어울리는 이름들...) 불러오기
    } else {
        const title = document.querySelector(".title");
        const type = document.querySelector(".type");
        const bar = document.querySelector(".progress-bar");

        bar.setAttribute('style', 'width: calc(100/12*'+num+'%)');
        bar.innerHTML = num + '/12';
        type.setAttribute('value', q[num]["type"]);
        title.innerHTML = q[num]["title"];
        answerA.innerHTML = q[num]["A"];
        answerB.innerHTML = q[num]["B"];
    }
    num++;
}

function clickABtn(){
    var type = document.querySelector(".type").value;
    //console.log(type);
    var preVal = document.getElementsByClassName(type)[0].value;
    //console.log(preVal);
    document.getElementsByClassName(type)[0].setAttribute('value', parseInt(preVal)+1);
    next();
}

function clickBBtn(){
    next();
}

btn.addEventListener('click', startClick);
answerA.addEventListener('click', clickABtn);
answerB.addEventListener('click', clickBBtn);