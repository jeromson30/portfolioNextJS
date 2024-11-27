'use client';
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

const Globe = ({
  className,
  theta = 0,
  dark = 1,
  scale = 1,
  diffuse = 0,
  mapSamples = 20000,
  mapBrightness = 100,
  baseColor = [1, 1, 1],
  markerColor = [0, 0, 0],
  glowColor = [1, 1, 1],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    let phi = 0;
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 0.98,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div className={cn('flex items-center justify-center z-[10] w-full max-w-[350px] mx-auto',className)}>
      <canvas ref={canvasRef} style={{width: '100%',height: '100%',maxWidth: '100%',aspectRatio: '1',}} />
    </div>
  );
};
export default Globe;
