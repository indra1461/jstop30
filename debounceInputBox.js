const searchInput = document.getElementById("search");

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function searchUser(event) {
  const query = event.target.value;

  console.log("API call:", query);
}

const debounceSearch = debounce(searchUser, 1000);

searchInput.addEventListener("input", debounceSearch);
