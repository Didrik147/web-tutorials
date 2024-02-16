// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }


interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "Name of the Wind"}
}

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { title: "Yoshi"}
}

console.log(docOne, docTwo)