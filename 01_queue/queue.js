function Queue(){
    this.tamanio = 0;
    this.head = 0;
    this.cola = [];
}

Queue.prototype.enqueue = function(element){
    this.cola[this.tamanio + this.head] = element;
    this.tamanio ++;
    console.log(this.cola);
};
Queue.prototype.dequeue = function(){
    if(this.tamanio > 0){this.tamanio--;}
    this.head++;
    return this.cola[this.head-1]
};
Queue.prototype.size = function(){
    return this.tamanio;
};