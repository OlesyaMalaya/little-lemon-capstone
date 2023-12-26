const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
export const initialDate = tomorrow.toISOString().slice(0, 10);

const date = new Date();
date.setDate(date.getDate() + 4);
export const mockDate = date.toISOString().slice(0, 10);