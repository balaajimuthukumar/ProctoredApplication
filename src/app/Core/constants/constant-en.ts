export const CONSTANTS = {
    homeTitle: 'Home',
    timerdelay: 3000,
    timerTitle:'Time Left: ',
    loginPageDescription: 'Please sign in with your credentials',
    googleSSOTitle: 'Sign in with Google',
    githubSSOTitle: 'Sign in with GitHub',
    fullScreenToolTip: 'Full screen mode',
    testStartPage: {
        practiceTestInsttruction: 'Please read the instructions carefully before starting the test. This is a practice test and will be timed but will not be graded.',
        testInstruction: 'Please read the instructions carefully before starting the test. This is a graded test and will be timed.',
    }
}

export interface PageDetails {
    title: string,
    logo: string,
}

export interface UserDetails {
    loggedinuser: string,
    loggedinuserimage: string,
    loggedinuseremail: string,
    loggedinuserid: number
}

