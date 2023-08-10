import '../css/FontCard.css';

function FontCard({
  font,
  selectedFont,
  setSelectedFont,
  selectedWeight,
  setSelectedWeight,
}) {
  const { name, family, weight } = font;

  const handleSelectFont = (e) => {
    setSelectedFont(e.target.value);
  };
  const handleSelectWeight = (e) => {
    setSelectedWeight(e.target.value);
  };

  const Options = () => {
    if (!weight[1]) {
      return <option value='regular'>Regular</option>;
    } else {
      return (
        <>
          <option value='regular'>Regular</option>
          <option value='bold'>Bold</option>
        </>
      );
    }
  };

  return (
    <>
      <div className='font-card'>
        <input
          className='radio-button'
          type='radio'
          name='font-select'
          id={family}
          value={family}
          checked={selectedFont === family}
          onChange={handleSelectFont}
        />
        <label className='radio-label' htmlFor={family}>
          <div className='a-large'>
            <h1 style={{ fontFamily: `${family}-${weight}`, fontSize: '5rem' }}>
              Aa
            </h1>
            <select
              className='weight-select'
              name='weight-select'
              id='weight-select'
              value={selectedWeight}
              onChange={handleSelectWeight}
            >
              <Options />
            </select>
          </div>
        </label>
        <h2 className='name'>{name}</h2>
      </div>
    </>
  );
}

export default FontCard;
