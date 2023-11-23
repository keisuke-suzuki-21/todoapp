import { element } from "./html-util";

export class TodoItemView{
    /**
     * Todoアイテムのhtml要素を返す。
     * @params {TodoItemModel} todoItem
     * @params {function({id:number, completed:boolean})} onUpdateTodoチェックボックスの更新イベントリスナー
     * @params {function({id:number})} onDeleteTodo削除ボタンのクリックイベントリスナー
     * @params {Element}
     */
    createElement(todoItem,{onUpdateTodo, onDeleteTodo}){
        const todoItemElement = todoItem.completed
        ? element`<li><input type="checkbox" class="checkbox" checked>
            <s>${todoItem.title}</s>
            <button class="delete">x</button>
            </li>`
        : element`<li><input type="checkbox" class="checkbox">
            ${todoItem.title}
            <button class="delete">x</button>
        </li>`;
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            // コールバック関数に変更
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed
            });
        });
        const deleteButtonElement = todoItemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", () => {
            // コールバック関数に変更
            onDeleteTodo({
                id: todoItem.id
            });
        });
        // 作成したTodoアイテムのHTML要素を返す
        return todoItemElement;
    }
}