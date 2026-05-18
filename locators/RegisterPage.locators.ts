export const RegisterPageLocators = {

    firstName: {

        primary: {
            type: 'role',
            value: {
                role: 'textbox',
                name: 'First Name'
            }
        },

        secondary: {
            type: 'xpath',
            value: '//input[@ng-model="FirstName"]'
        }
    },

    lastName: {

        primary: {
            type: 'role',
            value: {
                role: 'textbox',
                name: 'Last Name'
            }
        },

        secondary: {
            type: 'xpath',
            value: '//input[@ng-model="LastName"]'
        }
    },

    address: {

        primary: {
            type: 'css',
            value: 'textarea'
        },

        secondary: {
            type: 'xpath',
            value: '//textarea[@ng-model="Address"]'
        }
    },

    email: {

        primary: {
            type: 'role',
            value: {
                role: 'textbox',
                name: 'Email'
            }
        },

        secondary: {
            type: 'xpath',
            value: '//input[@ng-model="EmailAdress"]'
        }
    },

    phone: {

        primary: {
            type: 'role',
            value: {
                role: 'textbox',
                name: 'Phone'
            }
        },

        secondary: {
            type: 'xpath',
            value: '//input[@ng-model="Phone"]'
        }
    },

    gender: (gender: string) => ({

        primary: {
            type: 'role',
            value: {
                role: 'radio',
                name: gender,
                exact: true
            }
        },

        secondary: {
            type: 'xpath',
            value: `//input[@type='radio' and @value='${gender}']`
        }
    }),

    hobby: (hobby: string) => ({

        primary: {
            type: 'css',
            value: `input[type="checkbox"][value="${hobby}"]`
        },

        secondary: {
            type: 'xpath',
            value: `//input[@type='checkbox' and @value='${hobby}']`
        }
    }),

    languageDropdown: {

        primary: {
            type: 'css',
            value: '#msdd'
        },

        secondary: {
            type: 'xpath',
            value: "//div[@id='msdd']"
        }
    },

    languageOption: (language: string) => ({

        primary: {
            type: 'text',
            value: language,
            exact: true
        },

        secondary: {
            type: 'xpath',
            value: `//a[normalize-space()='${language}']`

        }
    }),

    skills: {

        primary: {
            type: 'css',
            value: '#Skills'
        },

        secondary: {
            type: 'xpath',
            value: "//select[@id='Skills']"
        }
    },

    countryDropdown: {

        primary: {
            type: 'css',
            value: '.select2-selection__arrow'
        },

        secondary: {
            type: 'xpath',
            value: "//span[contains(@class,'select2-selection__arrow')]"
        }
    },

    countryOption: (country: string) => ({

        primary: {
            type: 'role',
            value: {
                role: 'treeitem',
                name: country
            }
        },

        secondary: {
            type: 'xpath',
            value: `//*[text()='${country}']`
        }
    }),

    dobYear: {

        primary: {
            type: 'placeholder',
            value: 'Year'
        },

        secondary: {
            type: 'css',
            value: "#yearbox"
        }
    },

    dobMonth: {

        primary: {
            type: 'placeholder',
            value: "Month"
        },

        secondary: {
            type: 'xpath',
            value: '//select[@ng-model="monthbox"]'
        }
    },

    dobDay: {

        primary: {
            type: 'placeholder',
            value: 'Day'
        },

        secondary: {
            type: 'css',
            value: "#daybox"
        }
    },

    password: {

        primary: {
            type: 'css',
            value: '#firstpassword'
        },

        secondary: {
            type: 'xpath',
            value: "//input[@ng-model='Password']"
        }
    },

    confirmPassword: {

        primary: {
            type: 'css',
            value: '#secondpassword'
        },

        secondary: {
            type: 'xpath',
            value: "//input[@ng-model='ConfirmPassword']"
        }
    },

    submitButton: {

        primary: {
            type: 'role',
            value: {
                role: 'button',
                name: 'Submit'
            }
        },

        secondary: {
            type: 'css',
            value: "#submitbtn"
        }
    },

    countriesValidation: {

        primary: {
            type: 'css',
            value: '#countries'
        },

        secondary: {
            type: 'xpath',
            value: "//select[@ng-model='country']"
        }
    }
};