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
        opacity: '60%',
        backdropFilter: 'blur(1px)',
        pointerEvents: 'none',
      }}
    />
  );
}

export default Overlay;
