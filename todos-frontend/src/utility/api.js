const APIUrl = '/api/todos/';

export const getTodos = async () => {
    return fetch(APIUrl)
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    // return error message
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                } else {
                    let err = {errorMessage: 'Please try later, server is not running'};
                    throw err;
                }
            }
            return res.json();
        })
}

export const createTodo = async (val) => {
    return fetch(APIUrl, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name: val})
    })
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    // return error message
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                } else {
                    let err = {errorMessage: 'Please try later, server is not running'};
                    throw err;
                }
            }
            return res.json();
        })
}

export const removeTodo = async (id) => {
    const deleteUrl = APIUrl + id;
    return fetch(deleteUrl, {
        method: 'delete'
    })
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    // return error message
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                } else {
                    let err = {errorMessage: 'Please try later, server is not running'};
                    throw err;
                }
            }
            return res.json();
        })
}

export const updateTodo = async (todo) => {
    const updateUrl = APIUrl + todo._id;
    return fetch(updateUrl, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({completed: !todo.completed})
    })
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    // return error message
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                } else {
                    let err = {errorMessage: 'Please try later, server is not running'};
                    throw err;
                }
            }
            return res.json();
        });
}