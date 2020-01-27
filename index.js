/**
 * Examples for using & accessing symbols
 */
const usingSymbols = () => {
  const uniqueSymbol = Symbol("Debugging Identifier"); // Name serves no purpose, just for debugging
  const anotherSymbol = Symbol("Debugging Identifier");

  log("Symbol() === Symbol()", uniqueSymbol === anotherSymbol);

  obj = {
    foo: "bar",
    bar: "foo",
    [uniqueSymbol]: "baz", // Unique key on object
    [anotherSymbol]: "foobar" // No risk of naming collisions
  };
  log("Object with symbols:", obj);

  // JSON only allows for strings as keys
  // so converting will exclude symbol key value pairs
  log("Symbols lost when converted to JSON", JSON.parse(JSON.stringify(obj)));

  /**
   * Accessing Symbols when declaration is in scope
   */
  const inScope = () => {
    // Accessing Symbol Property Value
    // ===============

    log(
      "Accessing value from symbol directly if declared variable is accessible",
      `${obj[uniqueSymbol]}, ${obj[anotherSymbol]}`
    );
  };

  inScope();
  outOfScope();
};

/**
 * Accessing symbols when symbol variable is not accessible
 */
const outOfScope = () => {
  log("Symbols not included in Object.keys or for in loops", Object.keys(obj));
  log("Symbols are included in Reflect.ownKeys", Reflect.ownKeys(obj));

  // Logging just symbols
  Reflect.ownKeys(obj)
    .filter(key => typeof key === "symbol")
    .forEach(sym =>
      log("Logging Just Symbols - Symbol found: ", { key: sym, val: obj[sym] })
    );
};

/**
 * Helper fn to log data
 *
 * @param {String} title Title for log
 * @param {Any} val Logged data
 */
const log = (title, val) => {
  console.log(`\n${title}\n=============\n`, val);
};

let obj = {}; // Declaring obj globally so still accessible by outOfScope fn
usingSymbols();
