import '../css/FontList.css';
import FontCard from './FontCard';

function FontList({ fonts, selectedFont, setSelectedFont }) {
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
            />
          );
        })}
      </div>
    </>
  );
}

export default FontList;
