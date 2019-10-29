
const stjerne = document.querySelector("#stjerne");
const lengde = stjerne.getTotalLength();

stjerne.style.strokeDasharray = lengde;
stjerne.style.strokeDashoffset = lengde;

const keyframes = [
    { strokeDashoffset: lengde },
    { strokeDashoffset: 0 }
];

const settings = {
    duration: 4000,
    fill: "forwards"   
};

const strektegning = stjerne.animate(keyframes, settings);

/* animation: strektegning 4s forwards; */

/*
@keyframes strektegning {
    from {
        stroke-dashoffset: 980;
    }
    to {
        stroke-dashoffset: 0;
    }
}
*/