let result = document.querySelector(".input1");
document.querySelector(".one").addEventListener("click", function () {
    result.textContent += 1;
});
document.querySelector(".two").addEventListener("click", function () {
    result.textContent += 2;
});
document.querySelector(".add").addEventListener("click", function () {
    result.textContent += "+";

});
document.querySelector(".four").addEventListener("click", function () {
    result.textContent += 4;
});
document.querySelector(".three").addEventListener("click", function () {
    result.textContent += 3;
});
document.querySelector(".five").addEventListener("click", function () {
    result.textContent += 5;
});
document.querySelector(".six").addEventListener("click", function () {
    result.textContent += 6;
});
document.querySelector(".seven").addEventListener("click", function () {
    result.textContent += 7;
});
document.querySelector(".eight").addEventListener("click", function () {
    result.textContent += 8;
});
document.querySelector(".nine").addEventListener("click", function () {
    result.textContent += 9;
});
document.querySelector(".mult").addEventListener("click", function () {
    result.textContent += "*";
});
document.querySelector(".sub").addEventListener("click", function () {
    result.textContent += "-";
});
document.querySelector(".dev").addEventListener("click", function () {
    result.textContent += "/";
});
document.querySelector(".zero").addEventListener("click", function () {
    result.textContent += 0;
});
document.querySelector(".ashar").addEventListener("click", function () {
    result.textContent += '.';

});

document.querySelector(".modlos").addEventListener("click", function () {
    result.textContent += '%'
})
document.querySelector(".clear").addEventListener("click", function () {
    result.textContent = ''
})
document.querySelector(".power").addEventListener("click", function () {
    result.textContent += '^'
})
document.querySelector(".equal").addEventListener("click", function () {

    let add = "";
    let sub = "";
    let mult = "";
    let div = "";
    let mod = "";
    let power = "";

    let str = result.textContent;

    for (let el of str) {
        console.log(el);
        if (el == "+") {
            add = el;
        } else if (el == "-") {
            sub = el;
        } else if (el == "*") {
            mult = el;
        } else if (el == "/") {
            div = el;
        } else if (el == "%") {
            mod = el;
        } else if (el == "^") {
            power = el;
        }
    }
    console.log(str);
    const [x, y] = str.split("+");
    const [g, h] = str.split("-");
    const [m, n] = str.split("*");
    const [u, v] = str.split("/");
    const [i, j] = str.split("%");
    const [b, e] = str.split("^");

    if (add) {
        result.textContent = Number(x) + Number(y)
    } else if (sub) {
        result.textContent = Number(g) - Number(h)
    } else if (mult) {
        result.textContent = Number(m) * Number(n)
    } else if (div) {
        result.textContent = Number(u) / Number(v)
    } else if (mod) {
        result.textContent = Number(i) % Number(j)
    } else if (power) {
        result.textContent = Number(b) ** Number(e)
    }
});
