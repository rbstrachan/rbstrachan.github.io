// import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { FullSlug, joinSegments } from "../util/path"
//
// export default (() => {
//   function MathBackground() {
//     return (
//       <div id="math-bg-container">
//         <div id="bg-canvas-host"></div>
//         <div id="bg-controls">
//           <button id="toggle-bg" title="Switch Background">✧</button>
//         </div>
//       </div>
//     )
//   }
//
//   MathBackground.afterDOMLoaded = `
//     const scripts = [
//       "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"
//     ];
//
//     function loadScript(src) {
//       return new Promise((resolve) => {
//         const s = document.createElement('script');
//         s.src = src;
//         s.onload = resolve;
//         document.head.appendChild(s);
//       });
//     }
//
//     loadScript(scripts[0]).then(() => {
//       let currentSketch = null;
//       let sketchIndex = Math.floor(Math.random() * 3);
//
//       const sketches = [
//         voronoiSketch,
//         boidsSketch,
//         diffusionSketch
//       ];
//
//       function startSketch() {
//         if (currentSketch) currentSketch.remove();
//         currentSketch = new p5(sketches[sketchIndex], 'bg-canvas-host');
//       }
//
//       document.getElementById('toggle-bg').addEventListener('click', () => {
//         sketchIndex = (sketchIndex + 1) % sketches.length;
//         startSketch();
//       });
//
//       startSketch();
//     });
//
//     // --- VORONOI SKETCH ---
//     const voronoiSketch = (p) => {
//       let points = [];
//       p.setup = () => {
//         p.createCanvas(p.windowWidth, p.windowHeight);
//         for(let i=0; i<20; i++) points.push(p.createVector(p.random(p.width), p.random(p.height)));
//       };
//       p.draw = () => {
//         p.clear();
//         p.stroke(150, 100);
//         // Simplified Voronoi logic: just drawing connections to mouse
//         points[0] = p.createVector(p.mouseX, p.mouseY);
//         for(let i=0; i<points.length; i++) {
//             p.ellipse(points[i].x, points[i].y, 4);
//             for(let j=i+1; j<points.length; j++) {
//                 if(p.dist(points[i].x, points[i].y, points[j].x, points[j].y) < 200) {
//                     p.line(points[i].x, points[i].y, points[j].x, points[j].y);
//                 }
//             }
//         }
//       };
//     };
//
//     // --- BOIDS SKETCH ---
//     const boidsSketch = (p) => {
//       let boids = [];
//       p.setup = () => {
//         p.createCanvas(p.windowWidth, p.windowHeight);
//         for(let i=0; i<50; i++) boids.push(new Boid(p));
//       };
//       p.draw = () => {
//         p.clear();
//         boids.forEach(b => {
//           b.update();
//           b.show();
//         });
//       };
//       class Boid {
//         constructor(p) {
//           this.p = p;
//           this.pos = p.createVector(p.random(p.width), p.random(p.height));
//           this.vel = p5.Vector.random2D();
//         }
//         update() {
//           this.pos.add(this.vel);
//           if(this.pos.x > p.width) this.pos.x = 0;
//           if(this.p.mouseIsPressed) {
//              let mouse = p.createVector(p.mouseX, p.mouseY);
//              this.vel.add(p5.Vector.sub(mouse, this.pos).limit(0.1));
//           }
//         }
//         show() { p.fill(150, 50); p.noStroke(); p.circle(this.pos.x, this.pos.y, 8); }
//       }
//     };
//
//     // --- REACTION DIFFUSION (Simplified) ---
//     const diffusionSketch = (p) => {
//       p.setup = () => { p.createCanvas(p.windowWidth, p.windowHeight); p.background(255,0); };
//       p.draw = () => {
//         if(p.mouseIsPressed) {
//            p.noStroke();
//            p.fill(100, 20, 200, 10);
//            p.circle(p.mouseX, p.mouseY, p.random(50, 100));
//         }
//       };
//     };
//   `
//
//   return MathBackground
// }) satisfies QuartzComponentConstructor

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function MathBackground() {
  return (
    <div id="math-bg-container">
      <div id="bg-canvas-host"></div>
      <div id="bg-controls">
        <button id="toggle-bg" title="Switch Background">✧</button>
      </div>
    </div>
  )
}

