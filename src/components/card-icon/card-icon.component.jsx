/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
import { useDispatch, useSelector } from 'react-redux';
import { selectCardCount, selectIsCardOpen } from '../../store/card/card.selector';
import { setIsCardOpen } from '../../store/card/card.action';

import { ShoppingIcon, ItemCount, CardIconContainer } from './card-icon.styles';

const CardIcon = () => {
  const dispatch = useDispatch();
  const cardCount = useSelector(selectCardCount);
  const isCardOpen = useSelector(selectIsCardOpen);

  const toggleCard = () => dispatch(setIsCardOpen(!isCardOpen));

  return (
    <CardIconContainer onClick={(toggleCard)}>
      <ShoppingIcon />
      <ItemCount>{cardCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CardIcon;
