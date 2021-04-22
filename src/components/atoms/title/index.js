import { Title } from './styles';
import PropTypes from 'prop-types';

const TitleComponet = (props) => {
  const { children, color, variant, fontSize, marginText } = props;
  console.log('fontSize', fontSize);
  return (
    <Title
      color={color}
      variant={variant}
      fontSize={fontSize}
      marginText={marginText}
    >
      {children}
    </Title>
  );
};

TitleComponet.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
};

TitleComponet.defaultProps = {
  color: 'white',
  marginText: '0px',
};

export default TitleComponet;
