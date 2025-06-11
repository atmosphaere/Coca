import '../scss/about.scss';

// Components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAboutSlider } from './components/about/aboutSlider.js';
import { useTeamSlider } from './components/about/aboutSlider.js';
useTheme();
useBurger();
useAboutSlider();
useTeamSlider();
