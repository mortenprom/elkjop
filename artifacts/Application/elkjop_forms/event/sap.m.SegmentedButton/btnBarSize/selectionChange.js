let barSize;
switch(btnBarSize.getSelectedKey()) {
    case 'standard':
        barSize = 'nepSmall';
        break;
    case 'medium':
        barSize = 'nepXLarge';
        break;
    case 'large':
        barSize = 'nepXXXXLarge';
        break;
}
const root = `
    :root {
        --nepBar: var(--${barSize});
    }
`;
document.getElementById("BarRoot").innerHTML = root;

// :root .sapMIBar {
//     --nepBtnDefault: var(--${barSize});
// }