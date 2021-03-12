/*
Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
*/

// My Solution
const smaller = n => {
  let result = []
  for (let i = 0; i < n.length; i++){
    let qty = 0
    for (let y = i + 1; y < n.length; y++){
      if (n[y] < n[i]) qty+=1
    }
    result = result.concat(qty)
  }
  return result
}

// Better Solution
const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

// Another Solution
function smaller(n) {for (i=0;i<n.length;i++) {c=0; for (j=i+1;j<n.length;j++) if (n[i]>n[j]) c++; n[i]=c} return n}

// Another Solution
const smaller = a => {
  const result = [];
  let root = null;
  for (let i = a.length - 1; i >= 0; i--)
    root = insert(a[i], root, result, i, 0);
  return result;
}

const insert = (n, node, r, i, s) => {
  if (node === null) {
    node = new Node(n, 0); 
    r[i] = s;
  } else if (node.value === n) {
    node.count++;
    r[i] = s + node.sum;
  } else if (node.value > n) {
    node.sum++;
    node.left = insert(n, node.left, r, i, s);
  } else 
    node.right = insert(n, node.right, r, i, s + node.count + node.sum);
  return node;
}
   
class Node {
  constructor (v, s) {
    this.value = v;
    this.sum = s;
    this.count = 1;
    this.right = null;
    this.left = null;
  }
}

// Another Solution
var BinaryTree = function() {
  var tree = {
    c: 0,
    sc: 0
  };
  this.add = function(value) {
    return add(tree, value);
  }
  function add(root, value, count) {
    if (root.v === undefined) {
        root.v = value;
        root.c = count || 0;
        root.sc = 0;
        root.l = {};
        root.r = {};
        return root;
    }
    else if (value <= root.v) {
      root.sc += 1;
      return add(root.l, value, count);
    }
    else {
      return add(root.r, value, root.sc + (count || 0) + 1);
    }
  }
}

function smaller(nums) {
  var bst = new BinaryTree();
  var output = [];
  for (var i = nums.length - 1; i >= 0; i--) {
    var n = bst.add(nums[i]);
    output[i] = n;
  }
  for (var i = 0; i < output.length; i++) {
    output[i] = output[i].c;
  }
  return output;
}
