import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priseSwitcher.js';

useTheme();
useBurger();
usePriceSwitcher();