let myInfo = {
  name: '홍길동',
  age : 20,
  phone: '010-1111-1111',
  address: '대구 수성구 달구벌대로',
  height: 180
}

console.log(myInfo);
let address = 'address';

console.log(myInfo[address]);

address = 'height';
console.log(myInfo[address]);

let student1 ={
  sno: 100,
  sname: '홍길동',
  score: 85

}

let students =[student1];
students[1]={
  sno: 200,
  sname: '김민석',
  score: 92
}

let result = students[0]['score'] + students[1]["score"];
console.log(result);


