window.onload = function () {
    const WINDOW = {
        LEFT: -10,
        BOTTOM: -10,
        WIDTH: 20,
        HEIGHT: 20,
        CENTER: new Point(0, 0, -30), // центр окошка, через которое видим мир
        CAMERA: new Point(0, 0, -50) // точка, из которой смотрим на мир
    };
    const ZOOM_OUT = 1.1;
    const ZOOM_IN = 0.9;

    const sur = new Surfaces;
    const canvas = new Canvas({ width: 600, height: 600, WINDOW, callbacks: { wheel, mousemove /* //... */ }});
    const graph3D = new Graph3D({ WINDOW });

    const SCENE = [sur.cube()]; // сцена

    // about callbacks
    function wheel(event) {
        const delta = (event.wheelDelta > 0) ? ZOOM_IN : ZOOM_OUT;
        SCENE.forEach(subject => subject.points.forEach(point => graph3D.zoom(delta, point)));
        render();
    }

    function mousemove() {
        //...
    }

    // about render
    function clear() {
        canvas.clear();
    }

    function printSubject(subject) {
        // print edges
        for (let i = 0; i < subject.edges.length; i++) {
            const edges = subject.edges[i];
            const point1 = subject.points[edges.p1];
            const point2 = subject.points[edges.p2];
            canvas.line(graph3D.xs(point1), graph3D.ys(point1), graph3D.xs(point2), graph3D.ys(point2));
        }
        // print points
        for (let i = 0; i < subject.points.length; i++) {
            const points = subject.points[i];
            canvas.point(graph3D.xs(points), graph3D.ys(points));
        }
    }

    function render() {
        clear();
        SCENE.forEach(subject => printSubject(subject));
    }
    render();
}; 