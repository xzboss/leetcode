function test(func) {
  const start = new Date().getTime();
  func();
  const end = new Date().getTime();
  console.log(end - start);
}
for (let i = 0; i < 10; i++) {
  try {
    test(() => {
      const arr = new Array(10 ** i);
    });

    test(() => {
      const arr = Array.from({ length: 10 ** i });
    });

    test(() => {
      const arr = [];
      arr.length = 10 ** i;
    });
  } catch (err) {}
  console.log("---------", i, "------");
}

// test(() => {
//   const arr = [];
//   for (let i = 0; i < 10e5; i++) {
//     arr.push(1);
//   }
// });
// // const arr = new Array(10e6);
// test(() => {
//   // for (let i = 0; i < 10e6; i++) {
//   //   arr[i] = 1;
//   // }
//   const arr = new Array(10e7);
// });
// test(() => {
//   const arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr.push(1);
//   }
// });
// test(() => {
//   const arr = [];
//   for (let i = 0; i < 100000; i++) {
//     arr.unshift(1);
//   }
// });
// test(() => {
//   const arr = new Array(10000000);
//   for (let i = 0; i < 100000; i++) {
//     arr.pop();
//   }
// });
// test(() => {
//   const arr = new Array(100000);
//   for (let i = 0; i < 10000; i++) {
//     arr.shift();
//   }
// });
// test(() => {
//   const arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr.push(1);
//   }
// });
// test(() => {
//   const arr = new Array(1000000);
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = 1;
//   }
// });
// speed fast -> slow
// test(() => {
//   const arr = new Array(10000000).fill('0')
// })
// test(() => {
//   const arr = new Array(10000000)
//   for (let i = 0; i < 10000000; i++) {
//     arr[i] = 0
//   }
// })
// test(() => {
//   const arr = new Array(10000000).fill('0')
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i
//   }
//   arr.indexOf(999999)
// })
// test(() => {
//   const arr = new Array(10000000).fill('0')
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i
//   }
//   for (let i = 0; i < 1000000; i++) {
//     if (arr[i] === 999999) break
//   }
// })

// test(()=>{
//   let a = 4
//   for (let i = 0; i < 100000000; i++) {
//     if(a === 4){}
//   }
// })
// test(()=>{
//   let a = 4
//   for (let i = 0; i < 100000000; i++) {
//     a = 9
//   }
// })

// test(()=>{
//   var map = function(char){
//     switch(char){
//       case ')':return '('
//       case ']':return '['
//       case '}':return '{'
//     }
//   }
//   for (let i = 0; i < 1000000000; i++) {
//     if(map('{')){
//       continue
//     }
//   }
// })
//win
// test(()=>{
//   var map = {
//     ')':'(',
//     ']':'[',
//     '}':'{',
//   }
//   for (let i = 0; i < 1000000000; i++) {
//     if(map['{']){
//       continue
//     }
//   }
// })
// let str = ''
// for (let i = 0; i < 10000000; i++) {
//   str += 'A'
// }

// test(() => {
//   str.slice(1, 9)
// })
// test(() => {
//   let n = 0
//   for (let i = 0; i < str.length; i++) {
//     n += str[i]
//   }
// })
// let str = new Array(10000000).fill(1)

// test(() => {
//   str.slice(1, str.length - 1)
// })
// test(() => {
//   let n = 0
//   for (let i = 0; i < str.length; i++) {
//     n += str[i]
//   }
// })
