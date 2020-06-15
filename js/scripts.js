function ToDoList() {
  this.tasks = [];
}

ToDoList.prototype.addToList = function(task) {
  this.tasks.push(task);
}

ToDoList.prototype.removeFromList = function(remove) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (remove) {
        delete this.tasks[i];
        return true;
      }
    }
  }
  return false;
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
    console.log(toDoList)

    $("#output").show();
    $("ul").append("<li>" + "<input type='checkbox' name='done' value='yes'> " + chore.display() + "</li>");
    $("#done").show();
    $("#done").submit(function(event) {
      event.preventDefault();
      $("input:checkbox[name=done]:checked").each(function() {
        const complete = $(this).val();
        toDoList.removeFromList(complete);
      });
      $("li").remove();
      for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i]) {
          $("ul").append(toDoList[i]);
        }
      }
    });
    // $("#finished").show();
    // $("form#finished").submit(function(event) {
    //   event.preventDefault();
      
    // });
  });
});