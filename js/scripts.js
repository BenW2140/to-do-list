function ToDoList() {
  this.tasks = [];
}

ToDoList.prototype.addToList = function(task) {
  this.tasks.push(task);
}

function Task(chore) {
  this.chore = chore;
}

Task.prototype.display = function() {
  return this.chore;
}

$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    event.preventDefault();

    let toDoList = new ToDoList();
    const chore = new Task($("input#task").val());
    toDoList.addToList(chore);

    $("#output").show();
    $("ul").append("<li>" + "<input type='radio' name='done' value='yes'> " + chore.display() + "</li>");
    // $("#finished").show();
    // $("form#finished").submit(function(event) {
    //   event.preventDefault();
      
    // });
  });
});