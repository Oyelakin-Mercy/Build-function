const btn = document.querySelector('button');
btn.onclick = function() {
    showMessage("Hi, I'm Mercy")
  };

  function showMessage(msgText, msgType) {
    const html = document.querySelector('html');

    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    const para = document.createElement('p');
    para.textContent = msgText;
    panel.appendChild(para)

    const Closebtn = document.createElement('button');
    Closebtn.textContent = "x";
    panel.appendChild(Closebtn);

    Closebtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}

