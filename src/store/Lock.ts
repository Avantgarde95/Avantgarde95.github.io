import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Store which 'locks' or 'unlocks' the device.
 */
export interface LockState {
    isLocked: boolean;
}

const initialState: LockState = {
    isLocked: true,
};

export const lockSlice = createSlice({
    name: 'lock',
    initialState,
    reducers: {
        setLock: (state, action: PayloadAction<{ isLocked: boolean }>) => {
            state.isLocked = action.payload.isLocked;
        },
    },
});
