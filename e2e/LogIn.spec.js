describe('Log In with exist firebase Account', () => {
    beforeEach(async () => {
        await device.reloadReactNav
    })
    
    it('should show appIcon and two buttons', () =>{
        await expect(element(by.id('appIcon'))).toBeVisible()
        await expect(element(by.id('SignUpBtn'))).toBeVisible()
        await expect(element(by.id('LogInBtn'))).toBeVisible()
    })

    it('should show the sign up page after clicking the SignUp button', () => {
        await element(by.id('SignUpBtn')).tap()
        await expect(element(by.id('AccountSignForm'))).toBeVisible()
    })

    // it('should populate the sign up page', () => {
    //     await element(by.id('SignUpBtn')).tap()
    //     await 
    // })

    it('should show the log in page after clicking the LogIn button',() => {
        await element(by.id('LogInBtn')).tap()
        await expect(element(by.id('AccontFnImage'))).toBeVisible()
        await expect(element(by.id('AccountFnLogin'))).toBeVisible()
    })
})