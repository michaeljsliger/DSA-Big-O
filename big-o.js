/* 1 */
// shout out for the same breed
// O(1)
// O(n), iterating through people to find matches

/* 2 */
// O(1); code runtime does not change based on input size

/* 3 */
// O(n^2)
// nested loop, based on two arr lengths;

/* 4 */
// O(n), affects array in place, only runs through once, array.length

/* 5 */
// O(n) avg case

/* 6 */
// O(n^2)

/* 7 */
// computes fibonacci sequence
// O(n), only one run through

/* 8 */
// O(log(n))
// randomly cuts the array, reducing array size on each iteration

/* 9 */
// O(1), array index is constant

/* 10 */
// is prime
// best case is O(1)
// worst case is O(n)

/* ==================================== */
// DSA-Rec Big O
/* 
1, counting sheep
recursive O(n)
iterative O(n)

2, power calc
rec O(n)
iterative O(1), Math.pow, so not iterative

3, reverseStr 
rec O(n)
iter O(n)

4, nThTriangleNum 
rec O(n)
iter O(n)

5, strSplitt
rec O(n)
iter O(n)

6, fibonacci
rec O(n)
iter O(n)

7, factorial
rec O(n)
iter O(n)
*/

/* ==================================== */
/* 11 */
// Hanoi pre-checklist
// how do we want to represent data?
// 3 slots, x discs in the starting stack [0], {0:x , 1: , 2:}
// start left side
// only one move per turn
// disc move must be placed on empty rod, or on a disc bigger than the current
// returning how many moves it takes to finish
function towerOfHanoi(h, from, aux, to, count) {
  if (h === 1) {
    console.log(`${h}:: ${from} to ${to}`);
  } else {
    towerOfHanoi(h - 1, from, to, aux);
        
    console.log(`${h}:: ${from} to ${to}`);
    
    towerOfHanoi(h - 1, aux, from, to);
  }
  return;
}
// console.log(towerOfHanoi(3, 'A', 'B', 'C'));

function towerofHanoiMoves() {
  let count = 0;
  function towerOfHanoi2(h, from, aux, to) {
    if (h === 1) {
      console.log(`${h}:: ${from} to ${to}`);
      count++;
    } else {
      towerOfHanoi2(h - 1, from, to, aux);
      // console.log(`${h}:: ${from} to ${to}`);
      towerOfHanoi2(1, from, aux, to);
      towerOfHanoi2(h - 1, aux, from, to);
    }
    return;
  }
  console.log(towerOfHanoi2(5, 'A', 'B', 'C'));
  console.log(count);
}
console.log(towerofHanoiMoves());

// stack of height 1
// one move

// stack of height 2 
// 3 moves

/*
// if I want to move the third disc (bottom, n, ie 3), i have to think about
    // moving the second disc (middle/2nd, n-1, 2), but to move that one, i have to think
    // about moving the first disc (top, (n-1) - 1, 1)


tower(3, A, B, C) // 7 console logs
// want to move 3rd, so have to check second
1) tower((3 - 1), A, C, B) // use opposite of aux to store second
2) tower((2 - 1), A, B, C) // move 1 from a to c; move back up
    1a) tower((2, A, C, B) console logs
        move 2 from a to b; move back up
3) tower((2 - 1), C, A, B)
    move disc 1 from C to B
4) move 3 from A to C
    so, 0, 21, 3
5) tower((3 - 1), B, A, C)
6) tower((2 - 1), B, C, A) 1 from B to A
    6a) tower(2, b, a, c)
        move 2 from b to c
7) tower(1, a, b, c) // place 1 on c, place 2 on b, place 1 on b
    tower (1+1, a, c, b)
   tower(3, a, b, c) // assumes 2 and 1 are on aux peg (b)

Interplay of parameters
 to move N, you must move n-1, so to move 3, you need to move 2, but you must move 1







*/



/*
{0:x , 1: , 2:}
{0:3 , 1: , 2:}--
{0:2 , 1:3 , 2:}
{0:1 , 1:3 , 2:2}
{0:1 , 1: , 2:3}
{0:0 , 1:1 , 2:3}
{0:3 , 1:1 , 2:2}
{0:3 , 1:2 , 2: }
{0:0 , 1:3 , 2: } f(3) = 7;
base case:

*/
