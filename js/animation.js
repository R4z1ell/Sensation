// type anything here
const text = "Best place for family & friends";

// this function turns a string into an array
const createLetterArray = string => {
  return string.split("");
};

// this function creates letter layers wrapped in span tags
const createLetterLayers = array => {
  return array.map(letter => {
    let layer = "";
    //specify # of layers per letter
    for (let i = 1; i < 2; i++) {
      // if letter is a space
      if (letter == " ") {
        layer += '<span class="space"></span>';
      } else {
        layer += '<span class="letter-' + i + '">' + letter + "</span>";
      }
    }
    return layer;
  });
};

// this function wraps each letter in a parent container
const createLetterContainers = array => {
  return array.map(item => {
    let container = "";
    container += '<div class="wrapper">' + item + "</div>";
    return container;
  });
};

// use a promise to output text layers into DOM first
const outputLayers = new Promise(function(resolve, reject) {
  document.getElementById("text").innerHTML = createLetterContainers(
    createLetterLayers(createLetterArray(text))
  ).join("");
  resolve();
});

// then adjust width and height of each letter
const spans = Array.prototype.slice.call(
  document.getElementById("text").querySelectorAll("span")
);

outputLayers
  .then(() => {
    return spans.map(span => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth + "px";
        span.parentElement.style.height = span.offsetHeight + "px";
      }, 250);
    });
  })
  .then(() => {
    // then slide letters into view one at a time
    let time = 250;
    return spans.map(span => {
      time += 65;
      setTimeout(() => {
        span.parentElement.style.top = "50px";
      }, time);
    });
  });

//////////////////////////////////////////////
//////////////////////////////////////////////

const sub = "with delicious & healthy food";

// this function creates letter layers wrapped in span tags
const createLetterLayers1 = array => {
  return array.map(letter => {
    let layer = "";
    //specify # of layers per letter
    for (let i = 1; i < 2; i++) {
      // if letter is a space
      if (letter == " ") {
        layer += '<span class="space1"></span>';
      } else {
        layer += '<span class="metter-' + i + '">' + letter + "</span>";
      }
    }
    return layer;
  });
};

// this function wraps each letter in a parent container
const createLetterContainers1 = array => {
  return array.map(item => {
    let container = "";
    container += '<div class="wrapper1">' + item + "</div>";
    return container;
  });
};

// use a promise to output text layers into DOM first
const outputLayers1 = new Promise(function(resolve, reject) {
  document.getElementById("text1").innerHTML = createLetterContainers1(
    createLetterLayers1(createLetterArray(sub))
  ).join("");
  resolve();
});

console.log(outputLayers1);

// then adjust width and height of each letter
const spans1 = Array.prototype.slice.call(
  document.getElementById("text1").querySelectorAll("span")
);

outputLayers1
  .then(() => {
    return spans1.map(span => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth + "px";
        span.parentElement.style.height = span.offsetHeight + "px";
      }, 250);
    });
  })
  .then(() => {
    // then slide letters into view one at a time
    let time = 2800;
    return spans1.map(span => {
      time += 65;
      setTimeout(() => {
        span.parentElement.style.top = "-30px";
      }, time);
    });
  });
