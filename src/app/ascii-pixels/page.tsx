"use client";
import { useEffect, useRef, useCallback } from "react";

const CHARS = ["R", "R", "R", "#", "+", "@", "%", "=", "4", "R", "R", "#"];
const TILE = 11;
const IMAGE_URL =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&auto=format&fit=crop&q=60";

type Cell = {
  x: number;
  y: number;
  char: string;
  rnd: number;
  charAlpha: number;
};

const PixelDissolve = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0.3);
  const cellsRef = useRef<Cell[]>([]);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animFrameRef = useRef<number>(0);

  const buildCells = useCallback((cols: number, rows: number) => {
    const cells: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const seed = Math.sin(r * 127.1 + c * 311.7) * 43758.5453;
        cells.push({
          x: c * TILE,
          y: r * TILE,
          char: CHARS[Math.floor(Math.abs(seed * 100) % CHARS.length)],
          rnd: Math.abs(seed) % 1,
          charAlpha: 0.55 + Math.abs(Math.sin(seed)) * 0.45,
        });
      }
    }
    cellsRef.current = cells;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const progress = progressRef.current;
    const img = imgRef.current;

    ctx.clearRect(0, 0, W, H);

    if (img && img.complete && img.naturalWidth) {
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const iw = img.naturalWidth * scale;
      const ih = img.naturalHeight * scale;
      const ox = (W - iw) / 2;
      const oy = (H - ih) / 2;
      ctx.save();
      ctx.filter = "saturate(1.4) brightness(0.7)";
      ctx.drawImage(img, ox, oy, iw, ih);
      ctx.restore();
    }

    ctx.font = `bold ${TILE - 2}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const cell of cellsRef.current) {
      const revealed = cell.rnd < progress;

      if (!revealed) {
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(cell.x, cell.y, TILE - 1, TILE - 1);
        ctx.fillStyle = `rgba(255,255,255,${cell.charAlpha * 0.9})`;
        ctx.fillText(cell.char, cell.x + TILE / 2, cell.y + TILE / 2);
      } else {
        ctx.fillStyle = "rgba(10,10,10,0.18)";
        ctx.fillRect(cell.x, cell.y, TILE - 1, TILE - 1);
        ctx.fillStyle = `rgba(180,240,220,${0.12 * cell.charAlpha})`;
        ctx.fillText(cell.char, cell.x + TILE / 2, cell.y + TILE / 2);
      }
    }
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentElement!.getBoundingClientRect();
    const W = Math.floor(rect.width / TILE) * TILE;
    const H = Math.floor(rect.height / TILE) * TILE;
    canvas.width = W;
    canvas.height = H;
    buildCells(W / TILE, H / TILE);
    draw();
  }, [buildCells, draw]);

  useEffect(() => {
    // Load image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = IMAGE_URL;
    img.onload = () => draw();
    imgRef.current = img;

    resize();
    window.addEventListener("resize", resize);

    // Scroll-driven dissolve
    const handleScroll = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const section = canvas.parentElement!;
      const rect = section.getBoundingClientRect();
      let progress = 1 - rect.top / window.innerHeight;
      progress = Math.min(Math.max(progress, 0), 1);
      progressRef.current = progress;
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [resize, draw]);

  return (
    <section>
      {/* Top section — triggers scroll into the canvas */}
      <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center tracking-widest uppercase font-mono">
          Scroll Down
        </h1>
      </div>

      {/* Canvas section */}
      <div className="h-screen w-full relative bg-[#0a0a0a]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Bottom-bar overlay — mirrors the reference */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-4 z-10 pointer-events-none">
          <span className="font-mono text-sm font-bold tracking-widest text-white uppercase">
            TRAILER
          </span>
          <div className="flex gap-8">
            {[
              { label: "CLIENTS", value: "GENERALI" },
              { label: "TYPE", value: "COMMERCIAL" },
              { label: "DATE", value: "2025" },
            ].map(({ label, value }) => (
              <div key={label} className="font-mono text-right">
                <p className="text-[10px] tracking-widest text-white/50 uppercase">
                  {label}
                </p>
                <p className="text-xs font-bold tracking-widest text-white uppercase">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center tracking-widest uppercase font-mono">
          The End
        </h1>
      </div>
    </section>
  );
};

export default PixelDissolve;