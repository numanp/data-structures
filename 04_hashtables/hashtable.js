function HashTable(){
	this.numBuckets = 35;
	this.data = []
}

HashTable.prototype.set = function(key, val){
	if(typeof key != 'string'){
		throw new TypeError('Keys must be strings')
	}
	var lista = new LinkedList();
	if(this.data[this.hash(key)]){
		if(this.data[this.hash(key)])
		this.data[this.hash(key)].addToHead({key,val})}
	else{
		this.data[this.hash(key)]=lista
		lista.addToHead({key,val})
	}
	
	//console.log(this.data)
}

HashTable.prototype.get = function(key){
	var found =this.data[this.hash(key)].search(function(nodo){
		return (nodo.key === key)
	})
	return found && found.val
}

HashTable.prototype.hasKey = function(key){
	return !!this.get(key)
}

HashTable.prototype.hash = function(keyString){
	var contador = 0;
	for(var i = 0; i < keyString.length; i++){
		contador += keyString.charCodeAt(i)
	}	
	return contador % this.numBuckets
}
