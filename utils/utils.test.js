const expect = require('expect');
const utils = require('./utils');

describe('Utils', () =>{

        describe('#add',() =>{
            it('should add two numbers', () =>{
                var res = utils.add(33,11);
                expect(res).toBe(44).toBeA('number');
                
            });        
        })
    
    it('should async add two numbers', (done) =>{
        utils.asyncAdd(4,4, (sum) =>{
            expect(sum).toBe(8).toBeA('number');
            done();
        });
    });
    
    it('should square two numbers', () =>{
        var res = utils.square(4);
        expect(res).toBe(16).toBeA('number');
       
    });

    it('Should async square to numbers', (done) =>{
        utils.asyncSquare(4, (sum) =>{
            expect(sum).toBe(16).toBeA('number');
            done();
        })
    });    
    
});

it('should set firstName and lastName', () =>{
    var user ={location:'Dublin', age:25};
    var res = utils.setName(user,'Mark Connor');
    
    expect(res).toInclude({
        firstName: 'Mark',
        lastName: 'Connor',
        location:'Dublin', 
        age:25
    }).toBeA('object') 
});

// it('should expect some values', () =>{
//     //expect(12).toNotBe(11);
//     //expect({name: 'Mark'}).toEqual({name: 'Mark'})
//     //expect([2,3,4]).toInclude(2);
//     expect({
//         name: 'Mark',
//         age: 24,
//         location: 'Dublin'
//     }).toInclude({
//         age: 24
//     })
// });


