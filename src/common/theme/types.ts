import { ColorScheme , ThemeAction as ThemeActionConst } from 'src/common/constants/theme';

import { lightColors } from './light';
import { DeepString } from '../types';


export type ThemeColors = DeepString<typeof lightColors>;

export type ColorSchemeType = keyof (typeof ColorScheme);

export type Theme = {
  colors: ThemeColors;
  mode: ColorSchemeType;
};


export type ThemeActionChangeScheme = { type: (typeof ThemeActionConst)['CHANGE_THEME'], payload: ColorSchemeType };

export type InvalidThemeAction = { type: 'INVALID_ACTION'; payload?: never };

export type ThemeAction = ThemeActionChangeScheme | InvalidThemeAction;
