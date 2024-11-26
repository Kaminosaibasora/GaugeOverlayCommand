// ========================= CANVA =========================

var canva = document.getElementById("canvas");
let ctx = canva.getContext('2d');
let valueMax = parseInt(document.getElementById("maxi").textContent);

/**
 * dessine la jauge dans le canvas.
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Number} valueMax valeur maximum attribuable à la jauge
 * @param {Number} value valeur actuelle
 */
let drawCanva = (ctx, valueMax, value) => {
    ctx.clearRect(0, 0, canva.width, canva.height);
    // --------------------------------------------
    let lineaire = ctx.createLinearGradient(0, 0, 0, canva.height);
    lineaire.addColorStop(0,'blueviolet');
    lineaire.addColorStop(0.5, 'violet');
    lineaire.addColorStop(1, 'salmon');
    ctx.fillStyle = lineaire;
    // --------------------------------------------
    let height = canva.height / valueMax * value;
    let start = canva.height - height +50;
    ctx.beginPath();
    ctx.moveTo(0, start);
    ctx.lineTo(0, canva.height);
    ctx.lineTo(canva.width, canva.height);
    ctx.lineTo(canva.width, start);
    ctx.lineTo(0, start);
    ctx.arc(canva.width-50, start, 50, Math.PI, 2*Math.PI)
    ctx.closePath();
    ctx.fill();
}

//drawCanva(ctx, valueMax, 20);