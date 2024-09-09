export class Model{
    user;
    items;

    constructor(){
        this.user=("Melisa Demir-Bilgisayar Mühendisi");
        this.items=[
                new ToDoItem("Spor",true),
                new ToDoItem("Kahvaltı",false),
                new ToDoItem("Kitap Okumak",false),
                new ToDoItem("Sinema",false)
              
          ];
    }
    }
    export class ToDoItem{
        description;
        action;

        constructor(description:string,action:boolean){
            this.description =description;
            this.action =action;
        }
}