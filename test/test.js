const mocha = require('mocha');
const assert = require('assert');
const Person = require('../models/person');

describe("Save records", ()=>{
    it("Saves persons info to the database", (done)=>{
        let person = Person({
            name: "Joe",
            dateOfBirth: new Date(2005,12, 5)
        });
        person.save(done);    

    });
})