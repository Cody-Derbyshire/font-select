import '../css/FontList.css';
import FontCard from './FontCard';
import { useFonts } from './FontContext';

function FontList({
  selectedFont,
  setSelectedFont,
  selectedWeight,
  setSelectedWeight,
}) {
  const fonts = useFonts();
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
