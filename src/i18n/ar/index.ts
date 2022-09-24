import type { Translation } from '../i18n-types'

const ar: Translation = {
    "tools": {
        "handy": {
            "name": "Handy Tools",
            "description": "",
            "icon": "",
            "list": {
                "bmicalculator": { name: 'Bmi Calculator', icon: "icon-park-solid:weight", description: "" },
                "passwordgenerator":
                {
                    name: 'صانع كلمات المرور',
                    icon: "material-symbols:password-rounded", description: "",
                    l: { limitMsg: { str: "طول الحروف", unit: "كلمات" } }
                },
                "caseconverter":
                {
                    name: 'Case Converter',
                    icon: "fluent:convert-range-20-filled",
                    "description": ""
                },
                "percentagecalculator": {
                    name: 'Percentage Calculator',
                    icon: "ant-design:percentage-outlined",
                    description: "",
                },
                "randomnum": {
                    name: 'Random Number Generator',
                    icon: "carbon:character-whole-number",
                    description: ""
                },
                "agecalculator": {
                    name: 'Age Calculator',
                    icon: "jam:birthday-cake-f",
                    description: ""
                },

            }
        }
    },
}

export default ar
