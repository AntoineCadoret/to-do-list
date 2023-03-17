import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialSectionState = { sections: ['Backlog', 'On going', 'Finish'] };
const initialTaskState = {
    task: []};

const sectionSlice = createSlice({
    name: 'section',
    initialState: initialSectionState,
    reducers: {
        addSection: (state, action) => {
            state.sections.push(action.payload);
         },
        removeSection: (state, action) => {
            const index = state.sections.indexOf(action.payload);
            state.sections.splice(index, 1);
        },
        updateSection: (state, action) => {
            const index = state.sections.indexOf(action.payload.oldTitle);
            state.sections[index] = action.payload.newTitle;
        },
    },
});

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTaskState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        deleteTask: (state, action) => {
            const index = state.task.indexOf(action.payload);
            state.task.splice(index, 1);
        },
        updateTask: (state, action) => {
            const index = action.payload.index;
            state.task[index] = action.payload.newTask;
        },
    },
});
const store = configureStore({
    reducer: { sections: sectionSlice.reducer, task: taskSlice.reducer },
});

export const sectionAction = sectionSlice.actions;
export const taskAction = taskSlice.actions;

export default store;
