// 컬러 모드
function htmlMode() {
    let htmlTheme = sessionStorage.getItem('colorTheme');

    if (!htmlTheme) {
        htmlTheme = 'light';
        sessionStorage.setItem('colorTheme', htmlTheme);
    }

    document.querySelector('html').dataset.theme = htmlTheme;
}
htmlMode();