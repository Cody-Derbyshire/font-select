import '../css/Main.css';
import FontList from './FontList';

const Main = ({
  fonts,
  selectedFont,
  setSelectedFont,
  typedText,
  setTypedText,
}) => {
  const onType = (e) => {
    setTypedText(e.target.value);
  };

  return (
    <>
      <div className='main'>
        <input
          className='type-something'
          type='text'
          value={typedText}
          onChange={onType}
          defaultValue={'Type Something!'}
        />
        <FontList
          fonts={fonts}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
        <h1 className='typed-text' style={{ fontFamily: `${selectedFont}` }}>
          {typedText}
        </h1>
      </div>
    </>
  );
};

export default Main;
