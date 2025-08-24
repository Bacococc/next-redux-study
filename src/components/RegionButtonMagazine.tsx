import React from 'react';
import { setRegion } from '@/store/uiSlice';
import { useAppDispatch } from '@/store/hooks';

function RegionButtonMagazine() {
  const dispatch = useAppDispatch();

  const handleRegionButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = event.target.value;
    dispatch(setRegion(buttonValue));
  }

  return(
    <div>
      <button value={'서울'} onClick={handleRegionButton}>
        서울
      </button>
      <button value={'부산'} onClick={handleRegionButton}>
        부산
      </button>
      <button value={'대구'} onClick={handleRegionButton}>
        대구
      </button>
      <button value={'경주'} onClick={handleRegionButton}>
        경주
      </button>
      <button value={'대전'} onClick={handleRegionButton}>
        대전
      </button>
      <button value={'그 외'} onClick={handleRegionButton}>
        그 외
      </button>
    </div>
  )
};

export default RegionButtonMagazine;

