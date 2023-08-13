import '../css/Main.css';

import FontList from './FontList';
import { useFonts } from './FontContext';

const Main = ({
  selectedFont,
  setSelectedFont,
  selectedWeight,
  setSelectedWeight,
  typedText,
  setTypedText,
}) => {
  const fonts = useFonts();
  const onType = (e) => {
    setTypedText(e.target.value);
  };

  const selectedFontData = fonts.fonts.find(
    (font) => font.family === selectedFont
  );

  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };

  return (
    <>
      <div className='main'>
        <input
          className='type-something'
          type='text'
          value={typedText}
          onChange={onType}
          maxLength={37}
        />

        <FontList
          fonts={fonts}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          selectedWeight={selectedWeight}
          setSelectedWeight={setSelectedWeight}
        />
        <div>
          <div className='selection'>
            <p className='selected-font-name'>
              {selectedFontData ? selectedFontData.name : 'None'}
            </p>

            {selectedFontData && selectedFontData.weight[1] && (
              <select
                className='weight-select'
                value={selectedWeight}
                onChange={handleWeightChange}
              >
                {selectedFontData.weight.map((weight, index) => (
                  <option key={index} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            )}
          </div>
          <h1
            className='typed-text'
            style={{ fontFamily: `${selectedFont}-${selectedWeight}` }}
          >
            {typedText}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
