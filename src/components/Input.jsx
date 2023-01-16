import wrapWithBox from './Wrapper';

function Input({ label, value, setValue }) {
  return (
    <input type="text" placeholder={label} value={value ? value : ''} onChange={({ target }) => setValue(target.value)} onFocus={() => value ? null : setValue('')} />
  );
}

export default wrapWithBox(Input);
