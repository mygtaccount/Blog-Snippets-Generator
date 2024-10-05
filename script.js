const buttons = document.querySelectorAll('.button');

// or, if you want to get them by their IDs
const imageBtn = document.getElementById('image');
const imageMobileBtn = document.getElementById('image-mobile');
const relatedPostBtn = document.getElementById('related-post');
const videoBtn = document.getElementById('video');
const livePreviewBtn = document.getElementById('live-preview');
const downloadBtn = document.getElementById('download');
const buyMeACoffeeBtn = document.getElementById('buy-me-a-coffee');
const copyBtn = document.getElementById('copy');
const title = document.getElementById('headTitle');
const generateBtn = document.getElementById('generate');
const resultArea = document.getElementById('result');
const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const pasteUrl = document.getElementById('pasteUrl');
const pasteTitle = document.getElementById('pasteTitle');



buttons.forEach((button) => {
  button.addEventListener('click', () => {

    buttons.forEach((button) => {
      button.style.backgroundColor = "rgb(240, 240, 240)"
    })

    button.style.backgroundColor = "#ff4500"
    getReady(button)
  });
});

var btn = "image"
function getReady(button) {
  btn = button.id;
  urlInput.value = "";
  titleInput.value = "";
  resultArea.value = "";
  pasteTitle.disabled = true;
  titleInput.disabled = true;
  if (button.id == "image") {
    pasteTitle.disabled = false;
    titleInput.disabled = false;
    title.innerText = "Image Generator with Border"

  }
  else if (button.id == "image-mobile") {
    pasteTitle.disabled = false;
    titleInput.disabled = false;
    title.innerText = "Responsive Image Generator with Border for  Mobile";
  }
  else if (button.id == "related-post") {
    pasteTitle.disabled = false;
    titleInput.disabled = false;
    title.innerText = "Responsive Related Post Generator";
  }
  else if (button.id == "video") {
    title.innerText = "Responsive Video Generator";
  }
  else if (button.id == "live-preview") {
    title.innerText = "Live Preview Button Generator";
  }
  else if (button.id == "download") {
    title.innerText = "Download Button Generator";
  }
  else if (button.id == "buy-me-a-coffee") {
    title.innerText = "Buy me a coffee Button Generator";
  }
}

pasteUrl.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    urlInput.value = text;
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
});


pasteTitle.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    titleInput.value = text;
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
});



