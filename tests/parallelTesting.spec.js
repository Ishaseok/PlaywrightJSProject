const{test} =require('@playwright/test');

//test.describe.configure({mode:'parallel'})
test.describe.configure({mode:'seriel'})
test.describe('group1',()=>{

test('test1',()=>{

    console.log("This is test1");
})
test('test2',()=>{

    console.log("This is test1");
})
test('test3',()=>{

    console.log("This is test1");
})
test('test4',()=>{

    console.log("This is test1");
})
test('test5',()=>{

    console.log("This is test1");
})

})