import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);
// Edit Note task
router.route('/notes').get(NoteController.editNote);
// Delete a Lane by laneId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;
