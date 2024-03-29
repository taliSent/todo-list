import useTitleLogic from "@/hooks/useTitleLogic";
import "@/scss/components/_title.scss";

const TITLE = "T O D O";

const Title = () => {
  const { imgAdress, toggleTheme } = useTitleLogic();
  return (
    <h1 className='title' data-testid='title'>
      <div>{TITLE}</div>
      <img
        src={imgAdress}
        alt='button to toggle theme'
        className='toggle-theme-icon'
        height='15px'
        onClick={() => toggleTheme((prev: boolean) => !prev)}
        role='button'
        data-testid='toggle-theme'
      />
    </h1>
  );
};
export default Title;
