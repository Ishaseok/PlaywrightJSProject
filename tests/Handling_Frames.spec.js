const{test,request}=require('@playwright/test');

test('Frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes=page.frames();
    console.log('Number of frames are:', allframes.length);

    //Approach 1:Using frame name or url
    //const frame1=page.frame({name:'iframe_1'});
    const frame1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    frame1.fill('name="mytext1"','Welcome to Frame 1');
})