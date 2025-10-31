
// if(10 <= 10){
  
// }

let members = [
  {memNum :'1001', name: '김민준', points: 123},
  {memNum :'1002', name: 'qkrtjfaud', points: 95},
  {memNum :'1003', name: '이충희', points: 100}
];

let result = members[0].points + members[1].points + members[2].points
let avg = result / members.length;

console.log(result);
console.log(avg);

//points를 avg와 비교
if(members[0]['points'] > avg){
  console.log('평균보다 큽니다.');
}else if(members[0]['points'] < avg){
  console.log('평균보다 작습니다.');
}else if(members[0]['points'] == avg){
  console.log('평균과 같습니다.');
}

// members[1]
if(members[1]['points'] > avg){
  console.log('평균보다 큽니다.');
}else if(members[1]['points'] < avg){
  console.log('평균보다 작습니다.');
}else if(members[1]['points'] == avg){
  console.log('평균과 같습니다.');
}

//members[2]
if(members[2]['points'] > avg){
  console.log('평균보다 큽니다.');
}else if(members[2]['points'] < avg){
  console.log('평균보다 작습니다.');
}else if(members[2]['points'] == avg){
  console.log('평균과 같습니다.');
}

