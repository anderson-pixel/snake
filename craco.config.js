module.exports = {
    mode: 'development',
    style: {
        postOptions: {
         plugins: [
           require('tailwindcss'),
           require('autoprefixer'),
         ],
       },
     },
}