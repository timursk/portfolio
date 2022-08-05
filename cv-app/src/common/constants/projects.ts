import rslang1 from '../../assets/rslang1.png';
import rslang2 from '../../assets/rslang2.png';
import pma1 from '../../assets/pma1.png';
import rick1 from '../../assets/rick2.png';
import rick2 from '../../assets/rick3.png';
import christmas1 from '../../assets/christmas1.png';
import christmas2 from '../../assets/christmas2.png';

export const PROJECTS = [
  {
    link: 'rslang',
    name: 'Rslang',
    description:
      'Application for learning English. Implemented authorization by token, a textbook with words, the ability to add words to the complex and studied categories, interactive games for learning, statistics with charts',
    images: [rslang1, rslang2],
    stack: 'Pure React, Typescript, CSS Modules',
  },
  {
    link: 'project-management-app',
    name: 'Project-management-app',
    description:
      'Kanban board, similar to Trello, but with a common board for all users. Includes columns and tasks. User authorization using a token (also editing and deleting a profile). Implemented drag-and-drop for tasks and columns, renaming and deleting all elements, modals. Implemented react lazy, suspense',
    images: [pma1],
    stack: 'React 18, Redux Toolkit, TypeScript, Emotion, formik/yup, i18n, react-beautiful-dnd',
  },
  {
    link: 'rick-morty',
    name: 'Rick-morty',
    description:
      'Heroes list. Separate page for every card. Includes form page with validation and adding cards. Covered in tests',
    images: [rick1, rick2],
    stack: 'React, Redux, TypeScript, React-testing-library, React-hook-form',
  },
  {
    link: 'christmas-task',
    name: 'Christmas',
    description:
      'Christmas tree decorating game. Includes a page with a list of toys. You can filter, sort, add to favorites. Second page interactive game with drag-and-drop of toys while maintaining position on the tree',
    images: [christmas1, christmas2],
    stack: 'TypeScript, SCSS, Bootstrap, nouislider, webpack',
  },
];
