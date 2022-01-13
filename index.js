class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => {return a-b})
  }

  get(pos) {
    if (pos < this.items.length) return this.items[pos]
    else {
      throw new OutOfBounds("OutOfBounds")
    } 
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0) return 0
    return this.items.reduce((acc, a) => acc + a)
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return (this.items.reduce((acc, a) => acc + a))/this.items.length
  }
}

new SortedList

module.exports = SortedList;

