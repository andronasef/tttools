import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
	"tools": {
		"handy": {
			"name": "Handy Tools",
			"description": "Some handy tools, calculators, converters & generators",
			"icon": "teenyicons:bulb-on-solid",
			"list": {
				"bmicalculator": { name: 'Bmi Calculator', icon: "icon-park-solid:weight", description: "" },
				"passwordgenerator":
				{
					name: 'Password Generator',
					icon: "material-symbols:password-rounded",
					description: "",
					l: { limitMsg: { str: "Length", unit: "Characters" } }

				},
				"caseconverter":
				{
					name: 'Case Converter',
					icon: "fluent:convert-range-20-filled",
					description: ""
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
		// , "image": {
		// 	"name": "Image Tools",
		// 	"description": "Usefel Tools for Images",
		// 	"icon": "ion:ios-images",
		// 	"list": {
		// 		"agecalculator": {
		// 			name: 'Age Calculator',
		// 			icon: "jam:birthday-cake-f",
		// 			description: ""
		// 		},

		// 	}
		// }
	},
	// "toolscats": { "handy": ToolTest('BMI Calculator', "icon-park-solid:weight", "", "bmicalculator") }
}

export default en
