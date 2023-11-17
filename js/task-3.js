function getElementWidth(content, padding, border) {
    let contentWidth = Number.parseFloat(content);
    let paddingWidth = Number.parseFloat(padding);
    let borderWidth = Number.parseFloat(border);
    let totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2);
    console.log(` ${totalWidth} `);
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");