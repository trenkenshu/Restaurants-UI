const getMapHeight = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const main = document.getElementById('main');
    const title = document.getElementById('mainTitle');
    const wrapperInMain = document.getElementById('wrapperInMain');

    const pageHeight = window.innerHeight;
    let headerHeight = 0;
    let footerHeight = 0;
    let titleHeight = 0;
    let paddingMain = 0;
    let gapMain = 0;

    if (header) {
        headerHeight = header.offsetHeight;
    }
    if (title) {
        titleHeight = title.offsetHeight;
    }
    if (footer) {
        footerHeight = footer.offsetHeight;
    }
    if (main) {
        const paddingTop = parseInt(window.getComputedStyle(main).getPropertyValue('padding-top'));
        const paddingBottom = parseInt(window.getComputedStyle(main).getPropertyValue('padding-bottom'));
        paddingMain = paddingTop + paddingBottom;
    }
    if (wrapperInMain) {
        gapMain = parseInt(window.getComputedStyle(wrapperInMain).getPropertyValue('gap'));
    }
    const mapCurrentHeight = pageHeight - (headerHeight + footerHeight + titleHeight + paddingMain + gapMain);
    // console.log('mapCurrentHeight', mapCurrentHeight);
    return mapCurrentHeight;
};
export default getMapHeight;
