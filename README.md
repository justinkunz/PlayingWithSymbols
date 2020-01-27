# Playing with Symbols

Just playing with the Symbol JavaScript data type.

## Key Notes

- Unique. `Symbol() !== Symbol()`.
- Can be a key on object. _(previous to es6, only strings could be object keys)_
- Symbol keys on objects are not included in `Object.keys()`
- Symbol keys are included in `Reflect.ownKeys()`
