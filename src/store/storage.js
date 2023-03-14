import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { sections: ['Backlog', 'On going', 'Finish']};

const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        addSection: (state, action) => {
            state.sections.push(action.payload);
         },
        removeSection: (state, action) => {
            console.log(action.payload);
            const index = state.sections.indexOf(action.payload);
            state.sections.splice(index, 1);
        },
    },
});

const store = configureStore({
    reducer: { sections: sectionSlice.reducer },
});

export const sectionAction = sectionSlice.actions;

export default store;