generateBtn.addEventListener('click', () => {
  resultArea.value = "";
  setTimeout(() => {


    if (urlInput.value !== "") {
      let code = ""
      if (btn == "image") {
        if (titleInput.value !== "") {
          code = `<div style="text-align: center;">
    <div class="separator" style="clear: both; text-align: center;">
        <a href="${urlInput.value}" style="margin-left: 1em; margin-right: 1em;">
            <img alt="${titleInput.value}" border="0" data-original-height="985" data-original-width="1598" height="394" src="${urlInput.value}" style="outline: rgb(255, 114, 0) solid 3px;" title="${titleInput.value}" width="640" />
        </a>
      </div>
    </div>`;
          resultArea.value = code;
          urlInput.value = "";

        }
      }
      else if (btn == "image-mobile") {
        code = `<div style="text-align: center;">
    <div class="separator" style="clear: both; text-align: center;">
        <a href="${urlInput.value}" style="margin-left: 1em; margin-right: 1em;">
            <img alt="${titleInput.value}" border="0" data-original-height="985" data-original-width="1598" height="394" src="${urlInput.value}" style="outline: rgb(255, 114, 0) solid 3px;" title="${titleInput.value}" width="auto" />
        </a>
      </div>
    </div>`
        resultArea.value = code;
        urlInput.value = "";
      }
      else if (btn == "related-post") {
        if (titleInput.value !== "") {
          code = `<div style="background: 0px 50% rgba(255, 166, 0, 0.219); border-radius: 10px; display: flex; height: fit-content; width: fit-content;">
        <div style="background: 0px 50% rgb(255, 115, 0); border-radius: 10px; height: auto; width: 10px;"></div>
        <div style="align-items: center; align-self: center; border-right-color: black; border-right-style: solid; border-width: 0px 3px 0px 0px; font-family: sans-serif; font-size: large; font-weight: 800; justify-content: center; margin: 5px 0px 5px 7px; padding: 0px 5px 0px 0px;">Also Read</div>
        <a style="padding-right: 20px; align-self: center; background: 0px 50%; border: 0px; color: #ff7200; cursor: pointer; font-family: sans-serif; font-size: large; font-weight: 600; justify-content: center; margin-left: 10px; text-decoration: none;" href="${urlInput.value}" target="_blank">${titleInput.value}</a>
        </div>`
          resultArea.value = code;
          urlInput.value = "";
          titleInput.value = "";
        }
      }
      else if (btn == "video") {
        code = `<div style="text-align: center;"><span
      style="background: 0px 50%; border: 0px; font-family: arial; outline: 0px; padding: 0px; vertical-align: baseline;"><i>
        <div class="video-responsive" style="outline: rgb(255, 114, 0) solid 3px; text-align: center;"><iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
            frameborder="0" id="yt_link" src="${urlInput.value}"></iframe>
        </div>
      </i>
    </span>
  </div>`
        resultArea.value = code;
        urlInput.value = "";

      }

      else if (btn == "live-preview") {
        code = `<div style="text-align: center;"><span style="background: 0px 50%; border: 0px; font-family: arial; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="separator" style="border-radius: 15px; clear: both; text-align: center;">
    <a href="${urlInput.value}" style="margin-left: 1em; margin-right: 1em;" target="_blank">
        <img border="0" data-original-height="306" data-original-width="1090" height="90" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi80HqZDSW25KmkZi7rRacXVx_nGyyEfdBXEw42SBMd2QTAD6WCoE7ki1VDBgbRr4fIBl2w-UMceGnHdYyg7kCymdYCwsq_8NgMBzSKQBMsPukhCQTCB6ZkSWc2HWclE032HJbDD8avxd-u8id3kBNSmspy0KIIyB4u4CYRE3bKLqiQgeEwZZMu1URYrp6J/s320/live%20preview%20logo.png" style="border-radius: 15px; cursor: pointer; outline: none; transform-origin: center center; transition: transform 0.3s;" width="320" />
    </a>
   </div>
   </span>
   </div>`
        resultArea.value = code;
        urlInput.value = "";
      }
      else if (btn == "download") {
        code = `<div style="text-align: center;"><span
      style="background: 0px 50%; border: 0px; font-family: verdana; font-size: large; outline: 0px; padding: 0px; vertical-align: baseline;"><b>(
        Give a Star...⭐)</b></span></div>
  <div style="text-align: center;"><span
      style="background: 0px 50%; border: 0px; font-family: arial; outline: 0px; padding: 0px; vertical-align: baseline;"><br /></span>
  </div>
  <div><span
      style="background: 0px 50%; border: 0px; font-family: arial; outline: 0px; padding: 0px; vertical-align: baseline;">
      <div class="separator" style="border-radius: 15px; clear: both; text-align: center;">
        <a href="${urlInput.value}"
          style="margin-left: 1em; margin-right: 1em;" target="_blank">
          <img border="0" data-original-height="306" data-original-width="1090" height="90"
            onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL9Ey5IpWd57yG-jLrU_3Cm_XOQhL6T-pEmHNRqBi4NohsG3ySyQtQSkVnhMlY_roqqoxbqRMzSzXCuXIoP4f9J51y0wb0XddjyzwoLpntH6Oa0Qm_oO84fy9A2b_SwZB5pQuLIJOdNLcGHzatl_G8eeQJsqlUivj2XMm1lnze3dKTF62xKDfLwtC_eaRx/s320/Github-Logo-PNG-Clipart.png"
            style="border-radius: 15px; cursor: pointer; outline: none; transform-origin: center center; transition: transform 0.3s;"
            width="320" />
        </a>
      </div>
    </span></div>`
        resultArea.value = code;
        urlInput.value = "";
      }

      else if (btn == "buy-me-a-coffee") {
        code = `<div style="text-align: center;"><span style="font-family: arial;">
      <div class="separator" style="clear: both; text-align: center;"><a
          href="${urlInput.value}" style="margin-left: 1em; margin-right: 1em;"
          target="_blank"><img border="0" data-original-height="306" data-original-width="1090" height="90"
            onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5DNpX6N3o3YPt6yKWayCuYTKttqxw9e32nARse7Th6ofGjIYoprTunqsjHOAep5aKvk6QMYxhrOTkIJPZBLPrsUKM8yNYgw0YaZtvwZjmD5RmrqHUdNsCzLXsnfG9ctO1tAXkfQj6KPaMDFlxgH18i4QbAhYCHACswKpMRKlpEgiFTe5LOd5galY6GLwM/s320/bmc-button.png"
            style="cursor: pointer; outline: none; transform-origin: center center; transition: transform 0.3s;"
            width="320" /></a></div>
    </span></div>`
        resultArea.value = code;
        urlInput.value = "";
      }




    }



  }, 600);



})








copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(resultArea.value);
  resultArea.select();
});
