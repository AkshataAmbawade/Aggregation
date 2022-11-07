const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
    type: "object",
    properties: {
        foo: { type: "integer", },
        bar: { type: "string" }
    },
    required: ["foo"],
    additionalProperties: false //if we make this as false then it will not accept the additinal properties and give error
}

const data = {
    foo: 1,
    bar: "abc",
    animal: 'cat' // this is nothing but the additional properties
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors[0].message)
else { console.log('Pagal Akshata') }