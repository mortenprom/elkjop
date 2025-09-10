// let size;
// switch(btnSize.getSelectedKey()) {
//     case 'standard':
//         size = 'nepSmall';
//         break;
//     case 'medium':
//         size = 'nepLarge';
//         break;
//     case 'large':
//         size = 'nepXXLarge';
//         break;
// }
// const root = `
//     :root .extElkjopStandard {
//         --nepBtnDefault: var(--${size});
//     }
// `;
// document.getElementById("ElkjopRoot").innerHTML = root;

let styleClass;
switch(btnSize.getSelectedKey()) {
    case 'standard':
        styleClass = 'nepContentSmall';
        break;
    case 'medium':
        styleClass = 'nepContentLarge';
        break;
    case 'large':
        styleClass = 'nepContentXXLarge';
        break;
    case 'xlarge':
        styleClass = 'nepContentXXXLarge';
        break;
    case 'xxlarge':
        styleClass = 'nepContentXXXXLarge';
        break;
    case 'xxxlarge':
        styleClass = 'nepContentXXXXXLarge';
        break;
}
boxCompact.removeStyleClass("nepContentSmall nepContentLarge nepContentXXLarge nepContentXXXLarge nepContentXXXXLarge nepContentXXXXXLarge");
boxCompact.addStyleClass(styleClass);
boxCompact.rerender();
btnCompactSize.rerender();