/* eslint-disable complexity */
function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value, current = this){

  if (value < current.value){
    if (!current.left){
      current.left = new BinarySearchTree(value);
    } else {
      this.insert(value, current.left);
    }
  } else if (!current.right){
      current.right = new BinarySearchTree(value);
    } else {
      this.insert(value, current.right);
    }

};

BinarySearchTree.prototype.contains = function(num){
  if (num === this.value){
    return true;
  }
  if (num < this.value){
    if (!this.left){
      return false;
    } else {
      return this.left.contains(num);
    }
  }
  else if (!this.right){
      return false;
    } else {
      return this.right.contains(num);
    }
};

BinarySearchTree.prototype.depthFirstForEach = function(fn, option){

  // console.log(this.left)
  // console.log(this.right)
  if (!option || option === 'in-order'){
    // run 'in-order'
    if (this.left){
      this.left.depthFirstForEach(fn, option)
    }
    // this.left && this.left.depthFirstForEach(fn, option);
    fn(this.value);
    this.right && this.right.depthFirstForEach(fn, option);
    

  } else if (option === 'pre-order'){
    fn(this.value);
    this.left && this.left.depthFirstForEach(fn, option);
    this.right && this.right.depthFirstForEach(fn, option);

    
  } else if (option === 'post-order'){
    this.left && this.left.depthFirstForEach(fn, option);
    this.right && this.right.depthFirstForEach(fn, option);
    fn(this.value);
  }

};

BinarySearchTree.prototype.breadthFirstForEach = function(cb){
  const queue = [this];
 
  // console.log(queue)
  while (queue.length) {
      const currentNode = queue.shift();
      cb(currentNode.value);
      if (currentNode.left)
          queue.push(currentNode.left);
      if (currentNode.right)
          queue.push(currentNode.right);
  }
};

BinarySearchTree.prototype.size = function(){
  let leftSize = 0;
  let rightSize = 0;

  if (this.left){
    leftSize = this.left.size()
  } else {
    leftSize = 0;
  }

    if(this.right){
      rightSize = this.right.size()
    } else {
      rightSize = 0
    }
return 1 + leftSize + rightSize
};
