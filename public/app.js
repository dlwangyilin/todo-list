$(document).ready(function () {
    $.getJSON('/api/todos')
        .then(data => {
            addTodos(data);
        })
        .catch(err => {
            console.log(err);
        });
    $('#todoInput').keypress(event => {
        if (event.which === 13) {
            createTodo();
        }
    });
    $('.list').on('click', 'li', function () {
        updateTodo($(this));
    });
    $('.list').on('click', 'span',function (event) {
        event.stopPropagation();  // Stop calling li alert
        removeTodo($(this).parent());
    });

});

const addTodo = (todo) => {
    const newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

const addTodos = (todos) => {
    // add todos to page here
    todos.forEach((todo) => {
        addTodo(todo);
    })
}

const createTodo = () => {
    // send request to create new todo
    const userInput = $('#todoInput').val();
    $.post('/api/todos', {
        name: userInput
    })
        .then(newTodo => {
            $('#todoInput').val(' ');
            addTodo(newTodo);
        })
        .catch(err => {
            console.log(err);
        })
};

const updateTodo = (todo) => {
    const updateUrl = '/api/todos/' + todo.data('id');
    const isDone = !todo.data('completed');
    const updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
        .then(updatedTodo => {
            console.log(updatedTodo);
            todo.data('completed', isDone);
            todo.toggleClass("done");
        })
        .catch(err => {
            console.log(err);
        })
}

const removeTodo = (todo) => {
    const deleteUrl = '/api/todos/' + todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
        .then((data) => {
            todo.remove();
        })
        .catch(err => {
            console.log(err);
        })
}