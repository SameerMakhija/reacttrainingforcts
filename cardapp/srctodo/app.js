import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {

    // const baseURL = 'http://localhost:3000';

    constructor(){
        super()
        this.state = {todos: [], todo: ''}
        // this.addTodo = this.addTodo.bind(this)

    }
    componentWillMount() {
        fetch('http://localhost:3000/todos')
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            this.setState({todos: data})
        })
        // axios.get('http://localhost:3000/todos')
        // .then((res) => {
        //     console.log(res)
        //     this.setState({todos: res.data})
        // })
        // .catch((err) => {console.log(err)})
    }

    deleteTodo(index){
        console.log('Delete call - Ajax');
        console.log(index)
        axios.delete('http://localhost:3000/todo/' + index, )
          .then((res) => {
            console.log(res)
            this.setState({todos: res.data})
        })
        .catch((err) => {console.log(err)})
    }

    addTodo(){
        console.log('Post call - Ajax', this.todo.value);
        console.log(this.state.todo)
        axios.post('http://localhost:3000/todo', {
            text: this.todo.value
          })
          .then((res) => {
            console.log(res)
            this.todo.value = ''
            this.setState({todos: res.data, todo:''})
        })
        .catch((err) => {console.log(err)})
    }


    handleTodoChange(event){
        // console.log(event.target.value)
        this.setState({todo: event.target.value})
    }

    render() {
        var list = this.state.todos.map((todo,i)=> <li key={i} class="list-group-item">{todo.text}<span class="glyphicons glyphicons-remove" onClick={this.deleteTodo.bind(this, i)}> X</span></li>)

        return (
            <div>
             <div class="form-group">
                <label for="addTodoItem">Add a todo!!</label>
                {/* <input type="text" class="form-control" id="addTodoItem" placeholder="Buy milk..." value={this.state.todo} onChange={this.handleTodoChange.bind(this)}/> */}
                <input type="text" ref={(todo)=> this.todo=todo} class="form-control" id="addTodoItem" placeholder="Buy milk..." />
                <button onClick={this.addTodo.bind(this)}>Add</button>
            </div>    

            <label>Display the todo list here</label>
            <ul class="list-group">
                {list}
            </ul>
            </div>   
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('mount-point'))

export default App;