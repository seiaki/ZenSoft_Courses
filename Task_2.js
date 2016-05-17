'use strict';

function multiplyTableRich() {
  	for (let i = 1; i < 10; i++) {
  		let line = '';
  	for (let j = 1; j < 10; j++) {
  		const postfix = j * i > 9 ? '  ' : '   ';
  		line += `${j} * ${i} = ${j*i} ${postfix}`;
  	} 
  		console.log(line);
  }
}
multiplyTableRich();
/*
1 * 1 = 1    2 * 1 = 2    3 * 1 = 3    4 * 1 = 4    5 * 1 = 5    6 * 1 = 6    7 * 1 = 7    8 * 1 = 8    9 * 1 = 9    
1 * 2 = 2    2 * 2 = 4    3 * 2 = 6    4 * 2 = 8    5 * 2 = 10   6 * 2 = 12   7 * 2 = 14   8 * 2 = 16   9 * 2 = 18   
1 * 3 = 3    2 * 3 = 6    3 * 3 = 9    4 * 3 = 12   5 * 3 = 15   6 * 3 = 18   7 * 3 = 21   8 * 3 = 24   9 * 3 = 27   
1 * 4 = 4    2 * 4 = 8    3 * 4 = 12   4 * 4 = 16   5 * 4 = 20   6 * 4 = 24   7 * 4 = 28   8 * 4 = 32   9 * 4 = 36   
1 * 5 = 5    2 * 5 = 10   3 * 5 = 15   4 * 5 = 20   5 * 5 = 25   6 * 5 = 30   7 * 5 = 35   8 * 5 = 40   9 * 5 = 45   
1 * 6 = 6    2 * 6 = 12   3 * 6 = 18   4 * 6 = 24   5 * 6 = 30   6 * 6 = 36   7 * 6 = 42   8 * 6 = 48   9 * 6 = 54   
1 * 7 = 7    2 * 7 = 14   3 * 7 = 21   4 * 7 = 28   5 * 7 = 35   6 * 7 = 42   7 * 7 = 49   8 * 7 = 56   9 * 7 = 63   
1 * 8 = 8    2 * 8 = 16   3 * 8 = 24   4 * 8 = 32   5 * 8 = 40   6 * 8 = 48   7 * 8 = 56   8 * 8 = 64   9 * 8 = 72   
1 * 9 = 9    2 * 9 = 18   3 * 9 = 27   4 * 9 = 36   5 * 9 = 45   6 * 9 = 54   7 * 9 = 63   8 * 9 = 72   9 * 9 = 81   
*/
function evenNumbers() {
  for (let i = 0; i < 10; i++) {
  	if (i % 2 === 0) {
  		console.log(`${i} are even`);
  	} else {
  		console.log(`${i} are not even`);
  	}
  	//const isEven = i % 2 === 0 ? 'even' : 'not even';
  	//console.log(`${i} are ${isEven}`);
  }
}
evenNumbers();
/*
0 are even
1 are not even
2 are even
3 are not even
4 are even
5 are not even
6 are even
7 are not even
8 are even
9 are not even
*/
function multiplyTable() {
  for (let i = 0; i < 10; i++ ) {
  	let line = `${i}    `;
  	for (let j = 1; j < 10; j++) {
  		const postfix = j * i > 9 ? '  ' : '   ';
  		if (i > 0) {
  			line += `${j * i} ${postfix}`;
  		}
  		else {
  			line += `${j} ${postfix}`
  		}
  	}
  	console.log(line);
  }
}
multiplyTable();
/*
0   1   2   3   4   5   6   7   8   9   
1   1   2   3   4   5   6   7   8   9   
2   2   4   6   8   10  12  14  16  18  
3   3   6   9   12  15  18  21  24  27  
4   4   8   12  16  20  24  28  32  36  
5   5   10  15  20  25  30  35  40  45  
6   6   12  18  24  30  36  42  48  54  
7   7   14  21  28  35  42  49  56  63  
8   8   16  24  32  40  48  56  64  72  
9   9   18  27  36  45  54  63  72  81  
*/
function evenMultiplyTable() {
  for (let i = 0; i < 10; i++ ) {
  	let lines = `${i}  `;
  	for (let j = 1; j < 10; j++) {
  		if (i === 0) {
  			lines += `${j}  `;
  		} else if ((i * j)%2 === 0) {
  			lines += "+  ";
  		} else {
  			lines += "-  ";
  		}
  	}
  	console.log(lines);
  	}
}
evenMultiplyTable();
/*
0   1   2   3   4   5   6   7   8   9   
1   -   +   -   +   -   +   -   +   -   
2   +   +   +   +   +   +   +   +   +   
3   -   +   -   +   -   +   -   +   -   
4   +   +   +   +   +   +   +   +   +   
5   -   +   -   +   -   +   -   +   -   
6   +   +   +   +   +   +   +   +   +   
7   -   +   -   +   -   +   -   +   -   
8   +   +   +   +   +   +   +   +   +   
9   -   +   -   +   -   +   -   +   -   
*/