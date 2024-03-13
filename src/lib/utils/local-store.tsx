"use client";
let localStorage1 = null;

const localAppStore = (() =>
  typeof localStorage === "undefined"
    ? {
        setItem: () => {},
        getItem: (key: string) => key,
      }
    : localStorage)() as Storage;

export { localAppStore };
