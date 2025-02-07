function htmlMode(){
   
    let htmlTheme = sessionStorage.getItem('colorTheme') || sessionStorage.setItem('colorTheme','light');

    document.querySelector('html').dataset.theme = htmlTheme
}
htmlMode();

console.log('ddddddd')