import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./usecases";


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput : '#new-todo-input',
    ClearCompleted : '.clear-completed',
    TodoFilters : '.filtro',
    PendingCountLabel: '#pending-count'
}


export const App =  ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo( todoStore.getCurrentFilter());
        renderTodos( ElementIDs.TodoList, todos  );
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }

    (( ) => {

        const app = document.createElement('div');
        app.innerHTML = html ;
        document.querySelector(elementId).append( app ); 
        displayTodos();
    })();

    // Referencias HTML 
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector( ElementIDs.TodoList);
    const ClearCompletedBtn = document.querySelector(ElementIDs.ClearCompleted);
    const filtersLI = document.querySelectorAll( ElementIDs.TodoFilters );

    newDescriptionInput.addEventListener('keyup', (event) => {
        console.log( event )
        if ( event.keyCode !== 13) return;
        if ( event.target.value.trim().lenght === 0) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if ( !element || !isDestroyElement ) return; 

     
        todoStore.deleteTodo( element.getAttribute('data-id'));
        displayTodos();
    });

    ClearCompletedBtn.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersLI.forEach( element => {
        element.addEventListener('click', (element) => {
            filtersLI.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
                break;
            }

            displayTodos();
        }) 
    })


}