MathBackground.afterDOMLoaded = `
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",
  ];

  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }

  loadScript(scripts[0]).then(() => {
    const sketches = [
      voronoiSketch,
      boidsSketch,
      slime,
      keys
    ];

    let currentSketch = null;
    let sketchIndex = Math.floor(Math.random() * sketches.length);
    // let sketchIndex = 3;

    function startSketch() {
      if (currentSketch) currentSketch.remove();
      currentSketch = new p5(sketches[sketchIndex], 'bg-canvas-host');
    }

    document.getElementById('toggle-bg').addEventListener('click', () => {
      sketchIndex = (sketchIndex + 1) % sketches.length;
      startSketch();
    });

    startSketch();
  });

const voronoiSketch = (p) => {
  let points = [];
  const count = 35;

  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("bg-canvas-host");

    for (let i = 0; i < count; i++) {
      points.push({
        pos: p.createVector(p.random(p.width), p.random(p.height)),
        // Fixed: Use p.p5.Vector or p.constructor.Vector,
        // but p.createVector() + rotate is often easier:
        vel: p.createVector(p.random(-1, 1), p.random(-1, 1)).mult(p.random(0.5, 1.5))
      });
    }

    p.pixelDensity(1);
  };

  p.draw = () => {
    p.clear();

    points.forEach((pt, i) => {
      if (i === 0) {
        // Fixed: Added p. prefix to mouse and lerp
        pt.pos.x = p.lerp(pt.pos.x, p.mouseX, 0.1);
        pt.pos.y = p.lerp(pt.pos.y, p.mouseY, 0.1);
      } else {
        pt.pos.add(pt.vel);

        // Fixed: Added p. prefix to width and height
        if (pt.pos.x < 0 || pt.pos.x > p.width) pt.vel.x *= -1;
        if (pt.pos.y < 0 || pt.pos.y > p.height) pt.vel.y *= -1;
      }
    });

    p.strokeWeight(1);
    p.noFill();

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        let d = p.dist(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y);

        if (d < 250) {
          // Fixed: Added p. prefix to map
          let alpha = p.map(d, 0, 250, 100, 0);
          p.stroke(150, alpha);
          p.line(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y);
        }
      }
    }

    p.noStroke();
    p.fill(150, 80);
    // Fixed: Added p. prefix to circle
    points.forEach(pt => p.circle(pt.pos.x, pt.pos.y, 3));
  };

  // Fixed: Attached windowResized to the instance p
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

  // boids
  const boidsSketch = (p) => {
    let boids = [];
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      for(let i=0; i<50; i++) boids.push(new Boid(p));
    };
    p.draw = () => {
      p.clear();
      boids.forEach(b => {
        b.update();
        b.show();
      });
    };
    class Boid {
      constructor(p) {
        this.p = p;
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p5.Vector.random2D();
      }
      update() {
        this.pos.add(this.vel);
        if(this.pos.x > p.width) this.pos.x = 0;
        if(this.p.mouseIsPressed) {
           let mouse = p.createVector(p.mouseX, p.mouseY);
           this.vel.add(p5.Vector.sub(mouse, this.pos).limit(0.1));
        }
      }
      show() { p.fill(150, 50); p.noStroke(); p.circle(this.pos.x, this.pos.y, 8); }
    }
  };

  // slime
  const slime = (p) => {
    let molds = [];
    let num = 12000;
    let pg; // offscreen trail buffer
    let decay = 0.96; // trail persistence

    class Mold {
      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.r = 0.5;

        this.heading = p.random(360);
        this.vx = p.cos(this.heading);
        this.vy = p.sin(this.heading);
        this.rotAngle = 45;

        // Sensors
        this.rSensorPos = p.createVector(0, 0);
        this.lSensorPos = p.createVector(0, 0);
        this.fSensorPos = p.createVector(0, 0);
        this.sensorAngle = 45;
        this.sensorDist = 10;
      }

      update(g) {
        // move
        this.vx = p.cos(this.heading);
        this.vy = p.sin(this.heading);

        this.x = (this.x + this.vx + p.width) % p.width;
        this.y = (this.y + this.vy + p.height) % p.height;

        // sensor positions
        this.getSensorPos(this.rSensorPos, this.heading + this.sensorAngle);
        this.getSensorPos(this.lSensorPos, this.heading - this.sensorAngle);
        this.getSensorPos(this.fSensorPos, this.heading);

        // sample "trail strength" from ALPHA channel of the buffer
        const r = this.sampleAlpha(g, this.rSensorPos.x, this.rSensorPos.y);
        const l = this.sampleAlpha(g, this.lSensorPos.x, this.lSensorPos.y);
        const f = this.sampleAlpha(g, this.fSensorPos.x, this.fSensorPos.y);

        // steering
        if (f > l && f > r) {
          // keep heading
        } else if (f < l && f < r) {
          this.heading += p.random(1) < 0.5 ? this.rotAngle : -this.rotAngle;
        } else if (l > r) {
          this.heading -= this.rotAngle;
        } else if (r > l) {
          this.heading += this.rotAngle;
        }
      }

      display(g) {
        g.noStroke();
        g.fill(80); // white, fully opaque on the buffer (alpha=255)
        g.ellipse(this.x, this.y, this.r * 5, this.r * 5);
      }

      getSensorPos(sensor, angle) {
        sensor.x = (this.x + this.sensorDist * p.cos(angle) + p.width) % p.width;
        sensor.y = (this.y + this.sensorDist * p.sin(angle) + p.height) % p.height;
      }

      sampleAlpha(g, x, y) {
        const xi = p.floor(x);
        const yi = p.floor(y);
        const idx = 4 * (xi + yi * g.width);
        return g.pixels[idx + 3] || 0; // alpha channel
      }
    }

    p.setup = () => {
      // Parent this to your Quartz container ID
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('bg-canvas-host');

      p.angleMode(p.DEGREES);
      p.pixelDensity(1);

      // Offscreen buffer
      pg = p.createGraphics(p.width, p.height);
      pg.pixelDensity(1);
      pg.clear();

      for (let i = 0; i < num; i++) {
        molds[i] = new Mold();
      }
    };

    p.draw = () => {
      // 1) Decay trails
      pg.loadPixels();
      for (let i = 0; i < pg.pixels.length; i += 4) {
        pg.pixels[i + 3] = pg.pixels[i + 3] * decay;
        if (pg.pixels[i + 3] < 1) pg.pixels[i + 3] = 0;
      }
      pg.updatePixels();

      // 2) Molds logic
      pg.loadPixels();

      // Stop logic
      if (p.keyIsPressed && p.key === "s") p.noLoop();

      for (let i = 0; i < num; i++) {
        molds[i].update(pg);
        molds[i].display(pg);
      }

      // 3) Output to main transparent canvas
      p.clear();
      p.image(pg, 0, 0);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      // Note: trail buffer is tied to original size,
      // for a background you might want to recreate pg here too.
    };
  };

  // keys
  const keys = (p) => {
    let keys = [];
    let colours = [
      { backRect: '#d9201d', foreRect: '#f94434', foreRectStroke: '#c31d1a', letter: '#fff' },
      { backRect: '#ff891d', foreRect: '#ffb048', foreRectStroke: '#e57b1a', letter: '#000' },
      { backRect: '#fff633', foreRect: '#ffff45', foreRectStroke: '#e5dd2e', letter: '#000' },
      { backRect: '#00ad57', foreRect: '#45d178', foreRectStroke: '#009b4e', letter: '#000' },
      { backRect: '#00d2fb', foreRect: '#65ffff', foreRectStroke: '#00bde1', letter: '#000' },
      { backRect: '#8473db', foreRect: '#a490fc', foreRectStroke: '#7767c5', letter: '#000' },
      { backRect: '#ccc', foreRect: '#fcfcfc', foreRectStroke: '#b7b7b7', letter: '#000' }
    ];

    let tssDefault = 30;
    let rectStrokeWidth;

    // Default values previously controlled by UI
    let currentTextSize = 30;
    let currentStrokeWeight = 3;
    let isRandomColour = true;
    let isSpinning = true;
    let isTracing = true;

    p.setup = () => {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('bg-canvas-host');
      p.background(0, 0);
      p.textAlign(p.CENTER, p.CENTER);
    };

    p.keyPressed = () => {
      let newKey = new Key(p.keyCode, p.random((p.width / 2) - 50, (p.width / 2) + 50), p.height);
      keys.push(newKey);
    };

    p.draw = () => {
      p.textSize(currentTextSize);
      rectStrokeWidth = currentStrokeWeight * currentTextSize / tssDefault;

      if (!isTracing) p.background(255);

      for (let i = keys.length - 1; i >= 0; --i) {
        keys[i].update();
        keys[i].drawKey();

        if (keys[i].x + (keys[i].size * p.sqrt(2)) < 0 || keys[i].x > p.width) {
          keys.splice(i, 1);
        }
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    class Key {
      constructor(code, x, y) {
        this.letter = String.fromCharCode(code);
        this.x = x;
        this.y = y;
        this.vy = -p.random(15, 30);
        this.vx = p.random(3, 9) * (Math.random() < 0.5 ? -1 : 1);
        this.size = p.textSize() * 3.5;
        this.angle = 0;
        this.rotSpeed = p.random(0.075, 0.125) * (this.vx < 0 ? -1 : 1);
        this.colour = isRandomColour ? p.random(colours) : colours[colours.length - 1];
      }

      update() {
        this.y += this.vy;
        this.vy += 0.5;
        this.x += this.vx;
        this.angle += isSpinning ? this.rotSpeed : 0;

        if (this.y + this.size > p.height && this.vy > 0) {
          this.y = p.height - this.size;
          this.rotSpeed *= 0.9;
          this.vy *= -0.7;
        }
      }

      drawKey() {
        p.push();
        p.translate(this.x + this.size / 2, this.y + this.size / 2);
        p.rotate(this.angle);
        p.translate(-this.size / 2, -this.size / 2);

        // background rectangle
        p.fill(this.colour.backRect);
        p.stroke(0);
        p.strokeWeight(rectStrokeWidth);
        p.rect(0, 0, this.size, this.size, 5);

        // foreground rectangle
        p.fill(this.colour.foreRect);
        p.stroke(this.colour.foreRectStroke);
        p.strokeWeight(rectStrokeWidth);
        p.rect(this.size * 1 / 8, this.size * 3 / 32, this.size * 3 / 4, this.size * 3 / 4, 3);
        p.noStroke();

        if (this.letter == 'F' || this.letter == 'J') {
          p.fill(this.colour.backRect);
          p.rect(this.size * 5 / 12, this.size * 17 / 24, this.size / 4, this.size / 20, 1);
        }

        p.fill(this.colour.letter);
        p.textFont('Inter');
        p.textStyle(p.NORMAL);
        p.text(this.letter, this.size / 3, this.size / 3);
        p.pop();
      }
    }
  };
`

// This is the important part for Quartz's build system
export default (() => MathBackground) satisfies QuartzComponentConstructor
