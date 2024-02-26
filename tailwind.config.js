/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                base: '15px'
            },
            colors: {
                "orange-bright": "hsl(31, 77%, 52%)",
                "dark-cyan": "hsl(184, 100%, 22%)",
                "very-dark-cyan": "hsl(179, 100%, 13%)",
                "transparent-white": "hsla(0, 0%, 100%, 0.75)",
                "very-light-gray": "hsl(0, 0%, 95%)"
            }
        },
        fontFamily: {
            lexend: ['Lexend Deca', 'sans-serif'],
            "big-shoulders": ['Big Shoulders Display', 'sans-serif']
        }
    },
    plugins: [],
}