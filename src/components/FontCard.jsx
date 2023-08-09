import '../css/FontCard.css';

function FontCard({ font, selectedFont, setSelectedFont }) {
  const { name, family } = font;

  const handleSelect = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <>
      <div className='font-card'>
        <label htmlFor={family}>
          <div className='a-large'>
            <h1 style={{ fontFamily: `${family}`, fontSize: '5rem' }}>Aa</h1>
          </div>
          <div className='input-radio'>
            <h2 className='name'>{name}</h2>
            <input
              type='radio'
              name='font-select'
              id={family}
              value={family}
              checked={selectedFont === family}
              onChange={handleSelect}
            />
          </div>
        </label>
      </div>
    </>
  );
}

export default FontCard;
