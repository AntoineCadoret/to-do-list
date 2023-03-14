import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialSectionState = { sections: ['Backlog', 'On going', 'Finish'] };
// const initialTaskState =
// [{ name: '', type: '', dueDate: '', completionLevel: '' }]

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

// const taskSlice = createSlice({
//     name: 'task',
//     initialTaskState:
// });
const store = configureStore({
    reducer: { sections: sectionSlice.reducer },
});

export const sectionAction = sectionSlice.actions;

export default store;
