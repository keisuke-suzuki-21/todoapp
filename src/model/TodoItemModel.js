let todoIdx = 0;

export class TodoItemModel{
    /**@param {number} TodoアイテムのID */
    id;
    /**@param {string} Todoアイテムのタイトル */
    title;
    /**@param {boolean} Todoアイテムの状態 */
    completed;

    constructor({title,completed}){
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}