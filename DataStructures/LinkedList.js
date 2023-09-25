class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  costructor(head = null) {
    this.head = head
  }

  add(data) {
    let NewNode = new Node(data)
    if (!this.head) {
      this.head = NewNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = NewNode
    }
  }

  getFirst() {
    return this.head
  }

  size() {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }

    return count
  }


  clear() {
    this.head = null
  }

  getLats() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current.data
  }

  display() {

    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }

  }

  remove(item) {
    let current = this.head
    let previuos = this.head
    let count = 0
    while (true) {
      if(current.data === item) {
        if(count === 0){ 
          this.head = current.next
        } else {
          previuos.next = current.next
        }
        return current.data
      }
        previuos = current
        current = current.next
        count++
      return -1
    }
  }
}


const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)

// console.log('Size of elements: ', linkedList.size())
// console.log('Last element: ', linkedList.getLats())
console.log('deleted', linkedList.remove(1))
linkedList.display()
console.log('List: ', linkedList)

