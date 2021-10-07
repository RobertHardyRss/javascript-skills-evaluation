/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class Block {
	constructor() {
		this.height = 50;
		this.width = 50;
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.speed = 10;
	}

	update() {
		if (this.y + this.height >= canvas.height) {
			this.speed = speed * -1;
		}

		if (this.y <= 0) {
			this.speed = speed * -1;
		}

		this.y += this.speed;
	}

	draw() {
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

let myBlock = new Block();

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	myBlock.update();
	myBlock.draw();
	requestAnimationFrame(animate);
}

animate();
