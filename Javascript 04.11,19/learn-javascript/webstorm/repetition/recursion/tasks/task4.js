let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  if (Array.isArray(list)) {
    return list.forEach(item => item.next);
  }
  else {
    for (let keys of Object.values(list)) {
      printList(keys);
      console.log(keys);
    }
  }
}

console.log(printList(list));

