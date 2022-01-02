// Wrapper of Object.keys() which infers the type strictly.
export const strictKeys: <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<Key> = Object.keys;

// Wrapper of Object.values() which infers the type strictly.
export const strictValues: <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<Value> = Object.values;

// Wrapper of Object.entries() which infers the type strictly.
export const strictEntries: <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<[Key, Value]> =
    Object.entries;

// Wrapper of Object.fromEntries() which infers the type strictly.
export const strictFromEntries: <Key extends PropertyKey, Value>(entries: Array<[Key, Value]>) => Record<Key, Value> =
    Object.fromEntries;
