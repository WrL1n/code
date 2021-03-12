/*
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

// My Solution
const mostMoney = students => {
  if (students.length === 1) {
    return students[0].name
  }

  const studsWithMostMoney = students.reduce((acc, rec) => {
    const sum = rec.fives * 5 + rec.tens * 10 + rec.twenties * 20

    if ((acc[0].money || 0) === sum) {
      return acc.concat({ 'name': rec.name, 'money': sum })
    }

    return (acc[0].money || 0) < sum ? [{ 'name': rec.name, 'money': sum }] : acc
  }, [{}])

  return studsWithMostMoney.length === students.length ? 'all' : studsWithMostMoney[0].name
}

// Better Solution
function mostMoney(s) {
  s.sort((x,y)=>sum(y)-sum(x));
  if(s.length>1 && sum(s[0])==sum(s[1]))return 'all';
  return s[0].name;
}

const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);

// Another Solution
function mostMoney(students) {
  var res = ['',-1],tmp;
  students.forEach(x=>{
        tmp= x.fives*5+x.tens*10+x.twenties*20; 
        if(tmp ==res[1]){res[0]="all"; return null;}
        if(tmp > res[1]){res[0]=x.name; res[1]=tmp;}
        });
  return res[0];
}

// Another Solution
function mostMoney(students, max=0) {
  const student = students.reduce((student, st) => {
    const sum = st.fives * 5 + st.tens * 10 + st.twenties * 20;
    if(sum > max) max = sum;
    student.set(sum, st.name);
    return student;
  }, new Map());
  return student.size > 1 || student.size == students.length ? student.get(max) : 'all';
}

// Another Solution
function mostMoney(students) {
  let name = 'all';
  let max = 0;
  for (const student of students) {
    const amount = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    if (amount > max) {
      max = amount;
      name = student.name;
    } else if (max === amount) {
      name = 'all';
    }
  }
  
  return name;
}
