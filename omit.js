// omit() method that removes a property from an Object

const omit = (key, obj) => ({[key]:omitted, ...rest} = obj, rest)

console.log(omit(['baz'], { foo: 1, bar: 2, baz:3 }))