import { Polyline, Renderer, Transform, Vec3, Color } from "ogl";

const SPRING = 0.1;
const FRICTION = 0.5; // The higher it is, the easier it is to follow the cursor
const THICKNESS = 20;
const LINE_COLOR = "#F2FF5B";

export function initializeOGLAnimation() {
  const vertex = `
    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;

    vec4 getPosition() {
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
      vec2 nextScreen = next.xy * aspect;
      vec2 prevScreen = prev.xy * aspect;

      vec2 tangent = normalize(nextScreen - prevScreen);
      vec2 normal = vec2(-tangent.y, tangent.x);
      normal /= aspect;
      normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);

      float pixelWidth = 1.0 / (uResolution.y / uDPR);
      normal *= pixelWidth * uThickness;

      // When the points are on top of each other, shrink the line to avoid artifacts.
      float dist = length(nextScreen - prevScreen);
      normal *= smoothstep(0.0, 0.02, dist);

      vec4 current = vec4(position, 1);
      current.xy -= normal * side;
      return current;
    }

    void main() {
      gl_Position = getPosition();
    }
  `;

  const renderer = new Renderer({ alpha: true });
  const gl = renderer.gl;
  document.body.appendChild(gl.canvas);
  gl.clearColor(0, 0, 0, 0);

  const scene = new Transform();

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (polyline) polyline.resize();
  }
  window.addEventListener("resize", resize, false);

  const mouseVelocity = new Vec3();

  // Create an array of Vec3s (eg [[0, 0, 0], ...])
  const count = 20;
  const points: Vec3[] = [];

  for (let i = 0; i < count; i++) points.push(new Vec3());

  const polyline = new Polyline(gl, {
    points,
    vertex,
    uniforms: {
      uColor: { value: new Color(LINE_COLOR) },
      uThickness: { value: THICKNESS }
    }
  });

  polyline.mesh.setParent(scene);

  // Call initial resize after creating the polylines
  resize();

  // Add handlers to get mouse position
  const mouse = new Vec3();
  if ("ontouchstart" in window) {
    window.addEventListener("touchstart", updateMouse);
    window.addEventListener("touchmove", updateMouse);
  } else {
    window.addEventListener("mousedown", (e) => {
      updateMouse(e);
      window.addEventListener("mousemove", updateMouse);
    });
    window.addEventListener("mouseup", () => window.removeEventListener("mousemove", updateMouse));
  }

  function updateMouse(e: TouchEvent | MouseEvent) {
    let x: number;
    let y: number;
    if ("changedTouches" in e) {
      x = e.changedTouches[0].clientX;
      y = e.changedTouches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    // Get mouse value in -1 to 1 range, with y flipped
    mouse.set((x / gl.renderer.width) * 2 - 1, (y / gl.renderer.height) * -2 + 1, 0);
  }

  const tmp = new Vec3();

  requestAnimationFrame(update);
  function update() {
    requestAnimationFrame(update);

    // Update polyline input points
    for (let i = points.length - 1; i >= 0; i--) {
      if (!i) {
        // For the first point, spring ease it to the mouse position
        tmp.copy(mouse).sub(points[i]).multiply(SPRING);
        mouseVelocity.add(tmp).multiply(FRICTION);
        points[i].add(mouseVelocity);
      } else {
        // The rest of the points ease to the point in front of them, making a line
        points[i].lerp(points[i - 1], 0.9);
      }
    }
    polyline.updateGeometry();

    renderer.render({ scene });
  }
}
