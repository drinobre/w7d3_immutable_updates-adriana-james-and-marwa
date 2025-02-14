// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  return [...array, item];
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  return [item, ...array];
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  let newArray = [...array.slice(0, index), item, ...array.slice(index + 1)];
  // console.log(newArray);
  return newArray;
}

// const array = ["bread", "cheese", "ham", "bread"];
// replaceItem(array, 2);

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  let newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  // console.log(newArray);
  return newArray;
}
// const array = ["bread", "cheese", "ham", "bread"];
// removeItem(array, 1);

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  console.log(object);
  console.log(newName);
  return { ...object, name: newName };
}
// updateName({ name: "Lambert", age: 99, height: "6ft" }, "Lammy");

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }

// NOT WORKING
export function toggleTeaStatus(object) {
  console.log(object);
  return { ...!object };
}

toggleTeaStatus({ name: "Ben", needsACupOfTea: true });

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {}
