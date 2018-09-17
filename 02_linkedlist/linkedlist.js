function LinkedList(){
	this.head = false;
	this.tail = false;
}

function Node(val){
	this.value = val;
	this.next = null;
	this.previous = null;
}

LinkedList.prototype.addToTail = function(arg){
	if(this.head == false && this.tail == false){
		this.head = new Node(arg);
		this.tail = this.head;
	}else{
		var aux = new Node(arg);
		this.tail.next = aux;
		aux.previous = this.tail;
		this.tail = aux;
	}
};

LinkedList.prototype.addToHead = function(arg){
	if(this.head == false && this.tail == false){
		this.head = new Node(arg);
		this.tail = this.head;
	}else{
		var aux = new Node(arg);
		this.head.previous = aux;
		aux.next = this.head;
		this.head = aux;
	}
};

LinkedList.prototype.removeHead = function(){

	if(this.head != false){
		var headActualValue = this.head.value;
		this.head = this.head.next;
		if(this.head != null){
			this.head.previous = null;
		}
		return headActualValue;
	}
};

LinkedList.prototype.removeTail = function(){
	if(this.tail != false){
		var tailActualValue = this.tail.value;
		this.tail = this.tail.previous;
		if(this.tail != null){
			this.tail.next = null;
		}
		return tailActualValue;
	}
};

LinkedList.prototype.search = function(){

};