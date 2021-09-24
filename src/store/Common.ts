import { Action, Reducer } from 'redux';

/**
 * Type which represents a map whose values are the action creators.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyActionCreatorMap = Record<string, (...args: any) => Action>;

/**
 * Extract available actions from ActionCreatorMap.
 *
 * @param ActionCreatorMap Object with the **const assertion**.
 */
type AvailableActions<ActionCreatorMap extends AnyActionCreatorMap> = ReturnType<
    ActionCreatorMap[keyof ActionCreatorMap]
>;

/**
 * 'Smart' reducer which infers the action types from the given action creator map.
 *
 * @param State Redux state.
 * @param ActionCreatorMap Object with the **const assertion**.
 */
export type StrictReducer<State, ActionCreatorMap extends AnyActionCreatorMap> = Reducer<
    State,
    AvailableActions<ActionCreatorMap>
>;
