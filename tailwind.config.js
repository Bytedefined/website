module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{ts,vue}"
    ],
    theme: {
        extend: {
            colors: {
                polar: {
                    100: "#141517",
                    200: "#1A1B1E",
                    300: "#1F2023",
                    400: "#25262B",
                    500: "#2C2E33"
                },
                whites: {
                    100: "#F8F8F8",
                    200: "#F2F2F2",
                    300: "#EDEDED",
                    400: "#D9D9D9"
                },
                blues: {
                    100: "#0266d3",
                    200: "#007AFF",
                    300: "#0097FF",
                    400: "#00B0FF"
                }
            }
        }
    },
    plugins: []
}
