import { AnyAction } from "redux";
import USER_SESSION_INITIAL_STATE from "./userSession.initialState";
import {
    CREATE_USER_SESSION,
    NO_CHANGE_USER_SESSION,
    RESTORE_USER_SESSION,
    SAVE_USER_SESSION, SessionState, SET_GRAPH_HORIZONTAL, SET_HIGHLIGHTING_MODE, SET_SELECTED_OBJECT_TYPES,
    SET_THRESHOLD,
    UPDATE_USER_SESSION,
    SET_ALIGNMENT_MODE, SET_LEGEND_POSITION, SET_EDGE_LABEL_MODE, SET_CONSTRAINT_GRAPH_STATE, DELETE_CONSTRAINT_GRAPH, SET_CONSTRAINT_PATTERN_STATE
} from "./userSession.types";

const sessionStateReducer = (session = USER_SESSION_INITIAL_STATE, action: AnyAction): SessionState => {
    switch (action.type) {
        case CREATE_USER_SESSION:
            return {
                ...session,
                ...action.payload
            }
        case SAVE_USER_SESSION:
            return {
                ...session,
                ...action.payload
            }
        case RESTORE_USER_SESSION:
            return {
                ...session,
                ...action.payload
            }
        case UPDATE_USER_SESSION:
            return {
                ...session,
                ...action.payload
            }
        case SET_THRESHOLD:
            return {
                ...session,
                ...{
                    threshold: action.payload
                }
            }
        case SET_SELECTED_OBJECT_TYPES:
            return {
                ...session,
                ...{
                    selectedObjectTypes: action.payload
                },
                ...(action["alreadySelectedAllObjectTypesInitially"] !== undefined ? {
                    alreadySelectedAllObjectTypesInitially: action.alreadySelectedAllObjectTypesInitially
                } : {})
            }
        case SET_HIGHLIGHTING_MODE:
            return {
                ...session,
                highlightingMode: action.payload
            }
        case SET_GRAPH_HORIZONTAL:
            return {
                ...session,
                graphHorizontal: action.payload
            }
        case SET_ALIGNMENT_MODE:
            return {
                ...session,
                alignmentMode: action.payload
            }
        case SET_LEGEND_POSITION:
            return {
                ...session,
                legendPosition: action.payload
            }
        case SET_EDGE_LABEL_MODE:
            return {
                ...session,
                edgeLabelMode: action.payload
            }
        case SET_CONSTRAINT_GRAPH_STATE:
            return {
                ...session,
                constraintGraphState: action.payload
            }
        case DELETE_CONSTRAINT_GRAPH:
            return {
                ...session,
                constraintGraphState: session.constraintGraphState.filter((graph) => graph.id !== action.payload)
            }

        case SET_CONSTRAINT_PATTERN_STATE:
            return {
                ...session,
                constraintPatternState: action.payload
            }
        case NO_CHANGE_USER_SESSION:
            return session
        default: return session
    }
}

export default sessionStateReducer

export interface Action {
    type: string,
    payload: {}
}
