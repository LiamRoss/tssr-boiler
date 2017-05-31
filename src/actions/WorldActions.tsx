// Export action types.
export type WorldAction = {
  type: 'CHANGE_WORLD',
  name: string
};

// Export action generator
export const changeWorld = (name: string): WorldAction => ({
  type: 'CHANGE_WORLD',
  name
});