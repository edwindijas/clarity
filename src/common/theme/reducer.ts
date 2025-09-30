import { ThemeAction } from 'src/common/constants/theme';

import { Theme, ThemeAction as IThemeAction } from './types';

export const themeReducer = (state: Theme, action: IThemeAction): Theme => {
  if (action.type === ThemeAction.CHANGE_THEME) {
    const newMode = action.payload;
    return { ...state, mode: newMode };
  }
  return state;
};
