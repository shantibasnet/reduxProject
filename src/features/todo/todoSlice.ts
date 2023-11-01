import { createSlice } from '@reduxjs/toolkit';


const data= [
    {
        id:1,
        name: "Do project",
        isCompleted: false,
    },
    {
      id:2,
      name: "Complete Quizes",
      isCompleted: false,
    }
  ]

export interface ITodoItem{
    id:number;
    name: string;
    isCompleted: boolean,
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
  reducers: {
    delete:(state, action) => {
      const data =state.data
      const deletedData = data.filter((task) => task.id != action.payload)
      return{
        ...state,
        data:deletedData
      }
    },
    
    add:(state,action) => {
     state.data.push(action.payload)
      
    },

    edit: (state, action) => {
      const data = state.data;
      const existingItem = data.find((task) => task.id === action.payload.id);
      if (existingItem) {
        existingItem.name = action.payload.name;
      }
    },
    
  },
});

export default TodoSlice;
