import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
export const generateComponentStyle = ({ sx = {}, theme = {} }) => {
  return merge(cloneDeep(theme), cloneDeep(sx));
};
