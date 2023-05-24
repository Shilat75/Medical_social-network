//import { expect } from "chai";
const { expect } = require("chai");
describe('Arrays', ()=>{

    describe('#sort', ()=>{

        it('Sorting names arrray', ()=>{
            var names = ['Dani', 'Moshe', 'Adam'];
            expect(names.sort()).to.be.eql(['Adam', 'Dani', 'Moshe']);
        })

    })
})