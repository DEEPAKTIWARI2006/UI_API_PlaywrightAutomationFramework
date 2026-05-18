export const LoginPageLocators = {

    username: {
        primary: {
            type: 'placeholder',
            value: 'Username'
        },
        secondary: {
            type: 'css',
            value: '#username'
        }
    },

    password: {
        primary: {
            type: 'placeholder',
            value: 'Password'
        },
        secondary: {
            type: 'css',
            value: '#password'
        }
    },

    loginButton: {
        primary: {
            type: 'role',
            value: {
                role: 'button',
                name: 'Login'
            }
        },
        secondary: {
            type: 'xpath',
            value: "//button[text()='Login']"
        }
    },

    dashboardHeader: {

        primary: {
            type: 'role',
            value: {
                role: 'heading',
                name: 'Dashboard'
            }
        },

        secondary: {
            type: 'xpath',
            value: "//h1[text()='Dashboard']"
        }
    },

    userRow: (username: string) => ({
        primary: {
            type: 'xpath',
            value: `//tr[td[text()='${username}']]`
        },

        secondary: {
            type: 'css',
            value: `[data-user='${username}']`
        }
    }),

    deleteButton: (username: string) => ({
        primary: {
            type: 'xpath',
            value: `//tr[td[text()='${username}']]//button[text()='Delete']`
        }
    })
};