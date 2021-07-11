import { TaskCollection } from "./TaskCollections";

let task01: TaskCollection = new TaskCollection()

task01.addTodo("bring mangoes");
task01.addTodo("bring fruits");
task01.addTodo("bring groceries");
task01.addTodo("bring write some code");
task01.taskDone(1);
task01.getTaskById(4);
task01.printAll();