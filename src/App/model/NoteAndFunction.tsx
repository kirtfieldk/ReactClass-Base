/*  
    This type is needed so we can pass a function and notes with current
    note index between components
*/
import {SyntheticEvent} from 'react'
import {NoteIndex} from './NoteIndex'
export interface NoteAndFunction{
    function: (e: SyntheticEvent ) => void,
  note: NoteIndex
}