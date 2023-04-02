var p = 0;
async function a() {

    if (p === 0) {
        p = 1;
    }
    else {
        p = 0;
    }

    while (p === 1) {
        const o = new Audio('pizza.mp3');
        o.play();
        await sleep(50);
    }
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function b() {

}

const x = (name, age) => {
    console.log('x')
}

const y = name => {console.log(name)}

function z() {
    setTimeout(function() {
        window.location.href = 'https://www.bing.com/'
    }, 5000)
}