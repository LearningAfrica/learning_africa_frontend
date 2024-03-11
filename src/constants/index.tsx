export type AppStates =
  /*"application-app-authState" |*/ "learning-africa-auth";
export const APP_NAME = "application.co.ke-app-v1";

// const prefix = APP_NAME;

export const stateKeys: Record<AppStates, AppStates> = {
  // "application-app-authState": `${prefix}-authState`,
  "learning-africa-auth": `learning-africa-auth`,
};
export const defaultPagination = {
  hasNextPage: false,
  hasPrevPage: false,
  nextPage: null,
  prevPage: null,
  page: 1,
  limit: 10,
  totalDocs: 0,
  totalPages: 0,
};
