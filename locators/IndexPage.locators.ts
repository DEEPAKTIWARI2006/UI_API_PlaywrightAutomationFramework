export const IndexPageLocators = {

    emailid: {
        primary: {
            type: 'role',
            value: {
                role: 'textbox',
                name: 'Email id for Sign Up'
            }
        },
        secondary: {
            type: 'xpath',
            value: "//input[@ng-model='emailid']"
        }
    },

    signup: {
        primary: {
            type: 'role',
            value: {
                role: 'button',
                name: 'Sign Up'
            }
        },
        secondary: {
            type: 'css',
            value: "#enterimg"
        }
    }


};