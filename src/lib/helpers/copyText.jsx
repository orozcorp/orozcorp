export function copyTable(tableId) {
  const table = document.querySelector("table");
  let range, sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(table);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(table);
      sel.addRange(range);
    }
    document.execCommand("copy");
  }

  sel.removeAllRanges();
}
