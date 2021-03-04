/*  
    This type is needed so we can pass a function and notes with current
    note index between components
*/
import { SyntheticEvent } from 'react';
import { NoteIndex } from './NoteIndex';
import { Note } from './Note';
export interface NoteAndFunction {
  updateSelected: (e: SyntheticEvent) => void;
  updateRead: () => void;
  note: NoteIndex;
}

export const defaultNoteAndFunctionState: NoteAndFunction = {
  updateSelected: (): void => {},
  updateRead: (): void => {},
  note: {
    notes: [],
    currentNoteIndex: 0,
  },
};
