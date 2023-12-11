let elList = document.querySelector("[data-list]");
let input = document.querySelector("input");
let pagination = document.querySelector("[data-pagination");
// let elTemplate = document.querySelector("[data-template");

document.addEventListener("click", evt => {
  clickP(evt)
});

async function searchAnyThing(movieName, page = 1) {
  try {
  //   elList.innerHTML = `<div class="inner" style="width: 200px; height: 200px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  //   <g transform="translate(50 50)">  <g transform="translate(-19 -19) scale(0.6)"> <g>
  //  <animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="0s" repeatCount="indefinite"></animateTransform><path d="M31.35997276079435 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182682 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#f47e60"></path></g></g> <g transform="translate(19 19) scale(0.6)"> <g>
  //  <animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform><path d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182682 L31.359972760794346 21.460477824182682 L38.431040572659825 28.531545636048154 L28.531545636048183 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048094 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.359972760794328 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.460477824182682 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#abbd81"></path></g></g></g>
  //  </svg></div>`
    let response = await fetch(`https://www.omdbapi.com/?apikey=9b96d79e&s=${movieName}&page=${page}`);
    let array = await response.json()
    render(array.Search);
    renderP(Math.ceil(array.totalResults / 10), page, movieName);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("the end");
  }
}

input.addEventListener("change", evt => {
  evt.preventDefault();
  searchAnyThing(evt.target.value);
});

function render(movies) {
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];

    // let elButton = document.createElement("button");
    let elLi = document.createElement("li");
    let elImg = document.createElement("img");
    let elDiv = document.createElement("div");
    let elP = document.createElement("p");
    elImg.src = `${movie.Poster}`
    elP.textContent = `${movie.Title} -- 📽️${movie.Type} -- 📽️${movie.Year}`;
    // elButton.textContent = `${i}`
    elLi.classList.add("el-list");
    // elButton.classList.add("el-button");
    elImg.classList.add("el-img");
    elDiv.classList.add("el-div");
    elP.classList.add("el-content");
    
    // elDiv.appendChild(elButton);
    elLi.appendChild(elImg);
    elLi.appendChild(elDiv);
    elDiv.appendChild(elP);
    elList.appendChild(elLi);
  }
}

function renderP(total, current, name) {
  let html = `<li ><span class=${+current == 1 ? "disabled page-item" : "page-item"} data-page=${+current - 1} data-name=${name}><span class="page-link" >Previous</span></li>`
  for (let i = 1; i <= +total; i++) {
    html += `<li class=${+current == i ? "active page-item" : "page-item"} data-page=${i} data-name=${name} ><span class="page-link" >${i}</span></li>`
  }
  html += `<li class=${+current == +total ? "disabled page-item" : "page-item"} data-page=${+total} data-name=${name} ><span class="page-link" >Next</span></li>`
  pagination.innerHTML = html
}

function clickP(e) {
  if (!e.target.closest("[data-page]"))return
  let element = e.target.closest("[data-page]")
  searchAnyThing(element.dataset.name, element.dataset.page);
}

