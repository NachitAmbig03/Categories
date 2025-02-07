
// import { fn } from "@storybook/test";

// import List from './List';

// export const ActionsData = {
//   onArchiveList: fn(),
//   onPinList: fn(),
// };

// export default {
//   component: List,
//   title: 'Task',
//   tags: ['autodocs'],
//   //👇 Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
//   args: {
//     ...ActionsData,
//   },
// };

// export const Default = {
//   args: {
//     task: {
//       id: '1',
//       title: 'Test Task',
//       state: 'TASK_INBOX',
//     },
//   },
// };

// export const Pinned = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };

import React from "react";
import List from "./List";

export default {
  title: "component/List",
  component: List,
};

export const Default = () => <List/>;