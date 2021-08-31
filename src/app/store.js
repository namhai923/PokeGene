import collectionReducer from "features/collection/collectionSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    collection: collectionReducer,
  },
});
