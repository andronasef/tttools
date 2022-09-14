import { handy } from "./all"
import { Tool, ToolGroup } from './models'

const tools: Tool[] = [...handy]

const toolsGroupslist = {
    // "text": new ToolGroup('Text', "material-symbols:text-fields-rounded", "", text),
    "handy": new ToolGroup('Handy', "teenyicons:bulb-on-solid", "Some handy tools, calculators, converters & generators", handy),

}



export { tools, toolsGroupslist }

