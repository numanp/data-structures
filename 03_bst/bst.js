function BinarySearchTree(valor) {
  this.value = valor;
  this.tamaño = 1;
  this.left;
  this.right;
}

BinarySearchTree.prototype.insert = function(valor, nodo = this) {
  nodo.tamaño++;
  if (valor < nodo.value) {
    if (nodo.left) {
      return this.insert(valor, nodo.left);
    } else {
      return (nodo.left = new BinarySearchTree(valor));
    }
  } else if (valor > nodo.value) {
    if (nodo.right) {
      return this.insert(valor, nodo.right);
    } else {
      return (nodo.right = new BinarySearchTree(valor));
    }
  }
};
BinarySearchTree.prototype.contains = function(valor, nodo = this) {
  if (nodo.value === valor) {
    return true;
  } else {
    if (valor < nodo.value) {
      if (nodo.left) {
        return this.contains(valor, nodo.left);
      }
    } else if (valor > nodo.value) {
      if (nodo.right) {
        return this.contains(valor, nodo.right);
      }
    }
  }
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(
  fn,
  order = 'in-order',
  nodo = this,
) {
  if (order === 'in-order') {
    if (nodo.left) {
      this.depthFirstForEach(fn, order, nodo.left);
    }
    fn(nodo.value);
    if (nodo.right) {
      this.depthFirstForEach(fn, order, nodo.right);
    }
  } else if (order === 'pre-order') {
    fn(nodo.value);
    if (nodo.left) {
      this.depthFirstForEach(fn, order, nodo.left);
    }
    if (nodo.right) {
      this.depthFirstForEach(fn, order, nodo.right);
    }
  } else if (order === 'post-order') {
    if (nodo.left) {
      this.depthFirstForEach(fn, order, nodo.left);
    }
    if (nodo.right) {
      this.depthFirstForEach(fn, order, nodo.right);
    }
    fn(nodo.value);
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(
  fn,
  nodo = this,
  arr = [],
) {
  fn(nodo.value);
  if (nodo.left) {
    arr.push(nodo.left);
  }
  if (nodo.right) {
    arr.push(nodo.right);
  }
  if (arr.length) {
    nodo = arr.shift();
    this.breadthFirstForEach(fn, nodo, arr);
  }

  //   var aux2 = fn(nodo.value);
  //   arr.push(aux2);
  //   if (nodo.left) {
  //     this.breadthFirstForEach(fn, nodo.left);
  //   }
  //   if (nodo.right) {
  //     this.breadthFirstForEach(fn, nodo.right);
  //   }
};
BinarySearchTree.prototype.size = function() {
  return this.tamaño;
};