'use strict';

function Employee(employeeObj) {
  this.name = employeeObj.name;
  this.email = employeeObj.email;
  this.age = employeeObj.age;
}

Employee.allEmployees = [];

Employee.prototype.render = function() {

  $('main').append('<section class="clone"></section>');
  const $employeeClone = $('section[class="clone"]');
  let $employeeHtml = $('#employee-template').html();

  $employeeClone.html($employeeHtml);

  //Fill in properties of each object
  $employeeClone.find('h2').text(this.name);
  $employeeClone.find('p').text(this.email);
  $employeeClone.find('p').text(this.age);

  $employeeClone.removeClass('clone');
  $employeeClone.addClass(this.name);
};

Employee.readJson = () => {
  $.get('sample-data.json')
    .then(data => {
      data.forEach(element => {
        Employee.allEmployees.push(new Employee(element));
      });
    }, 'json')

    .then(Employee.loadEmployees);
};

Employee.loadEmployees = () => {
  Employee.allEmployees.forEach(element => element.render());
}