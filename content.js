function removeNumbers(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(/[0-9]/g, '');
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        removeNumbers(node.childNodes[i]);
      }
    }
  }
  
  removeNumbers(document.body);
  