function toDoList() {
  this.tasks = [];
}

toDoList.prototype.addToList = function(task) {
  this.tasks.push(task);
}

function task(chore) {
  this.chore = chore;
}

task.prototype.display() = function() {
  return chore;
}

$(document).ready(function() {
  $("form#add-list").submit(function(event) {
    event.preventDefault();

    const chore = new task($("input#task").val());
    toDoList.addToList(chore);

    $("#list").text(task.display());
  });
});