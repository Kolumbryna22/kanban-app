import { connect } from 'react-router';
import Lane from './lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
    laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
});

const mapDispatchToProps = {
    ...laneActions,
    addNote: createNote,
    createLane: createLaneRequest,
    addNote: createNoteRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lane);
