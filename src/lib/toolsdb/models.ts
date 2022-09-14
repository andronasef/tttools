class Tool {
    name: string
    icon: string
    description: string
    slug: string

    constructor(name: string, icon: string, description: string, slug: string) {
        this.name = name
        this.icon = icon
        this.description = description
        this.slug = slug

    }

}
class ToolGroup {
    name: string
    icon: string
    description: string
    list: Tool[] = []

    constructor(name: string, icon: string, description: string, list: Tool[]) {
        this.name = name
        this.icon = icon
        this.description = description
        this.list = list

    }

}

// enum ToolGroups { Text, Developers, Images, Video }

export { Tool, ToolGroup }

