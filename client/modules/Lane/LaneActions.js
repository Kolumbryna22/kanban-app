import callApi from '../../util/apiCaller';
import { normalize } from 'normalizr';
import { lanes } from '../../util/shema';

// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const CREATE_LANES = 'CREATE_LANES';
export const CREATE_NOTES = 'CREATE_NOTES';

// Export Actions
export function createLane(lane) {
    return {
        type: CREATE_LANE,
        lane: {
            notes: [],
            ...lane,
        }
    };
}

export function updateLane(laneId) {
    return {
        type: UPDATE_LANE,
        laneId
    };
}

export function deleteLane(laneId) {
    return {
        type: DELETE_LANE,
        laneId
    };
}

export function fetchLanes() {
    return (dispatch) => {
        return callApi('lanes').then(res => {
            const normalized = normalize(res.lanes, lanes);
            const {lanes: normalizedLanes} = normalized.entities;

            dispatch(createLanes(normalizedLanes));
            dispatch(createNotes(notes));
        });
    };
}

export function createLanes(lanesData) {
    return {
        type: CREATE_LANES,
        lanes: lanesData,
    };
}

export function createNotes(notesData) {
    return {
        type: CREATE_NOTES,
        notes: notesData,
    };
}

export function createLaneRequest(lane) {
    return (dispatch) => {
        return callApi('lanes', 'post', lane).then(res => {
            dispatch(createLane(res));
        });
    };
}
