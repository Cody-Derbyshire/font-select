function Overlay() {
  return (
    <div
      className='overlay'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '10',
        background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
        opacity: '70%',
        backdropFilter: 'blur(0.5px)',
        pointerEvents: 'none',
      }}
    />
  );
}

export default Overlay;
