class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;            
    }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }
}



const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
//console.log(ll);
ll.printListData();