(() => {
  "use strict";
  var e = document.querySelector(".todo-input"),
    t = document.querySelector(".todo-button"),
    n = document.querySelector(".todo-list");
  t.addEventListener("click", function (t) {
    t.preventDefault();
    var a = document.createElement("li");
    a.classList.add("todo-container");
    var d = document.createElement("span");
    (d.innerText = e.value), d.classList.add("todo-text"), a.appendChild(d);
    var o = document.createElement("button");
    (o.innerHTML = '<i class="fas fa-check"></i>'),
      o.classList.add("todo-check-button"),
      a.appendChild(o);
    var c = document.createElement("button");
    (c.innerHTML = '<i class="fas fa-trash"></i>'),
      c.classList.add("todo-remove-button"),
      a.appendChild(c),
      n.appendChild(a);
  });
})();
