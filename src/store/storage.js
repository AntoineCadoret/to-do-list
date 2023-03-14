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
            console.log(action.payload);
            state.task.push(action.payload);
            console.log(state.task[1]);
        },
        removeTask: (state, action) => {
            console.log("remove");
        },
        updateTask: (state, action) => {
            console.log("update");
        },
    },
});
const store = configureStore({
    reducer: { sections: sectionSlice.reducer, task: taskSlice.reducer },
});

export const sectionAction = sectionSlice.actions;
export const taskAction = taskSlice.actions;

export default store;
