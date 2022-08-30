describe('Main Page',() =>{
    it('Noi nghich ngom cua anh', async () => {
        await browser.url('https://www.thegioididong.com/');
        const text = await $('.main-menu');
        const elements = await text.$$(function() {
            return this.querySelectorAll('li'); // Element[]
        })
        let name = []
        console.log('sdfsdfsdfsd elements', elements)
        elements.forEach(async (element) => {
           const result = await element.getAttribute('href')
           name.push(result)
        });

        console.log('nam dfgdfgdfgdfgfde', name)

   // dtdd// dtdd
        // await browser.pause(2000)
        // const resutl = await link.getAttribute('href') 
        // await browser.url(`https://www.thegioididong.com/${resutl}`);
        // await browser.pause(3000)
        // const resutl2 = await link2.getAttribute('href') // dtdd
        // await browser.pause(2000)
        // await browser.url(`https://www.thegioididong.com/${resutl2}`);
        // await browser.pause(2000)
        // await browser.pause(2000)
        // const resutl23 = await link3.getAttribute('href')
        // await browser.pause(2000)
        // await browser.url(`https://www.thegioididong.com/${resutl23}`);
        // await browser.pause(2000)
    });
});