import { arrayToEnum } from 'src/common/helpers/common/array_to_enum';

export const ColorScheme = arrayToEnum(['default', 'light', 'dark'] as const);

export const ThemeAction = arrayToEnum(['INVALID_ACTION', 'CHANGE_THEME'] as const);
