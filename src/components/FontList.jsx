import '../css/FontList.css';
import FontCard from './FontCard';

function FontList({
  fonts,
  selectedFont,
  setSelectedFont,
  selectedWeight,
  setSelectedWeight,
}) {
  return (
    <>
      <div className='font-list'>
        {fonts.fonts.map((font, index) => {
          return (
            <FontCard
              key={index}
              font={font}
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              selectedWeight={selectedWeight}
              setSelectedWeight={setSelectedWeight}
            />
          );
        })}
      </div>
    </>
  );
}

export default FontList;
