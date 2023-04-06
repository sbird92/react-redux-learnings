import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export enum StopwatchButtonAction {
  StartStop= "startStop",
  Split = "split",
  Reset = "reset" 
}

export enum StopwatchChange {
  Start= "start",
  Stop= "stop",
  Split = "split" 
}

export interface StopwatchSnapshot {
  Action: StopwatchChange,
  Timestamp: Date
}

export interface StopwatchState {
  IsRunning: boolean,
  StopwatchSnapshots: StopwatchSnapshot[]
}

const init: StopwatchState = {
  IsRunning: false,
  StopwatchSnapshots: []
}
 
const stopwatchSnapshotsSlice = createSlice({
  name: "stopwatchSnapshots",
  initialState: {
    value: init
  },
  reducers: {
    stopwatchSnapshotsAdd: (state, action: PayloadAction<StopwatchSnapshot>) => {
      const { IsRunning } = state.value;
      let current: 
    }
  }
})
