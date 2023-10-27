import { createSlice } from '@reduxjs/toolkit';


const data= [
    {
        id:1,
        task: "Do project",
    },
    {
      id:1,
      task: "Complete Quizes",
    }
  ]

interface ITodoItem{
    id:number;
    task: string;
}

interface ITodoData{
    isLoading: boolean;
    data:Array<ITodoItem>;
}
const TodoSlice = createSlice({
  name: 'Todo',
  initialState: {
    isLoading:false,
    data,
  } as ITodoData,
  reducers: {},
});

export default TodoSlice;
