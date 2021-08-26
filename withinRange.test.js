//we create here our own matchers withInRange to do the test;


expect.extend({
    withInRange(received,floor,ceiling){
        const pass = received>=floor && received<=ceiling;
        if(pass){
            return {
                message:()=>`${received} is within range ${floor} and ${ceiling}`,
                pass:true
            }
        }else{
            return{
                message:()=>`${received} is not within range ${floor} and ${ceiling}`,
                pass:false
            }
        }
    }
});

test(`numeric ranges`,()=>{
    expect(5).withInRange(1,9);
})