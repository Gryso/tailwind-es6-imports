import plugin from "tailwindcss/plugin"

export const testPlugin = plugin(function ({addBase}) {
    addBase({
        body: {
            textTransform: "uppercase"
        }
    })
})
