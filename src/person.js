import $ from "jquery";
export default class Person {
  constructor(firstName, lastName) {
    // this.(variable in parameter box) the value is passed into them
    // otherwise you can specify what it will be = to
    // like an empty array for example
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //   adding method
  display(elementId) {
    $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`);
  }
}
