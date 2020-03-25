class Graph3D {
    constructor({ WINDOW }) {
        this.WINDOW = WINDOW;
        this.math = new Math3D();
    }

    xs(point) {
        const zs = this.WINDOW.CENTER.z;
        const z0 = this.WINDOW.CAMERA.z;
        const x0 = this.WINDOW.CAMERA.x;
        return (point.x - x0) / (point.z - z0) * (zs - z0) + x0;
    }

    ys(point) {
        const zs = this.WINDOW.CENTER.z;
        const z0 = this.WINDOW.CAMERA.z;
        const y0 = this.WINDOW.CAMERA.y;
        return (point.y - y0) / (point.z - z0) * (zs - z0) + y0;
    }

    // масштабирование точки
    zoom(delta, point) { 
        this.math.zoom(delta, point); 
    }

    // перенос точки вдоль оси Ox
    moveOx(xs, point) { 
        //...
    }
    // перенос точки вдоль оси Oy
    moveOy(ys, point) { 
        //...
    }

    // повороты по осям
    rotateOx(alpha, point) {
        //...
    }
    rotateOy(alpha, point) {
        //...
    }
    rotateOz(alpha, point) {
        //...
    }
}