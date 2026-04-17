import './custom-button.css';
import CustomText from '../custom-text/custom-text';

function CustomButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      <CustomText text={props.text} />
    </button>
  );
}

export default CustomButton;
