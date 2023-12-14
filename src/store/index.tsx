import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import authSlice from './slices/authSlice';
import { combineReducers } from 'redux';
import { persistStore } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'web-learningafrica',
	version: 1,
	storage,
	// whitelist: ['quizPlay', 'auth']
};

const rootReducer = combineReducers({
	auth: authSlice,
	
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: {
		persist: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor };

export default store;
