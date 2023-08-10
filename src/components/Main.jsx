import '../css/Main.css';
import FontList from './FontList';

const Main = ({
  fonts,
  selectedFont,
  setSelectedFont,
  selectedWeight,
  setSelectedWeight,
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
          selectedWeight={selectedWeight}
          setSelectedWeight={setSelectedWeight}
        />
        <h1
          className='typed-text'
          style={{ fontFamily: `${selectedFont}-${selectedWeight}` }}
        >
          {typedText}
        </h1>
        <p>{`${selectedFont}-${selectedWeight}`}</p>
      </div>
    </>
  );
};

export default Main;
