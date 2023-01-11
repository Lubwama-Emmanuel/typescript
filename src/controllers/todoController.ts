import {Todo} from '../models/todoModel';
import {Request, Response, NextFunction} from 'express';

const todoArray: Todo[] = []

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    const id = Math.random();
    const {text} = req.body;

    const newTodo: Todo = new Todo(id, text);
    todoArray.push(newTodo)

    res.statusCode(201).json({
        message: 'Created perfectly',
        createdTodo: newTodo
    })
}

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    res.statusCode(200).json({
        todos: todoArray
    })
}