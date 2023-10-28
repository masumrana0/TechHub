import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAllFilup: false,
  cpu: [],
  motherborad: [],
  ram: [],
  powerSupply: [],
  storage: [],
  monitor: [],
  GrapihisCard: [],
  casing: [],
};

const productSlice = createSlice({
  name: "productstate",
  initialState,
  reducers: {
    storeCpu: (state, action) => {
      if (!state.cpu.length == 0) {
        state.cpu = [];
        state.isAllFilup = false;
      }
      state.cpu.push(action.payload);
      console.log(state.cpu);
    },
    storeMotherBoard: (state, action) => {
      if (!state.motherborad.length == 0) {
        state.motherborad = [];
        state.isAllFilup = false;
      }
      state.motherborad.push(action.payload);
    },
    storeRam: (state, action) => {
      if (!state.ram.length == 0) {
        state.ram = [];
        state.isAllFilup = false;
      }
      state.ram.push(action.payload);
    },
    storePowerSupply: (state, action) => {
      if (!state.powerSupply.length == 0) {
        state.powerSupply = [];
        state.isAllFilup = false;
      }
      state.powerSupply.push(action.payload);
    },
    storeStorage: (state, action) => {
      if (!state.storage.length == 0) {
        state.storage = [];
        state.isAllFilup = false;
      }
      state.storage.push(action.payload);
    },
    storeGraphicCard: (state, action) => {
      if (!state.GrapihisCard.length == 0) {
        state.GrapihisCard = [];
        state.isAllFilup = false;
      }
      state.GrapihisCard.push(action.payload);
    },
    storeCasing: (state, action) => {
      if (!state.casing.length == 0) {
        state.casing = [];
        state.isAllFilup = false;
      }
      state.casing.push(action.payload);
    },
    storeMonitor: (state, action) => {
      if (!state.monitor.length == 0) {
        state.monitor = [];
        state.isAllFilup = false;
      }
      state.storage.push(action.payload);
    },

    isAllFilup: (state) => {
      if (
        state.cpu.length > 0 &&
        state.motherborad.length > 0 &&
        state.ram.length > 0 &&
        state.powerSupply.length > 0 &&
        state.storage.length > 0 &&
        state.monitor.length > 0
      ) {
        state.isAllFilup = true;
      }
    },
  },
});

export const {
  storeCpu,
  storeMotherBoard,
  storeRam,
  storeStorage,
  storeGraphicCard,
  storePowerSupply,
  storeCasing,
  storeMonitor,
} = productSlice.actions;

export default productSlice.reducer;
