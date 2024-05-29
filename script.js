let url = "https://665737379f970b3b36c86978.mockapi.io/Image";

let altImage = document.getElementById("alt");
let srcImage = document.getElementById("src");
let title = document.getElementById("title");
document.querySelector("#done").addEventListener("click", () => {
  api();

  //   console.log(name1.value);
});

async function api() {
  let data = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      srcImag: srcImage.value,
      altImage: altImage.value,
    }),
    headers: {
      "Content-Type": "application/json; chartset=UTF-8",
    },
  });
  let res = await data.json();
}
let Images = document.getElementById("images");

async function Getapi() {
  let data = await fetch(url);
  let res = await data.json();
  // console.log(res);
  res.forEach((element) => {
    let img = document.createElement("img");
    let btn = document.createElement("button");

    let div = document.createElement("div");
    img.src = element.srcImag;
    img.alt = element.altImage;
    btn.innerText = "Delete";
    btn.setAttribute("id", element.id);
    btn.setAttribute("class", "btns");
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    // btn.style.position = "absolute";
    // btn.style.zIndex = "1";
    // console.log(element);
    div.append(btn);
    div.append(img);

    Images.appendChild(div);
  });

  document.querySelectorAll(".btns").forEach((element) => {
    element.addEventListener("click", () => {
      fetch(`${url}/${element.getAttribute("id")}`, {
        method: "DELETE",
      });
    });
  });
}
Getapi();
